import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { ChatContainer, ChatInputContainer, Input, MessageItem, MessageList, SendButton } from "./styles";
import type { IMessages } from "../../interfaces/Message";
import { api } from "../../services/api";
import { toast } from "sonner";
import { getProfile } from "../../services/user";
import type { iUsers } from "../../interfaces/Users";



interface ChatProps{
  ticket_id: string;
}

export function ChatComponent({ticket_id}: ChatProps) {
  const [messages, setMessages] = useState<IMessages[]>([])
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false)
  const [userLogged, setUserLogged] = useState<iUsers>()


    //pegando o usuário logado

      async function reloadUser() {
    
      const user = await getProfile();
     
       setUserLogged(user);
     }

 

 

 
    //Manter o scroll sempre no final
  const messageListRef = useRef<HTMLDivElement>(null)

  // 1. Função para buscar as mensagens do Back
   
  async function fetchMessages(){
    try {
      const response = await api.get(`/tickets/${ticket_id}/messages`)
      setMessages(response.data.listMessage.listMessages);
    }catch(error){
      console.error("Erro ao carregar mensagens:", error);
    }
  }

  //2 . Função para enviar nova emnsagem


  async function handleSendMessage(){
    if(!newMessage.trim() || isSending) return;

    try {
      setIsSending(true);

      // Chamada para a rota POST que criamos no Fastify

      await api.post(`/tickets/${ticket_id}/messages`,{
        text: newMessage
      })

      setNewMessage("") 
      await fetchMessages();
    }catch(error){
      toast.error("Erro ao enviar mensagem.")
    }finally{
      setIsSending(false);
    }
  }

  //
// 3. Efeito para carregar ao montar o componente
  useEffect(() => {
    reloadUser()
    fetchMessages()
    
    // Opcional: Polling (atualiza a cada 5 segundos para simular real-time)
    const interval = setInterval(fetchMessages, 5000)
    return () => clearInterval(interval)
  }, [ticket_id])

  // 4. Efeito para rolar o chat para baixo quando chegar mensagem nova
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);


  console.log("Conteúdo de mensges: ",messages)

    console.log(userLogged)
  return (
    <ChatContainer>
      <h3>Interações</h3>
      
      <MessageList ref={messageListRef}>

        {messages.map(msg => (
          <MessageItem key={msg.id} isOwnMessage={msg.user_id === userLogged?.id}>
            <div className="message-header">
              <strong>{msg.user.name}</strong>
              <span>
                {new Date(msg.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <p>{msg.text}</p>
          </MessageItem>
        ))}
      </MessageList>

      <ChatInputContainer>
        <Input 
          placeholder="Digite uma mensagem..." 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          disabled={isSending}
        />
        <SendButton onClick={handleSendMessage} disabled={isSending || !newMessage.trim()}>
          <FiSend size={20} />
        </SendButton>
      </ChatInputContainer>
    </ChatContainer>
  );
}
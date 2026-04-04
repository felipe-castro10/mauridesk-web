import { useNavigate } from "react-router"
import { Back, Container, MainContent, TableInfo, Title, ViewDescriptions } from "./styles"
import { MobileHeader } from "../../components/MobileHeader/MobileHeader"
import { SideBar } from "../../components/SideBar/SideBar"
import { GoArrowLeft } from "react-icons/go"
import { FormTicket } from "../../components/FormTicket/FormTicket"
import type { iTicket } from "../../interfaces/Ticket"
import { api } from "../../services/api"
import { toast } from "sonner"

export function CreateTicket(){

  const navigate = useNavigate()

 async function handleCreateTicket(data: any, files: File[]) {
  try {
   

    // 2. Montagem do objeto final para o Fastify/Prisma
    const payload = {
      title: data.title,
      description: data.description,
      category_id: data.category_id, // Certifique-se de que o nome bate com o back
      branch_id: data.branch_id,
      department: data.department,
      priority: data.priority,
      dynamic_responses: data.dynamic_responses // Enviamos o JSON puro também
    };

  

    const response = await api.post('/tickets', payload);
    const { id: ticketId } = response.data.ticket;

    // 3. Upload de arquivos (mantém sua lógica de attachments)
    if (files.length > 0) {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));
      await api.post(`/attachments/${ticketId}`, formData);
    }

    toast.success("Chamado criado com sucesso!");
    navigate("/home");
    
  } catch (error) {
    console.log("Erro:", error);
    toast.error("Erro ao criar chamado.");
  }
}
  
  return(
    <Container>
   <MobileHeader/>
    <SideBar/>
      <MainContent>
        <TableInfo>
        <Title>Criar Chamado</Title>
        <Back  onClick={() => navigate(-1)}><GoArrowLeft/> Voltar</Back>
        </TableInfo>
      <ViewDescriptions>
        <FormTicket onSubmit={handleCreateTicket}/>
      
      </ViewDescriptions>
       
      </MainContent>
     
    </Container>

    
  )
}
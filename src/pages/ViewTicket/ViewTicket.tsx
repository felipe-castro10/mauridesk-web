import { GoArrowLeft } from "react-icons/go";
import { SideBar } from "../../components/SideBar/SideBar";
import { Ticket} from "../../components/Ticket/Ticket";
import { Back, Container, MainContent, TableInfo, Title, ViewDescriptions, TechUser } from "./styles";
import { useNavigate, useParams } from "react-router";
import { MobileHeader } from "../../components/MobileHeader/MobileHeader";
import { TechCard } from "../../components/TechCard/TechCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { iTicket } from "../../interfaces/Ticket";
import { getProfile } from "../../services/user";
import type { iUsers } from "../../interfaces/Users";
import { ChatComponent } from "../../components/ChatComponent/ChatComponente";



export function ViewTicket(){
  const navigate = useNavigate()
  const {id} = useParams()

 const [ticket, setTicket] = useState<iTicket | null>(null)
 const [user, setUser] = useState<iUsers | null>(null)
 const [attachments, setAttachments] = useState<any[]>([])

 async function getTicket(){
  const response = await api.get(`/ticket/${id}`)

  
  setTicket(response.data.ticket)
 }




  useEffect(() => {
    async function loadTicket(){
      const response = await api.get(`/ticket/${id}`)

      setTicket(response.data.ticket)
    }

    async function loadAttachments(){

      try{
           const response = await api.get(`/attachments/${id}`)
          setAttachments(response.data.attachments)
      }catch (err){
        console.error("Erro ao carregar anexos", err)
      }
   
    }

    async function loadUser(){
      const data = await getProfile()

      setUser(data)
    }

    loadTicket()
    loadUser()
    loadAttachments()
  }, [id])





  return(
    <Container>
   <MobileHeader/>
    <SideBar/>
    

      <MainContent>
          <TableInfo>
               <Title>Chamado</Title>
               <Back  onClick={() => navigate(-1)}><GoArrowLeft/> Voltar</Back>
          </TableInfo>
        { ticket && (<ViewDescriptions>
          <Ticket data={ticket} attachments={attachments}/>

          <TechUser>
          
         <TechCard 
            technician={ticket.technician} 
            createdAt={ticket.created_at} 
            firstResponseAt={ticket.first_response_at} 
            type_user={user?.type_user}
            ticket_id={ticket.id}
            onUpdate={getTicket}
            status_ticket={ticket.status}
            closed_at={ticket.closed_at}
          />
          <ChatComponent ticket_id={ticket.id}/>
          </TechUser>
           </ViewDescriptions>)}
       
      </MainContent>
     
    </Container>

    
  )
}
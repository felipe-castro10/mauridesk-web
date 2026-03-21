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

  async function handleCreateTicket(data: iTicket){

    console.log(data)

    try{
      await api.post("/tickets", {
        title: data.title,
        description: data.description,
        category: data.category,
        department: data.department,
        priority: data.priority,
        branch_id: data.branch_id
      }) 

      toast.success("Chamado criado com sucesso!")
      navigate("/home")
    }catch(err){
      toast.error("Erro ao criar o chamado")
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
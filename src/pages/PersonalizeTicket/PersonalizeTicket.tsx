import { useNavigate } from "react-router"
import { MobileHeader } from "../../components/MobileHeader/MobileHeader"
import { SideBar } from "../../components/SideBar/SideBar"
import { GoArrowLeft } from "react-icons/go"
import { EditFormTicket } from "../../components/EditFormTicket/EditFormTicket"
import { Back, Container, MainContent, TableInfo, Title, ViewDescriptions } from "./styles"

export function PersonalizeTicket(){

  const navigate = useNavigate()


  return(
    <Container>
   <MobileHeader/>
    <SideBar/>
      <MainContent>
        <TableInfo>
        <Title>Customização formulário</Title>
        <Back  onClick={() => navigate(-1)}><GoArrowLeft/> Voltar</Back>
        </TableInfo>
     
        <EditFormTicket />
      
     
       
      </MainContent>
     
    </Container>

    
  )
}
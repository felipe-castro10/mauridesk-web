 import { FiAlertCircle, FiCheckCircle, FiClock, FiEye } from "react-icons/fi";
import { TableCard, Table, Avatar } from "./styles"
import { useNavigate } from "react-router";
import { StatusIcon } from "../StatusIcon/StatusIcon";
import type { iTicket } from "../../interfaces/Ticket";
import { useEffect, useState } from "react";
import { timeAgo } from "../../utils/date";
import { baseURL } from "../../services/api";
import { getProfile } from "../../services/user";



interface ListTicket{
  data: iTicket[];
}




 export function ListCard({data}: ListTicket ){

  const [user, setUser] = useState<any>()

  useEffect(()=> {
    async function loadUser(){
      
      const data = await getProfile()

      setUser(data)
    }

    loadUser()
  }, [])


  // TRADUZIR O STATUS DO TICKET
  const statusTranslations: Record<string, string> = {
  'OPEN': 'Aberto',
  'IN PROGRESS': 'Em atendimento',
  'CLOSED': 'Encerrado',
  'RESOLVED': 'Resolvido',
};




  const navigate = useNavigate()

  return(
    <TableCard>
          <Table>
            <thead>
              <tr>
                <th>Atualizado em</th>
                <th>Criado por</th>
                <th>Título</th>
                <th>Serviço</th>
                <th>Filial</th>
                <th>Responsável</th>     
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{timeAgo(ticket.updated_at)}</td>
                  <td>
                        <>
                         {<Avatar 
                           src={`${baseURL}/users/avatar/${ticket.creator_id}`} 
                           onError={(e) => {
                             const target = e.target as HTMLImageElement;
                             target.src = "/src/assets/avatar.png"; // Caminho da sua foto padrão
                             target.onerror = null; // Evita loop infinito se a imagem padrão também falhar
                           }}
                           alt={ticket.creator.name}
                         />}
                        {ticket.creator.name}
                       </> 
                    </td>
                  <td><strong>{ticket.title}</strong></td>
                  <td>{ticket.description}</td>
                  <td>{ticket.branch.name}</td>
                  <td>
                     {
                        ticket.technician ? (
                        <>
                         <Avatar 
                           src={`${baseURL}/users/avatar/${ticket.technician_id}`} 
                           onError={(e) => {
                             const target = e.target as HTMLImageElement;
                             target.src = "/src/assets/avatar.png"; // Caminho da sua foto padrão
                             target.onerror = null; // Evita loop infinito se a imagem padrão também falhar
                           }}
                           alt={ticket.technician.name}
                         />
                        {ticket.technician.name}
                        </>
                      ) : (
                        <span>Sem interação</span>
                      )
                    }
                  </td>
                  <td>
                    
                 <StatusIcon st={statusTranslations[ticket.status] || ticket.status}/>
                  </td>
                  <td>
                    <FiEye color="#828ba2" style={{ cursor: 'pointer' }} onClick={() => navigate(`/viewTicket/${ticket.id}`)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableCard>
  )
 }

 
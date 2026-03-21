import { Content, DateTicket, ExtrasTicket, IdStatus } from "./styles";
import { StatusIcon } from "../StatusIcon/StatusIcon";
import type { iTicket } from "../../interfaces/Ticket";
import { timeAgo } from "../../utils/date";


interface getTicket{
  data: iTicket | null;
}

export function Ticket({data}: getTicket){

   // TRADUZIR O STATUS DO TICKET
  const statusTranslations: Record<string, string> = {
  'OPEN': 'Aberto',
  'IN PROGRESS': 'Em atendimento',
  'CLOSED': 'Encerrado',
};

  // TRADUZIR A PRIORIDADE DO TICKET

  const priorityTranslations: Record<string, string> = {
    'LOW': 'Baixo',
    'MEDIUM': 'Médio',
    'HIGH': 'Alto',
    'CRITICAL': 'Urgente'
  }



  if(!data){
    return <p>Carregando ticket....</p>
  }

  return(
    <Content>
      <IdStatus><p>0004</p> <StatusIcon st={statusTranslations[data.status] || data.status}/></IdStatus>
      <h1>{data.title}</h1>
      <h2>Descrição</h2>
      <p>{data.description}</p>

      <ExtrasTicket>
        <div>
           <h2>Categoria</h2>
           <p>{data.category}</p>
        </div>
         <div>
           <h2>Prioridade</h2>
           <p>{priorityTranslations[data.priority] || data.priority}</p>
        </div>
      </ExtrasTicket>

      <ExtrasTicket>
        <div>
           <h2>Departamento</h2>
           <p>{data.department}</p>
        </div>
        <div>
          <h2>Filial</h2>
          <p>{data.branch.name}</p>
        </div>

      </ExtrasTicket>
      
     
      <DateTicket>
        <div>
          <h2>Criado em</h2>
          <p>{timeAgo(data.created_at)}</p>
        </div>
        <div>
          <h2>Atualizado em</h2>
          <p>{timeAgo(data.updated_at)}</p>
        </div>
        
      </DateTicket>
    </Content>
  )
}
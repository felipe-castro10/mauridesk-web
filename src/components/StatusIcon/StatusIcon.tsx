import { FiAlertCircle, FiCheckCircle, FiClock } from "react-icons/fi";
import { StatusBadge } from "./styles";

interface Status{
  st: string;
}

export function StatusIcon({st}: Status){
  return(
      <StatusBadge type={st}>
         {st === 'Aberto' && <FiAlertCircle />}
          {st === 'Em atendimento' && <FiClock />}
          {st === 'Encerrado' && <FiCheckCircle />}
            {st}
       </StatusBadge>
  )
}
import { FiAlertCircle, FiArchive, FiCheckCircle, FiClock } from "react-icons/fi";
import { StatusBadge } from "./styles";

interface Status{
  st: string;
}

export function StatusIcon({st}: Status){
  return(
      <StatusBadge type={st}>
         {st === 'Aberto' && <FiAlertCircle />}
          {st === 'Em atendimento' && <FiClock />}
          {st === 'Resolvido' && <FiCheckCircle />}
          {st === 'Encerrado' && <FiArchive/>}
            {st}
       </StatusBadge>
  )
}
import { Content, DateTicket, ExtrasTicket, FullScreenModal, IdStatus, MediaGallery, Thumbnail } from "./styles";
import { StatusIcon } from "../StatusIcon/StatusIcon";
import type { iTicket } from "../../interfaces/Ticket";
import { timeAgo } from "../../utils/date";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight, GoX } from "react-icons/go";
import theme from "../../styles/theme";


interface getTicket{
  data: iTicket | null;
  attachments: any[];
}

export function Ticket({data, attachments}: getTicket){

  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

const nextMedia = () => {
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((selectedMediaIndex + 1) % attachments.length);
    }
  };

  const prevMedia = () => {
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((selectedMediaIndex - 1 + attachments.length) % attachments.length);
    }
  };

   // TRADUZIR O STATUS DO TICKET
  const statusTranslations: Record<string, string> = {
  'OPEN': 'Aberto',
  'IN PROGRESS': 'Em atendimento',
  'CLOSED': 'Encerrado',
  'RESOLVED': 'Resolvido',
};

  // TRADUZIR A PRIORIDADE DO TICKET

  const priorityTranslations: Record<string, string> = {
    'LOW': 'Baixo',
    'MEDIUM': 'Médio',
    'HIGH': 'Alto',
    'CRITICAL': 'Urgente'
  }



 if (!data) return <p>Carregando ticket....</p>;

  // Debug rápido: Se aparecer no console, o dado está chegando.
  console.log("DADOS ADICIONAIS DO PROTHEUS:", data.dynamic_responses);

  return(
    <Content>
     <IdStatus>
        {/* Melhorei a exibição do ID */}
        <p>ID: {String(data.id).padStart(4, '0')}</p> 
        <StatusIcon st={statusTranslations[data.status] || data.status} />
      </IdStatus>
      
      <h1>{data.title}</h1>
      
      <h2>Descrição</h2>
      <p>{data.description}</p>

      {/* --- NOVA SEÇÃO: INFORMAÇÕES TÉCNICAS (DINÂMICAS) --- */}
     {Array.isArray(data.dynamic_responses) && data.dynamic_responses.map((veiculo, index) => (
  <div key={index} style={{ marginBottom: '2rem', padding: '1rem', borderBottom: '1px solid #eee' }}>
    <h3 style={{ color: theme.COLORS.ORANGE_200, fontSize: '1.6rem', marginBottom: '1rem' }}>
      Veículo {index + 1}
    </h3>
    <ExtrasTicket style={{ flexWrap: 'wrap', justifyContent: 'flex-start', gap: '2rem' }}>
      {Object.entries(veiculo as Record<string, any>).map(([label, value]) => (
        <div key={label} style={{ textAlign: 'left', alignItems: 'flex-start' }}>
          <h2>{label}</h2>
          {/* O segredo está aqui: String(value) resolve o erro do TS */}
          <p>{value ? String(value) : "---"}</p>
        </div>
      ))}
    </ExtrasTicket>
  </div>
))}

      {/* --- SEÇÃO: CAMPOS PADRÃO (Categoria/Prioridade/etc) --- */}
      <ExtrasTicket>
        <div>
           <h2>Categoria</h2>
           {/* Trata se a categoria vier como objeto ou string */}
           <p>{typeof data.category === 'object' ? data.category.name : data.category}</p>
        </div>
        <div>
           <h2>Prioridade</h2>
           <p>{priorityTranslations[data.priority] || data.priority}</p>
        </div>
      </ExtrasTicket>
   


      {attachments.length > 0 && (
        <>
          <h2>Anexos</h2>
          <MediaGallery>
            {attachments.map((file, index) => (
              <Thumbnail key={file.id} onClick={() => setSelectedMediaIndex(index)}>
                {file.type === 'image' ? (
                  <img src={file.url} alt="Anexo" />
                ) : (
                  <video src={file.url} />
                )}
              </Thumbnail>
            ))}
          </MediaGallery>
        </>
      )}

      {/* Modal de Expansão */}
      {selectedMediaIndex !== null && (
        <FullScreenModal>
          <button className="close" onClick={() => setSelectedMediaIndex(null)}><GoX /></button>
          
          <button className="nav prev" onClick={prevMedia}><GoChevronLeft /></button>
          
          {attachments[selectedMediaIndex].type === 'image' ? (
            <img src={attachments[selectedMediaIndex].url} alt="Expandido" />
          ) : (
            <video src={attachments[selectedMediaIndex].url} controls autoPlay />
          )}

          <button className="nav next" onClick={nextMedia}><GoChevronRight /></button>
        </FullScreenModal>
      )}

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
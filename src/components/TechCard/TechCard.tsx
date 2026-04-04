import { 
  Avatar, ClockSpan, Container, ProfileTech, 
  EmptyState, ButtonGroup, ActionButton, Footer 
} from "./styles";

import type { iUsers } from "../../interfaces/Users";
import { timeAgo } from "../../utils/date";
import { api, baseURL } from "../../services/api";
import { FiUserX, FiUserPlus, FiPower, FiRefreshCw } from "react-icons/fi";
import { toast } from "sonner";
import { useState } from "react";
import { ModalListTech } from "../ModalListTech/ModalListTech";

interface TechCardProps {
  technician: iUsers | null;
  createdAt: string;
  firstResponseAt: string | null;
  type_user?: string; 
  ticket_id: string;
  status_ticket: string;
  closed_at: string | null;
  onUpdate: () => void;
}

export function TechCard({ technician, createdAt, firstResponseAt, type_user, ticket_id,status_ticket, closed_at,onUpdate }: TechCardProps) {
  const isTech = type_user === 'TECH';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o Modal
  const [resolvedCheckBox, setResolvedCheckBox] = useState(false)

  // Função para o técnico logado assumir o ticket
  async function handleStartTicket() {
    try {
      setIsSubmitting(true);
      const response = await api.patch(`/ticket/start/${ticket_id}`,{
        isTech: ""
      });
      if (response.status === 200) {
        toast.success("Ticket vinculado com sucesso!");
        onUpdate();
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar assumir o chamado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Função para designar um técnico específico selecionado no Modal
  async function handleAssignTechnician(selectedTechId: string) {

    
    try {
      setIsSubmitting(true);
      const response = await api.patch(`/ticket/start/${ticket_id}`, {
        idTech: selectedTechId
      });

      if (response.status === 200) {
        toast.success("Técnico designado com sucesso!");
        setIsModalOpen(false);
        onUpdate();
      }
    } catch (error) {
      toast.error("Erro ao designar técnico.");
    } finally {
      setIsSubmitting(false);
    }

    
  }
// função para fechar o ticket
  async function handleCloseTicket(){

    console.log(resolvedCheckBox)
    
    try {
      setIsSubmitting(true);
      const response = await api.patch(`/ticket/closed/${ticket_id}/${resolvedCheckBox}`)

      if(response.status === 200){
        toast.success("Ticket encerrado com sucesso!")
        onUpdate();
      }
    }catch{
      toast.error("Erro ao encerrar ticket.")
    }finally{
      setIsSubmitting(false);
    }

    
  }

  async function handleReopenTicket(){
    try {
      setIsSubmitting(true);
      const response = await api.patch(`/ticket/restart/${ticket_id}`)

      if(response.status === 200){
        toast.success("Ticket reaberto com sucesso!")
        onUpdate();
      }
    }catch{
      toast.error("O ticket já está resolvido!")
    }finally{
      setIsSubmitting(false);
    }
  }
  
  const isInProgress = status_ticket === 'IN PROGRESS';
  const isFinished = status_ticket === 'RESOLVED' || status_ticket === 'CLOSED';

  return (
    <Container>
      <h1>Técnico Responsável</h1>

      {technician ? (
        <>
          <ProfileTech>
            <Avatar 
              src={`${baseURL}/users/avatar/${technician.id}`} 
              onError={(e) => { (e.target as HTMLImageElement).src = "/src/assets/avatar.png"; }}
              alt={technician.name}
            />
            <div className="info">
              <strong>{technician.name}</strong>
              <span>{technician.email}</span>
            </div>
          </ProfileTech>

          <h2>Início atendimento</h2>
          <span>
            {firstResponseAt ? new Date(firstResponseAt).toLocaleString('pt-BR') : "Aguardando início..."}
          </span>

          {/* EXIBIÇÃO DE FECHAMENTO */}
          {isFinished && (
            <>
              <h2>Data de Encerramento</h2>
              <span>{closed_at ? new Date(closed_at).toLocaleString('pt-BR') : "Data não disponível"}</span>
              
              {isTech && (
                <ActionButton onClick={handleReopenTicket} disabled={isSubmitting} variant="outline" style={{ marginTop: '1rem' }}>
                  <FiRefreshCw size={18} /> Reabrir Ticket
                </ActionButton>
              )}
            </>
          )}

          {/* BOTÃO DE ENCERRAR (Apenas se estiver em progresso) */}
          {isInProgress && isTech && (
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '1.4rem' }}>
                <input 
                  type="checkbox" 
                  checked={resolvedCheckBox} 
                  onChange={(e) => setResolvedCheckBox(e.target.checked)}
                />
                Marcar como resolvido?
              </label>

              <ActionButton onClick={handleCloseTicket} disabled={isSubmitting} style={{ backgroundColor: '#c53030' }}>
                <FiPower size={18} /> Encerrar Chamado
              </ActionButton>
            </div>
          )}
        </>
      ) : (
        <EmptyState>
          <FiUserX size={40} />
          <div>
            <span>Chamado aguardando técnico</span>
            {isTech && <span>Deseja assumir ou designar este chamado?</span>}
          </div>

          {isTech && (
            <ButtonGroup>
              <ActionButton onClick={handleStartTicket} disabled={isSubmitting}>
                {isSubmitting ? "Vinculando..." : "Assumir"}
              </ActionButton>
              <ActionButton variant="outline" onClick={() => setIsModalOpen(true)}>
                <FiUserPlus size={18} /> Designar
              </ActionButton>
            </ButtonGroup>
          )}
        </EmptyState>
      )}

      <Footer>
        <h2>Duração do chamado</h2>
        <ClockSpan>{timeAgo(createdAt)}</ClockSpan>
      </Footer>

      <ModalListTech 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAssignTechnician}
      />
    </Container>
  );
}
import { 
  Avatar, ClockSpan, Container, ProfileTech, 
  EmptyState, ButtonGroup, ActionButton, Footer 
} from "./styles";

import type { iUsers } from "../../interfaces/Users";
import { timeAgo } from "../../utils/date";
import { api, baseURL } from "../../services/api";
import { FiUserX, FiUserPlus } from "react-icons/fi";
import { toast } from "sonner";
import { useState } from "react";
import { ModalListTech } from "../ModalListTech/ModalListTech";

interface TechCardProps {
  technician: iUsers | null;
  createdAt: string;
  firstResponseAt: string | null;
  type_user?: string; 
  ticket_id: string;
  onUpdate: () => void;
}

export function TechCard({ technician, createdAt, firstResponseAt, type_user, ticket_id, onUpdate }: TechCardProps) {
  const isTech = type_user === 'TECH';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o Modal

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

  return (
    <Container>
      <h1>Técnico Responsável</h1>

      {technician ? (
        <>
          <ProfileTech>
           <Avatar 
             src={`${baseURL}/users/avatar/${technician.id}`} 
             onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.src = "/src/assets/avatar.png"; // Caminho da sua foto padrão
               target.onerror = null; // Evita loop infinito se a imagem padrão também falhar
             }}
             alt={technician.name}
           />
            <div className="info">
              <strong>{technician.name}</strong>
              <span>{technician.email}</span>
            </div>
          </ProfileTech>

          <h2>Início atendimento</h2>
          <span>
            {firstResponseAt 
              ? new Date(firstResponseAt).toLocaleString('pt-BR') 
              : "Aguardando início..."
            }
          </span>
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
              
              {/* Botão para abrir o Modal */}
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

      {/* Renderização do Modal */}
      <ModalListTech 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAssignTechnician}
      />
    </Container>
  );
}
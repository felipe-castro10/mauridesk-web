import styled from "styled-components";
import theme from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface BadgeItemProps {
  statusColor?: string;
}

export const Sidebar = styled.aside`
  width: 24rem;
  margin: 5rem 1rem 10rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; // Espaçamento entre os cards
  
  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    display: none;
  }
`;
export const EditButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  
  background: rgba(255, 255, 255, 0.2); // Fundo semi-transparente
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  color: ${theme.COLORS.WHITE};

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

// O segredo do LinkedIn: o Avatar fica "pendurado" no banner
export const UserBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.COLORS.DAR_100};
  border-radius: 1.2rem;
  overflow: hidden; // Para o banner não vazar
  padding-bottom: 1.5rem;
  box-shadow: 0 .4rem 1.2rem rgba(0,0,0,0.1);

  // Simulação do banner do LinkedIn
  &::before {
    content: '';
    width: 100%;
    height: 6rem;
    background: linear-gradient(to right, ${theme.COLORS.ORANGE_250}, ${theme.COLORS.ORANGE_100});
  }

  .info {
    margin-top: 4rem; // Espaço para o avatar que subiu
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    
    strong { color: ${theme.COLORS.WHITE}; font-size: 1.6rem; }
    span { color: ${theme.COLORS.GRAY_050}; font-size: 1.2rem; }
  }
`;

// ListOptions agora sem fundo colorido pesado, apenas itens limpos
export const ListOptions = styled.div`
  background: ${theme.COLORS.DAR_100};
  border-radius: 1.2rem;
  padding: 0.8rem 0; // Padding vertical para os itens não colarem na borda
  overflow: hidden;
`;

export const NavItem = styled.div<{ active?: boolean }>`
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.active ? theme.COLORS.ORANGE_250 : theme.COLORS.GRAY_050};
  background-color: transparent;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05); // Um hover bem sutil
    color: ${theme.COLORS.WHITE};
  }

  // Se estiver ativo, podemos colocar uma bordinha lateral como o LinkedIn
  border-left: .3rem solid ${props => props.active ? theme.COLORS.ORANGE_250 : 'transparent'};
`;

export const Avatar = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
  border: .4rem solid ${theme.COLORS.DAR_100};
  position: absolute;
  top: 2.5rem; // Ajuste para ele ficar metade no banner, metade na info
  background: ${theme.COLORS.DAR_100};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  
  box-shadow: 0 .4rem 1.2rem rgba(0,0,0,0.10);
  h4 {
    color: ${theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

// Grid para os contadores
export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;




// O Mini-Card individual com indicador de cor
export const MauriCard = styled.div`
  width: 100%;
  background-color: ${theme.COLORS.DAR_100}; /* Cinza escuro combinando com sua sidebar */
  border-radius: 1.4rem;
  padding: 1.6rem;
  border: .1rem solid ${theme.COLORS.GRAY_050};
`;

export const BadgeItem = styled.div<BadgeItemProps>`
  background: ${theme.COLORS.GRAY_350};
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${props => props.statusColor || `${theme.COLORS.ORANGE_250}`};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
    background: ${theme.COLORS.GRAY_010};
  }
`;

export const BadgeValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.COLORS.WHITE};
  line-height: 1;
`;

export const BadgeLabel = styled.span`
  font-size: 1.2rem;
  color: ${theme.COLORS.GRAY_050};
  margin-top: .4rem;
  text-transform: uppercase;
  font-weight: BOLD;
`;




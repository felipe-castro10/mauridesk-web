import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


// Animação sutil de pulsar para o relógio (opcional, mas "legal")
const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  background: ${theme.COLORS.WHITE};
  border-radius: 1.2rem;
  padding: 2.4rem;
 
  
  flex:1;
  display: flex;
  flex-direction: column;
  max-height: 50rem;



  /* H1: Título Principal */
  h1 {
    font-size: 1.6rem;
    font-weight: 600;
     font-family: "Poppins", sans-serif;
    color: ${theme.COLORS.DARK_300};
    margin: 0 0 2rem 0;
    
    letter-spacing: .1rem;
  }

  /* H2: Labels de tempo */
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${theme.COLORS.DARK_400};
    margin: 1.6rem 0 .4rem 0;
  }

  /* Spans gerais (Data/Hora) */
  > span {
    font-size: 1.4rem;
    color: ${theme.COLORS.DARK_300};
    font-weight: 500;
  }


`;

export const ProfileTech = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-bottom: 2rem;
  border-bottom: .1rem solid ${theme.COLORS.LIGHT_300}; // Linha divisória sutil

  .info {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.6rem;
      color: ${theme.COLORS.DARK_300};
      font-weight: 700;
    }

    span {
      font-size: 1.1rem;
      color: ${theme.COLORS.DARK_400};
      margin-top: .2rem;
      word-break: break-all; // Evita que o e-mail quebre o layout
    }
  }
`;

export const Avatar = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  object-fit: cover;
  border: .4rem solid ${theme.COLORS.YELLOW_300}; // Borda amarela grossa e marcante
  box-shadow: 0 0 1rem rgba(255, 193, 7, 0.3); // Brilho amarelo suave
`;

// Estilo específico para o snap de horas
export const ClockSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: .8rem;
  padding: 1rem 2rem;
  background-color: ${theme.COLORS.YELLOW_300};
  color: ${theme.COLORS.WHITE}; // Texto branco para contraste
  font-weight: 700;
  font-size: 1.8rem;
  border-radius: 3rem; // Cantos arredondados (Snap)
  width: 100%;
  text-align: center;
  animation: ${pulse} 2s infinite ease-in-out; // Aplica a animação
  box-shadow: 0 .4rem .6rem rgba(0, 0, 0, 0.1); // Sombra para profundidade
`;




// ... (seus estilos anteriores: Container, ProfileTech, etc.)

export const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  padding: 1rem 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span:first-child {
      color: ${theme.COLORS.DARK_300};
      font-size: 1.4rem;
      font-weight: 600;
    }

    span:last-child {
      color: ${theme.COLORS.GRAY_300};
      font-size: 1.2rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

interface ButtonProps {
  variant?: 'primary' | 'outline';
}

export const ActionButton = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  
  padding: 1rem;
  border-radius: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s;

 background: ${({ variant }) => 
    variant === 'outline' ? 'transparent' : theme.COLORS.ORANGE_250};
  
  color: ${({ variant }) => 
    variant === 'outline' ? theme.COLORS.ORANGE_250 : theme.COLORS.WHITE};
  
  border: ${({ variant }) => 
    variant === 'outline' ? `.1rem solid ${theme.COLORS.ORANGE_250}` : 'none'};
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Footer = styled.div`
  margin-top: auto;
`;
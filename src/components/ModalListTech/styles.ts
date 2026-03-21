import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

// Animações para entrada suave
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(-20px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.7); // Fundo escuro sutil
  backdrop-filter: blur(5px); // Desfoque de fundo elegante (pode ser ajustado)
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.25s ease-out;
`;

export const ModalContent = styled.div`
  background: ${theme.COLORS.WHITE};
  width: 100%;
  max-width: 460px; // Ligeiramente mais largo para acomodar o avatar e filial
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.3s ease-out;
  overflow: hidden;
  border-top: 4px solid ${theme.COLORS.ORANGE_250}; // Barra de cor laranja corporativa no topo

  header {
    padding: 1.5rem;
    border-bottom: .1rem solid ${theme.COLORS.LIGHT_100};
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.25rem;
      color: ${theme.COLORS.DARK_700};
      font-weight: 600;
      margin: 0;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: ${theme.COLORS.DARK_400};
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  line-height: 1;

  &:hover {
    color: ${theme.COLORS.ORANGE_250}; // Cor laranja no hover
    transform: rotate(90deg);
  }
`;

export const UserList = styled.div`
  max-height: 40rem; // Altura máxima para ativar o scroll
  overflow-y: auto;
  padding: 0.75rem;

  /* Estilização da barra de rolagem (Custom Scrollbar) */
  &::-webkit-scrollbar {
    width: .7rem;
  }
  &::-webkit-scrollbar-track {
    background: ${theme.COLORS.LIGHT_100};
    border-radius: .4rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.COLORS.LIGHT_300};
    border-radius: .4rem;
    
    &:hover {
      background: ${theme.COLORS.ORANGE_250}; // Laranja corporativo no scrollbar
    }
  }

  p.loading {
    text-align: center;
    padding: 2.5rem;
    color: ${theme.COLORS.GRAY_400};
    font-size: 0.95rem;
  }
`;

export const UserItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; // Alinha o avatar com o texto
  gap: 1rem; // Espaçamento entre avatar e info
  cursor: pointer;
  border-radius: .8rem;
  transition: all 0.2s ease;
  border: 1px solid transparent; // Borda invisível para evitar pulo no hover

  &:hover {
    background: ${theme.COLORS.WHITE_300}; // Fundo creme/amarelo muito suave
    border-color: ${theme.COLORS.YELLOW_100}; // Borda levemente amarela
    box-shadow: 0 .4rem 1rem rgba(230, 81, 0, 0.08); // Sombra laranja suave
  }

  & + div {
    margin-top: .6rem; // Espaçamento entre itens
  }
`;

export const Avatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  object-fit: cover;
  border: .2rem solid ${theme.COLORS.ORANGE_250}; // Borda leve para o avatar
  background-color: ${theme.COLORS.WHITE_230}; // Fundo para fallback de imagem
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  strong {
    color ${theme.COLORS.DAR_100};
    font-size: 1.8rem;
    font-weight: 600;
  }

  span.email {
    color: ${theme.COLORS.GRAY_400};
    font-size: 1.2rem;
    margin-top: .1rem;
  }
`;

export const BranchTag = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-top: .5rem;
  font-size: 1rem;
  color: ${theme.COLORS.ORANGE_250}; // Texto laranja
  font-weight: 500;
  background-color: ${theme.COLORS.ORANGE_050}; // Fundo laranja muito suave
  padding: 3px 8px;
  border-radius: 4px;
  width: fit-content;

  svg {
    // Caso use ícone de localização
    font-size: 0.9rem;
  }
`;
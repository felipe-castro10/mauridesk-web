import styled from "styled-components";
import theme from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Mobile = styled.header`
  display: none; // Escondido por padrão no desktop
  width: 100%;
  height: 7rem;
  background-color: ${theme.COLORS.GRAY_010};
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    position: fixed;
    
    top: 0;
    z-index: 10;
  }
`;
export const LogoSection = styled.div`
  padding: 0 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;

  

  span { color: ${theme.COLORS.WHITE};  font-family: "Poppins"; font-weight: bold; font-size: 2rem; display: block; }
`;


export const MenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  backdrop-filter: blur(4px);
  
  /* Controle de visibilidade do fundo */
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;

  .menu-content {
    width: 32rem;
    height: 100%;
    background: rgba(18, 18, 18, 0.8);
    backdrop-filter: blur(12px);
    padding: 2rem;
    
    /* O SEGREDO DO ARRASTE: */
    /* Se fechado, ele fica -100% (fora da tela à esquerda). Se aberto, volta para 0 */
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); // Curva de movimento suave

    display: flex;
    flex-direction: column;
    align-items: center;

    aside {
      display: flex !important;
      margin-top: 6rem;
      width: 100%;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: ${theme.COLORS.WHITE};
  z-index: 1001;
`;
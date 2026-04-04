import styled from "styled-components";

// Estilo extra apenas para o Container que envolve o menu no Mobile
export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  
  aside { // Aqui forçamos a Sidebar a aparecer no mobile dentro do overlay
    display: flex;
    margin: 0;
    height: 100vh;
    width: 38rem;
    border-radius: 0;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
`;
// ModalStyles.ts
import styled from 'styled-components';
import theme from '../../styles/theme';
 // Ajuste o caminho do seu theme

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // Garante que fique acima de tudo
`;

export const ModalContainer = styled.div`
  background: ${theme.COLORS.WHITE};
  width: 100%;
  max-width: 50rem;
  border-radius: 1.2rem;
  padding: 3rem;
  box-shadow: 0 .4rem 2rem rgba(0,0,0,0.2);
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.COLORS.WHITE_100};
    padding-bottom: 1.5rem;

    h2 { font-size: 2rem; color: #333; }
    button { background: none; border: none; cursor: pointer; color: #999; }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AvatarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  label {
    position: relative;
    cursor: pointer;
    
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #eee;
    }
    
    .icon-overlay {
      position: absolute;
      bottom: 0;
      right: 0;
      background: ${theme.COLORS.ORANGE_250};
      color: white;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
    }

    input { display: none; }
  }
`;

// Reuse seus componentes de Input e Button se já tiver
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label { font-size: 1.4rem; color: #666; font-weight: 500; }
  input {
    padding: 1.2rem;
    border: 1px solid #ddd;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    &:focus { border-color: ${theme.COLORS.ORANGE_100}; outline: none; }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;
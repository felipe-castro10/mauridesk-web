import styled from 'styled-components';
import theme from '../../styles/theme';

// --- Interfaces ---
interface FormValues {
  titulo: string;
  descricao: string;
  categoria: string;
}

export const TicketForm = styled.form`
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  display: block;


`
// --- Styled Components ---
export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${theme.COLORS.WHITE};
  border: .1rem solid ${theme.COLORS.LIGHT_200};
  border-radius: .8rem;
  padding: 2rem;
  box-shadow: 0 .2rem .4rem rgba(0,0,0,0.05);
`;

export const Header = styled.div`
  margin-bottom: 2.4rem;
`;

export const TitleLabel = styled.h2`
  font-size: 1.8rem;
  color: ${theme.COLORS.DARK_300};
  margin: 0 0 .8rem 0;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${theme.COLORS.GRAY_050};
  margin: 0;
  line-height: 1.4;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
  padding-bottom: .8rem;

  &:last-child {
    border-bottom: none;
  }
`;

export const FormOption = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

`;

export const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${theme.COLORS.DARK_300};
  margin-bottom: .8rem;
  letter-spacing: .0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  color: ${theme.COLORS.GRAY_500};
  padding: 1rem;
  border: .1rem solid ${theme.COLORS.GRAY_200};
  border-radius: .8rem;
  &::placeholder {
     color: ${theme.COLORS.GRAY_200};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  font-size: 1.5rem;
  color: ${theme.COLORS.GRAY_500};
  padding: .4rem 0;
  outline: none;
  resize: none;
  line-height: 1.5;
  border: .1rem solid ${theme.COLORS.GRAY_200};
  border-radius: .8rem;
  padding: 1rem;
`;

export const Button = styled.button`
  align-self: center;
  width: 30%;
  padding: 1.2rem;
  background: ${theme.COLORS.ORANGE_200};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background: ${theme.COLORS.ORANGE_100};
  }
`

// Adicione ao seu styles.ts

export const FileInputContainer = styled.div`
  border: .2rem dashed ${theme.COLORS.GRAY_200};
  border-radius: .8rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.COLORS.ORANGE_200};
  }

  input {
    display: none;
  }
`;

export const FileList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background: ${theme.COLORS.LIGHT_200};
  border-radius: 0.4rem;
  font-size: 1.3rem;
  color: ${theme.COLORS.DARK_300};

  button {
    background: transparent;
    border: none;
    color: #ff4d4d;
    cursor: pointer;
    font-weight: bold;
  }
`;

// Novos Styled Components em styles.ts

export const DynamicFieldsContainer = styled.div`
  width: 100%;
  max-width: 100%; // Garante que não ultrapasse o pai
  min-width: 0;
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
 
  overflow: hidden; // Impede que o conteúdo "vaze" e estique o form
 
`;

export const DynamicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  h3 {
    font-size: 1.8rem;
    color: ${theme.COLORS.GRAY_400};
  }
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;

  overflow-x: auto;
  overflow-y: hidden;

  padding: 1rem 0;

  scroll-behavior: smooth;

  /* impede que o conteúdo aumente o tamanho do form */
  max-width: 100%;
  min-width: 0; /* Importante reforçar aqui também */
  flex-shrink: 0;

  &::-webkit-scrollbar {
    height: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.COLORS.ORANGE_200};
    border-radius: 1rem;
  }
`;

export const AddButtonSquare = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.ORANGE_200};
  color: white;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 2.4rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
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
  display: flex;
  flex: direction: column;


`
// --- Styled Components ---
export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
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

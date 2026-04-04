// EditFormTicket/styles.ts

import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 110rem; // Aumentei um pouco para bater com a largura do print
  margin: 2rem auto;
  padding: 4rem;
  
  /* Mudança para o fundo branco/claro do print */
  background-color: #F4F5F6; 
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-size: 2.4rem;
    color: ${theme.COLORS.ORANGE_250}; // Título laranja como o "Criar Chamado"
    font-weight: 700;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  background-color: ${theme.COLORS.WHITE}; // Card interno branco
  padding: 3rem;
  border-radius: 1.2rem;
  border: 1px solid ${theme.COLORS.GRAY_050}; // Bordinha suave
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.8rem;
      color: ${theme.COLORS.GRAY_300}; // Cinza escuro para sub-títulos
    }

    button {
      background: none;
      border: none;
      color: ${theme.COLORS.ORANGE_250};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      cursor: pointer;
    }
  }

  > label {
    font-size: 1.4rem;
    color: ${theme.COLORS.GRAY_300};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  background-color: ${theme.COLORS.WHITE};
  color: ${theme.COLORS.GRAY_300}; // Texto escuro em fundo claro
  border: 1px solid ${theme.COLORS.GRAY_050};
  border-radius: 0.8rem;
  padding: 0 1.6rem;
  font-size: 1.4rem;

  &::placeholder {
    color: ${theme.COLORS.GRAY_050};
  }

  &:focus {
    border-color: ${theme.COLORS.ORANGE_250};
    outline: none;
  }
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 16rem 4rem; 
  gap: 1.5rem;
  align-items: center;
  
  padding: 1.5rem;
  border-radius: 0.8rem;
  border: 1px dashed ${theme.COLORS.GRAY_050}; // Estilo de "campo adicionável"
  background-color: #FAFAFA;

  select {
    height: 5rem;
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_300};
    border: 1px solid ${theme.COLORS.GRAY_050};
    border-radius: 0.8rem;
    padding: 0 1rem;
  }
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
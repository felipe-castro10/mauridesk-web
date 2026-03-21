import styled from 'styled-components';
import theme from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const TableCard = styled.div`
  background: white;
  border-radius: 1.2rem;
  box-shadow: 0 .4rem 1.2rem rgba(0,0,0,0.05);
  
  /* AJUSTES PARA O SCROLL */
  max-height: 80vh; /* Define uma altura máxima (ajuste conforme necessário) */
  overflow-y: auto; /* Ativa o scroll vertical */
  overflow-x: hidden; /* Evita scroll horizontal desnecessário */

  /* Estilização da scrollbar para ficar discreta */
  &::-webkit-scrollbar {
    width: .6rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.COLORS.LIGHT_200};
    border-radius: 1rem;
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){


    &::-webkit-scrollbar-thumb {
    display: none;
  }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  thead {
    /* Garante que o cabeçalho fique no topo ao rolar */
    position: sticky;
    top: 0;
    z-index: 2; /* Fica acima das imagens e ícones */
  }

  th {
    padding: 2rem;
    color: ${theme.COLORS.DARK_900};
    font-weight: bold;
    font-size: 1.6rem;
    
    /* IMPORTANTE: O fundo precisa ser sólido para não transparecer */
    background-color: white; 
    border-bottom: .2rem solid ${theme.COLORS.LIGHT_200};

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.2rem;
    }
  }

  /* ... restante dos seus estilos (td, media queries) */
  td {
    padding: 1.8rem 2rem;
    border-bottom: .1rem solid ${theme.COLORS.LIGHT_200};
    color: ${theme.COLORS.DARK_300};
    font-size: 1.4rem;
    
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.2rem;
      padding: 1rem;
    }
  }

  /* Dica: Adicione um efeito de destaque ao passar o mouse */
  tbody tr:hover {
    background-color: ${theme.COLORS.WHITE_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    th:nth-child(2), th:nth-child(4), th:nth-child(5), th:nth-child(6),
    td:nth-child(2), td:nth-child(4), td:nth-child(5), td:nth-child(6) {
      display: none;
    }
  }
`;



export const Avatar = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  border: .1rem solid ${theme.COLORS.ORANGE_200};
  color: ${theme.COLORS.WHITE};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 1rem;
`;


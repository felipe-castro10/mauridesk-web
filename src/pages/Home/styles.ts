import styled from 'styled-components';
import theme from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.COLORS.LIGHT_300};

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  flex-direction: column;
  }
  
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: .1rem solid ${theme.COLORS.LIGHT_200};
  border-radius: .8rem;
  padding: 0 1.6rem;
  width: 100%;
  max-width: 70%; // Você pode ajustar o tamanho
  margin: 0 auto;
  transition: border-color 0.2s;
  box-shadow: 0 .2rem .6rem rgba(0,0,0,0.02);

  &:focus-within {
    border-color: ${theme.COLORS.ORANGE_200};
    box-shadow: 0 0 0 1px ${theme.COLORS.ORANGE_200};
  }

  input {
    flex: 1;
    border: none;
    padding: 1.2rem 0;
    font-size: 1.4rem;
    outline: none;
    background: transparent;
  }

  select {
    border: none;
    border-left: .1rem solid #eee; // Linha divisória sutil
    padding: 0 1rem;
    margin-left: 1rem;
    font-size: 1.3rem;
    color: #666;
    background: transparent;
    outline: none;
    cursor: pointer;
    height: 2.4rem; // Altura menor para a divisória ficar bonita

    &:hover {
      color: ${theme.COLORS.ORANGE_200};
    }
  }

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){

      max-width: 100%;
    }
`;


export const MainContent = styled.main`
  flex: 1;
  padding: 4rem 3rem;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  flex-direction: column;

 
 

   @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 2rem;
    overflow-y: auto;
    }
`;

export const Title = styled.h2`
  align-self: flex-start;
  color: ${theme.COLORS.ORANGE_200};
  margin-bottom: 1rem;
  font-size: 2.4rem;
  font-weight: bold;
`;




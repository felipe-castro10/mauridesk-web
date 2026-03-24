import styled from "styled-components";
import theme from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${theme.COLORS.LIGHT_300};

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  flex-direction: column;
  }
 
`;

export const Back = styled.p`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_300};
  cursor: pointer;
  &:hover {
     color: ${theme.COLORS.ORANGE_300};
   }

   @media(${DEVICE_BREAKPOINTS.MD}){
    
   }
`;


export const MainContent = styled.main`
  flex: 1;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  
  

   @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 1rem;
    margin-top: 8rem;
    gap: 1rem;
    
    }
 
`;

export const ViewDescriptions = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  overflow-y: auto;
  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  flex-direction: column;
  gap: 1rem;
  }
`;


export const Title = styled.h2`
  color: ${theme.COLORS.ORANGE_200};
  font-size: 2.4rem;
  font-weight: bold;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  font-size: 2rem;
  }
`;
export const TechUser = styled.div`
display: flex;
flex-direction: column;
`;

export const TableInfo = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  
`;



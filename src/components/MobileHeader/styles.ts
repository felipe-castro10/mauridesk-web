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

export const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  background-color: ${theme.COLORS.ORANGE_200}
  
`;
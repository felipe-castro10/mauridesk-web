import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const StatusBadge = styled.span<{ type: string }>`
  padding: .6rem 1.4rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: .5rem;

  ${({ type }) => {
    switch (type) {
      case 'Aberto': return 'background: #ffe5e9; color: #ff4d6d;';
      case 'Em atendimento': return 'background: #e5edff; color: #3f51b5;';
      case 'Resolvido': return 'background: #e6f4ea; color: #34a853;';
      case 'Fechado': return 'background: #ECEFF1';'color:#546E7A';
      default: return 'background: #eee; color: #666;';
    }
  }}
 @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    font-size: .8rem;
    }

`;
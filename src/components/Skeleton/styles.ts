import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const shimmer = keyframes`
  0% { background-position: -40rem 0; }
  100% { background-position: 40rem 0; }
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  background: white;
  border-radius: 1.2rem;
  padding: 2rem;
  box-shadow: 0 .4rem 1.2rem rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SkeletonLine = styled.div`
  width: 100%;
  height: 4rem; // Mesma altura média das suas linhas da tabela
  border-radius: 0.8rem;
  
  background: linear-gradient(90deg, ${theme.COLORS.LIGHT_100} 25%, ${theme.COLORS.LIGHT_200} 50%, ${theme.COLORS.LIGHT_100} 75%);
  background-size: 80rem 100%;
  animation: ${shimmer} 2s infinite linear;
`;

export const SkeletonHeader = styled(SkeletonLine)`
  height: 3rem;
  width: 100%;
  margin-bottom: 1rem;
  background: ${theme.COLORS.WHITE_200}; // Um pouco mais claro para o topo
`;
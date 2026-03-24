import styled from "styled-components";
import theme from "../../styles/theme";

export const ChatContainer = styled.div`
  background: ${theme.COLORS.WHITE};
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 2rem; // Para dar o espaçamento do card de cima
  display: flex;
  flex-direction: column;
  height: 40rem; // Altura fixa com scroll interno

  h3 {
    font-size: 1.6rem;
    color: ${theme.COLORS.ORANGE_250};
    margin-bottom: 1.5rem;
  }
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-right: 0.5rem;
`;

export const MessageItem = styled.div<{ isOwnMessage: boolean }>`
  align-self: ${({ isOwnMessage }) => isOwnMessage ? 'flex-end' : 'flex-start'};
  max-width: 80%;
  background: ${({ isOwnMessage, theme }) => isOwnMessage ? '#FFF3E0' : '#F1F5F9'};
  padding: 1rem;
  border-radius: 8px;

  .message-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    
    strong { color: ${ theme.COLORS.GRAY_500}; }
    span { color: ${theme.COLORS.GRAY_400}; margin-left: 1rem; }
  }

  p {
    font-size: 1.3rem;
    line-height: 1.4;
  }
`;

export const ChatInputContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  background: #F8FAFC;
  border: .1rem solid #E2E8F0;
  padding: 1.2rem;
  border-radius: .8rem;
`;

export const SendButton = styled.button`
  background: ${ theme.COLORS.ORANGE_200};
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: .8rem;
  transition: filter 0.2s;

  &:hover { filter: brightness(0.9); }
`;
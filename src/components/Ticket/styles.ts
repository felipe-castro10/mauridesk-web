import styled from "styled-components";
import theme from "../../styles/theme";




export const Content = styled.div`
width:100%;
  padding: 2.2rem;
  display: flex;
  flex:2;
  flex-direction: column;
  gap: 1.2rem;

  background-color: ${theme.COLORS.WHITE};
  border-radius: 1rem;
  

  h1{
  font-size: 2rem;
  font-weight: bold;
  }

  h2{
  font-size: 1.4rem;
  color: ${theme.COLORS.GRAY_300}
  }

  p{
  font-size: 1.8rem;
  }
`

export const IdStatus = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

p{
font-weight: bold;
color: ${theme.COLORS.GRAY_300}
}

`;

export const DateTicket = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

.div{
display:flex;
flex-direction: column;
gap:1rem;

h2 {
      font-size: 1.4rem;
      color: #999;
      font-weight: 500;
      margin-bottom: 0.4rem;
      width: 100%; 
    }

    p {
      font-size: 1.6rem;
      color: #333;
      font-weight: 600;
      width: 100%; 
    }
}
`;

export const ExtrasTicket = styled.div`
  display: flex;
  justify-content: center; 
  gap: 3rem; 
  margin-top: 2rem;
  width: 100%; 

  > div {
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    
    
    flex: 0 1 200px; 

    h2 {
      font-size: 1.6rem;
      color: #999;
      font-weight: 500;
      margin-bottom: 0.4rem;
      width: 100%; 
    }

    p {
      font-size: 1.8rem;
      color: #333;
      font-weight: 600;
      width: 100%; 
    }
  }
`;
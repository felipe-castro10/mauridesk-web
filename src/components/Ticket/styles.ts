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


export const MediaGallery = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const Thumbnail = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 0.8rem;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${theme.COLORS.GRAY_200};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    border-color: ${theme.COLORS.ORANGE_200};
  }

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FullScreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  img, video {
    max-width: 90%;
    max-height: 80%;
  }

  .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
    font-size: 3rem;
    cursor: pointer;
  }

  .nav {
    position: absolute;
    color: white;
    font-size: 4rem;
    cursor: pointer;
    background: none;
    border: none;
    padding: 2rem;
  }
  
  .prev { left: 2rem; }
  .next { right: 2rem; }
`;
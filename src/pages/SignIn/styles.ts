import styled from "styled-components"
import theme from "../../styles/theme"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"



export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;


  @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
  grid-template-columns: 1fr;
  }

`

export const LeftSide = styled.div`
  background-color: ${theme.COLORS.ORANGE_200};
  display: flex;
  flex-direction: column;
  gap: 4rem;
 
  img{
  width: 20rem;
  margin: 3rem;
  
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

`

export const Slogan = styled.h1`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-style: italic;
  font-family: "Poppins";
  font-weight: bold;
  line-height: 2.4rem;
  text-align: center;
  padding: 2rem;
  gap: 3rem;

 margin: 10rem;


  p{
  font-size: 4rem;
  font-style: normal;
  font-family: "Poppins";
  
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  padding: 2rem;
  }
`

export const LoginWrapper = styled.div`
  width: 50.2rem;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  width: 100%;
  max-width: 38rem;
  }

`

export const Logo = styled.h1`
  text-align: center;
  color: #2563eb;
  margin-bottom: 30px;
`

export const Card = styled.div`
  background: white;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
`

export const Title = styled.h2`
  margin-bottom: 5px;
  color: ${theme.COLORS.ORANGE_200};
  font-weight: bold;
  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
  font-size: 2.2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 25px;
`

export const InputGroup = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 14px;
  color: #555;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
`

export const Button = styled.button`
  width: 100%;
  padding: 12px;
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

export const RegisterCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
`

export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #e5e5e5;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #d4d4d4;
  }
`
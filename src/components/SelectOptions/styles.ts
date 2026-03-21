import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const SelectBox = styled.div`
  font-family: "Poppins", sans-serif;
  color: ${theme.COLORS.GRAY_500};
  height: 4.4rem;
  border: .1rem solid ${theme.COLORS.GRAY_200};
  border-radius: .8rem;
  padding: 0 1.2rem;
  display: flex;
  width:100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: white;
  font-size: 1.6rem;

  &:hover {
    border-color: ${theme.COLORS.ORANGE_200};
  }



  
`

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  margin-top: .4rem;
  overflow-y: auto;
  background: white;
  border-radius: .8rem;
  border: .1rem solid ${theme.COLORS.GRAY_200};
  box-shadow: 0 1rem 2.5rem rgba(0,0,0,0.1);
  z-index: 1000;
  max-height: 20rem;
`

export const Option = styled.div`
  padding: 1rem 1.2rem;
  cursor: pointer;

  &:hover {
    background: ${theme.COLORS.ORANGE_200};
    color: white;
  }
`
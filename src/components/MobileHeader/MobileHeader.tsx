import { FiMenu } from "react-icons/fi";
import theme from "../../styles/theme";
import {Mobile,Avatar, LogoSection, } from "./styles";


export function MobileHeader(){
  return (
    <Mobile>
        <FiMenu size={24} />
        <LogoSection style={{ padding: 0, marginBottom: 0 }}>
          <div style={{ background: theme.COLORS.GRAY_010, width: 30, height: 30, borderRadius: '50%' }} />
          <span>MAURIDESK</span>
        </LogoSection>
        <Avatar>UC</Avatar>
      </Mobile>
  )
}
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importe o X para fechar
import { Mobile, LogoSection, MenuOverlay, CloseButton } from "./styles";// Importe sua Sidebar original
import theme from "../../styles/theme";
import { SideBar } from "../SideBar/SideBar";

export function MobileHeader(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Mobile>
        {/* Adicione o onClick aqui */}
        <FiMenu size={24} onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer' }} />
        
        <LogoSection style={{ padding: 0, marginBottom: 0 }}>
          <div style={{ background: theme.COLORS.GRAY_010, width: 30, height: 30, borderRadius: '50%' }} />
          <span>MAURIDESK</span>
        </LogoSection>
        

      </Mobile>

      {/* Menu Lateral Mobile */}
      {isMenuOpen && (
        <MenuOverlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
          {/* O stopPropagation impede que o menu feche ao clicar dentro dele */}
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsMenuOpen(false)}>
               <FiX size={24} />
            </CloseButton>
            
            {/* Reutilizamos sua Sidebar completa aqui! */}
            <SideBar />
          </div>
        </MenuOverlay>
      )}
    </>
  )
}
import { FiX, FiFileText, FiPlusSquare, FiPower } from "react-icons/fi";
import { Overlay, CloseButton } from "./styles"; // Reutilizando seus estilos
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";
import { ListOptions, NavItem, Sidebar } from "../SideBar/styles";



interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuMobile({ isOpen, onClose }: MenuMobileProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate(path: string) {
    navigate(path);
    onClose(); // Fecha o menu ao clicar
  }

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <Sidebar onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FiX size={30} />
        </CloseButton>

        {/* Aqui você pode copiar o UserBanner e ListOptions da sua Sidebar original */}
        <ListOptions style={{ marginTop: '5rem' }}>
          <NavItem 
            active={location.pathname === '/home'} 
            onClick={() => handleNavigate('/home')}
          >
            <FiFileText size={20} /> Meus chamados
          </NavItem>
          
          <NavItem 
            active={location.pathname === '/create'} 
            onClick={() => handleNavigate('/create')}
          >
            <FiPlusSquare size={20} /> Criar chamado
          </NavItem>

          <NavItem onClick={() => navigate('/')}>
            <FiPower size={20} /> Sair
          </NavItem>
        </ListOptions>
      </Sidebar>
    </Overlay>
  );
}
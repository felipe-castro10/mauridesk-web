import { FiEdit, FiFileText, FiPlusSquare, FiPower } from "react-icons/fi";
import { Avatar, BadgeItem, BadgeLabel, BadgeValue, CardHeader, EditButton, ListOptions, MauriCard, NavItem, Sidebar, SummaryGrid, UserBanner } from "./styles";
import theme from "../../styles/theme";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getProfile } from "../../services/user";
import { getMetrics } from "../../services/ticket";
import { baseURL } from "../../services/api";
import { EditProfileModal } from "../ModalEditUser/EditProfileModal";



interface Metrics {
  open: number,
  inProgress: number,
  closed: number,
  resolved: number,
  today: number,
  total: number
}


export function SideBar(){

  const [user, setUser] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [metrics, setMetrics] = useState<Metrics>()

  async function reloadUser() {
    
     const updatedUser = await getProfile();
    setUser(updatedUser);
  }

  async function handleLogout(){

    await localStorage.removeItem('mauridesk.token')

    navigate('/')
  }

  useEffect(() => {
    async function loadUser(){
      const data = await getProfile()
      const mt = await getMetrics()
      console.log(data)
      setUser(data)

      

      setMetrics(mt)
    }

    loadUser()
  }, [])

  const navigate = useNavigate();
  const location = useLocation();
  
  return(
      <Sidebar>
        
        <UserBanner style={{ position: 'relative' }}> 

    <EditButton onClick={() => setIsModalOpen(true)}>
    <FiEdit size={16} />
  </EditButton>
     
  <Avatar 
  src={`${baseURL}/users/avatar/${user?.id}`} 
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.src = "/src/assets/avatar.png"; // Caminho da sua foto padrão
    target.onerror = null; // Evita loop infinito se a imagem padrão também falhar
  }}
  alt={user?.name}
/>
 
  <div className="info">
     <strong>{user?.name}</strong>
     <span>{user?.email}</span>
     {/* Uma linha divisória sutil pode ajudar aqui se quiser separar a filial */}
     <hr style={{ width: '100%', border: '0.1px solid #333', margin: '1rem 0' }} />
     <span>{user?.branch.name}</span>
     <span>{user?.type_user}</span>
  </div>
</UserBanner>

        <ListOptions>
          <NavItem active={location.pathname.includes('/home')} 
        onClick={() => navigate('/home')}>
            <FiFileText size={20} /> Meus chamados
          </NavItem>
          <NavItem active={location.pathname === '/create'} 
        onClick={() => navigate('/create')}>
            <FiPlusSquare size={20}  /> Criar chamado
          </NavItem>
          <NavItem 
        onClick={handleLogout}>
            <FiPower size={20} /> Sair
          </NavItem>
        </ListOptions>

      
      <MauriCard>
      <CardHeader>
        <h4>MAURIDESK</h4>
        {/* Um pontinho verde de status online opcional */}
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 8px #4CAF50' }} />
      </CardHeader>

      <SummaryGrid>
        <BadgeItem statusColor={theme.COLORS.ORANGE_250}> {/* Laranja oficial */}
          <BadgeValue>{metrics?.open && metrics?.open || 0}</BadgeValue>
          <BadgeLabel>Abertos</BadgeLabel>
        </BadgeItem>

        <BadgeItem statusColor={theme.COLORS.BLUE_200}> {/* Azul atendimento */}
          <BadgeValue>{metrics?.inProgress && metrics?.inProgress || 0}</BadgeValue>
          <BadgeLabel>Atendimento</BadgeLabel>
        </BadgeItem>

        <BadgeItem statusColor={theme.COLORS.GREEN_200}> {/* Verde concluído */}
          <BadgeValue>{metrics?.today && metrics?.today || 0}</BadgeValue>
          <BadgeLabel>Hoje</BadgeLabel>
        </BadgeItem>

        <BadgeItem statusColor={theme.COLORS.RED_200}> {/* Vermelho crítico */}
          <BadgeValue>{metrics?.closed && metrics?.closed || 0}</BadgeValue>
          <BadgeLabel>Fechado</BadgeLabel>
        </BadgeItem>
      </SummaryGrid>
      
      <div style={{ marginTop: '1.2rem', textAlign: 'center' }}>
         <span style={{ fontSize: '1rem', color: '#555' }}>v 2.4.0 • Mauricéa Alimentos</span>
      </div>
    </MauriCard>

    {isModalOpen && (
        <EditProfileModal 
          user={user} 
          onClose={() => setIsModalOpen(false)} 
          onUpdate={reloadUser}
        />
      )}
    </Sidebar>
  )
}
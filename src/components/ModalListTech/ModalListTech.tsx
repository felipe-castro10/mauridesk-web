// Components/AssignTechnicianModal/index.tsx
import { useEffect, useState } from 'react';
import { api, baseURL } from '../../services/api';
import { Avatar, BranchTag, CloseButton, InfoWrapper, ModalContent, Overlay, UserItem, UserList } from './styles';
import type { iUsers } from '../../interfaces/Users';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (techId: string) => void;
}

export function ModalListTech({ isOpen, onClose, onConfirm }: ModalProps) {
  const [users, setUsers] = useState<iUsers[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      async function fetchUsers() {
        setLoading(true);
        try {
          const type_user = 'TECH'
          const response = await api.get(`/users/${type_user}`);
          console.log(response.data.users) // Sua rota de usuários
          // Opcional: Filtrar para exibir apenas quem é TECH
          setUsers(response.data.users.users);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      fetchUsers();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <header>
          <h2>Designar Técnico</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </header>
<UserList>
  {loading ? (
    <p className="loading">Carregando técnicos...</p>
  ) : (
    users.map((user) => (
      <UserItem key={user.id} onClick={() => onConfirm(user.id)}>
        
        {/* Adicione o Avatar */}
      <Avatar 
  src={`${baseURL}/users/avatar/${user.id}`} 
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.src = "/src/assets/avatar.png"; // Caminho da sua foto padrão
    target.onerror = null; // Evita loop infinito se a imagem padrão também falhar
  }}
  alt={user.name}
/>

        {/* Wrapper para as informações */}
        <InfoWrapper>
          <strong>{user.name}</strong>
          <span className="email">{user.email}</span>
          
          {/* Adicione a Tag da Filial */}
          {user&& (
            <BranchTag>
              {/* <FiMapPin />  Opcional: ícone de localização */}
              {user.branch.name}
            </BranchTag>
          )}
        </InfoWrapper>

      </UserItem>
    ))
  )}
</UserList>
      </ModalContent>
    </Overlay>
  );
}
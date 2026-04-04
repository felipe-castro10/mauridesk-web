
import { FiX, FiCamera } from 'react-icons/fi';
 // Seus estilos acima
import { baseURL } from '../../services/api'; // Sua URL da API
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AvatarInput, Footer, Form, InputGroup, ModalContainer, Overlay } from './styles';
import theme from '../../styles/theme';
import ReactDOM from 'react-dom';

interface EditProfileModalProps {
  user: any; // Tipagem correta do usuário
  onClose: () => void;
  onUpdate: () => void; // Função para atualizar os dados na Sidebar
}

export function EditProfileModal({ user, onClose, onUpdate }: EditProfileModalProps) {
  // Estados do formulário
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  
  // Estados da imagem
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    `${baseURL}/users/avatar/${user?.id}`
  );
  
  const [isLoading, setIsLoading] = useState(false);

  // Função para lidar com a seleção de imagem e preview
  function handleAvatarChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    // Salva o arquivo para enviar para a API
    setAvatarFile(file);

    // Cria um preview local da imagem
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  // Função para enviar os dados
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // 1. Enviar nome e email (JSON)
      // Substitua pela sua chamada de API real (ex: api.put('/users', { name, email }))
      console.log('Atualizando nome/email:', { name, email });

      // 2. Enviar a imagem se houver (Multipart/Form-Data)
      if (avatarFile) {
        const formData = new FormData();
        formData.append('avatar', avatarFile);

        // Substitua pela sua chamada de API real (ex: api.patch('/users/avatar', formData))
        console.log('Enviando imagem:', formData);
      }

      // Sucesso
      // Mostre um toast ou mensagem de sucesso aqui
      onUpdate(); // Atualiza os dados na Sidebar/Dashboard
      onClose(); // Fecha o modal
    } catch (error) {
      // Erro
      console.error('Erro ao atualizar perfil:', error);
      // Mostre mensagem de erro
    } finally {
      setIsLoading(false);
    }
  }

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      {/* Impede que o clique dentro do modal feche ele */}
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>Editar Perfil</h2>
          <button onClick={onClose}><FiX size={24} /></button>
        </header>

        <Form onSubmit={handleSubmit}>
          {/* Campo de Avatar */}
          <AvatarInput>
            <label htmlFor="avatar">
              <img src={avatarPreview} alt={`Foto de ${name}`} />
              <div className="icon-overlay">
                <FiCamera size={18} />
              </div>
              <input type="file" id="avatar" onChange={handleAvatarChange} accept="image/*" />
            </label>
          </AvatarInput>

          {/* Campo de Nome */}
          <InputGroup>
            <label htmlFor="name">Nome completo</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </InputGroup>

          {/* Campo de Email */}
          <InputGroup>
            <label htmlFor="email">Email institucional</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </InputGroup>

          <Footer>
            {/* Reuse seus componentes de Botão aqui */}
            <button type="button" onClick={onClose} style={{ padding: '1rem 2rem' }}>Cancelar</button>
            <button 
              type="submit" 
              disabled={isLoading} 
              style={{ padding: '1rem 2rem', background: theme.COLORS.ORANGE_250, color: 'white', borderRadius: '1rem' }}
            >
              {isLoading ? 'Salvando...' : 'Salvar alterações'}
            </button>
          </Footer>
        </Form>
      </ModalContainer>
    </Overlay>,
    document.body
  );
}
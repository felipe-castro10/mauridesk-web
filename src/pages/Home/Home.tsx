import * as S from './styles';
import { ListCard } from '../../components/TableCard/ListCard';
import { MobileHeader } from '../../components/MobileHeader/MobileHeader';
import { SideBar } from '../../components/SideBar/SideBar';
import { useCallback, useEffect, useState } from 'react';
import type { iTicket } from '../../interfaces/Ticket';
import { api } from '../../services/api';
import type { iBranch } from '../../interfaces/Branch';
import { FiSearch } from 'react-icons/fi';
import { Skeleton } from '../../components/Skeleton/skeleton';

export function Home(){
  const [tickets, setTickets] = useState<iTicket[]>([])
  const [branches, setBranches] = useState<iBranch[]>([])
  

//estados filtros
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  //carregar filials
 useEffect(() => {
  async function fetchBranches() {
    const response = await api.get("/branches");
    // Verifique no console se é .branchs ou .branches
    setBranches(response.data.branches || response.data.branchs); 
  }
  fetchBranches();
}, []);

  //função de busca
  const loadTickets = useCallback(async (title?: string, branch_id?: string) => { // Mudei o nome aqui para clareza
  try {
    setIsLoading(true);
    const response = await api.get("/tickets", {
      params: { 
        title: title || undefined,
        branch_id: branch_id || undefined, // 🚩 MUDANÇA AQUI: de 'branch' para 'branch_id'
      }
    });
    setTickets(response.data.tickets);
  } catch (error) {
    // toast.error("Nenhum ticket encontrado"); // Removi para evitar spam de erro ao carregar
  } finally {
    setIsLoading(false);
  }
}, []);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadTickets(searchTerm, selectedBranch);
    }, 500); // Espera 500ms sem digitar para buscar

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm,selectedBranch, loadTickets])
  
  return (
    <S.Container>
      <MobileHeader/>
      <SideBar/>

      <S.MainContent>
        <S.Title>Meus chamados</S.Title>
       <S.SearchContainer>
  {/* Ícone de busca opcional para dar um toque premium */}
  <FiSearch size={18} color="#999" style={{ marginRight: '1rem' }} />
  
  <input 
    placeholder="Pesquisar por título..." 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select 
    value={selectedBranch} 
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedBranch(e.target.value)}
  >
    <option value="">Todas as Filiais</option>
    {branches?.map(branch => (
      <option key={branch.id} value={branch.id}>
        {branch.name}
      </option>
    ))}
  </select>
</S.SearchContainer>
       {isLoading ? (
          <Skeleton/> // Aqui depois colocamos um Skeleton!
        ) : (
          <ListCard data={tickets} />
        )}
      </S.MainContent>
    </S.Container>
  );
};


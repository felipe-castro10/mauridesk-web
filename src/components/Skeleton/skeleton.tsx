import { SkeletonHeader, SkeletonLine, SkeletonWrapper } from "./styles";

export function Skeleton(){
  return(
    <SkeletonWrapper>
    {/* Simula o Cabeçalho da Tabela */}
    <SkeletonHeader />
    
    {/* Simula as Linhas de Tickets (geramos 5 linhas) */}
    {[...Array(5)].map((_, index) => (
      <SkeletonLine key={index} />
    ))}
  </SkeletonWrapper>
  )
}
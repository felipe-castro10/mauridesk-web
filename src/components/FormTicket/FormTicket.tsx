import { useEffect, useRef, useState } from "react";
import { Card, FormGroup,Input, Header, Label, Subtitle, TextArea, TitleLabel, FormOption, TicketForm, Button, FileInputContainer, FileList, FileItem, DynamicFieldsContainer, DynamicHeader, AddButtonSquare, HorizontalScroll } from "./styles";
import { departments } from "../../constants/departments";
import { priority } from "../../constants/priority";
import { CustomSelect } from "../SelectOptions/SelectOptions";
import { api } from "../../services/api";
import type { iTicket } from "../../interfaces/Ticket";
import theme from "../../styles/theme";



interface FormTicketProps {
  // Alteramos aqui para receber os dois parâmetros
  onSubmit: (data: iTicket, files: File[]) => void 
}


export function FormTicket({onSubmit}: FormTicketProps){
 const [branches, setBranches] = useState<{ label: string; value: string }[]>([])
 const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

 //estados para criar inputs dinâmicos
 const [apiCategories, setApiCategories] = useState<any[]>([])
 const [selectedCategoryData, setSelectecCategoryData] = useState<any>(null)
 const [dynamicResponses, setDynamicResponses] = useState<Record<string, string>[]>([{}]);

 //scroll ref para os card de informações extras
 const scrollRef = useRef<HTMLDivElement>(null);


 // Pequeno timeout para esperar o React renderizar o novo card antes de dar o scroll
  


// carregando as categorias cadastradas na API

useEffect(() => {

  async function fetchCategories(){
    const response = await api.get("/categories")
    console.log(response.data)
    const formatted = response.data.map((cat: any) => ({
      label: cat.name,
      value: cat.id,
      custom_fields: cat.custom_fields
    }));

  
    setApiCategories(formatted)
  }
  fetchCategories()
  
},[])



const handleCategoryChange = (categoryId: string) => {
  const category = apiCategories.find(c => c.value === categoryId);
  setSelectecCategoryData(category);

  setFormData(prev => ({ ...prev, category_id: categoryId }));
  
  // Reinicia para apenas um item vazio ao trocar de categoria
  setDynamicResponses([{}]); 
};

const addNewItem = () => {
  setDynamicResponses(prev => [...prev, {}]);

  requestAnimationFrame(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth"
      });
    }
  });
};

const removeItem = (index: number) => {
  setDynamicResponses(prev => prev.filter((_, i) => i !== index));
};

// Função de input atualizada para lidar com o index
const handleDynamicInputChange = (index: number, label: string, value: string) => {
  setDynamicResponses(prev => {
    const newArray = [...prev];
    newArray[index] = { ...newArray[index], [label]: value };
    return newArray;
  });
};

// Função para lidar com a seleção de arquivos
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    const filesArray = Array.from(e.target.files);
    setSelectedFiles(prev => [...prev, ...filesArray]);
  }
}

const removeFile = (index: number) => {
  setSelectedFiles(prev => prev.filter((_, i) => i !== index))
}

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  
  // Enviamos o formData (que já tem o category_id) + respostas dinâmicas
  onSubmit({ 
    ...formData, 
    dynamic_responses: dynamicResponses 
  }, selectedFiles);
}


 useEffect(()=>{
  async function loadBranches(){
    const response = await api.get("/branches")

    const formattedBranchs = response.data.branchs.map((branch: any) => ({
      label: branch.name,
      value: branch.id
    }))

   

    setBranches(formattedBranchs)
  }

  loadBranches()
  },[])

  const [formData, setFormData] = useState<iTicket>({
    title: '',
    description: '',
    category_id: '',
    branch_id: '',
    department: "",
    priority: "LOW"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  


  return(
    <TicketForm onSubmit={handleSubmit}>
    <Card>
      <Header>
        <TitleLabel>Informações</TitleLabel>
        <Subtitle>
          Configure os dias e horários em que você está disponível para atender chamados
        </Subtitle>
      </Header>

      <FormGroup>
        <Label>Título</Label>
        <Input 
          name="title"
          onChange={handleChange}
          placeholder="Digite o título do chamado"
        />
      </FormGroup>

      <FormGroup>
        <Label>Descrição</Label>
        <TextArea 
          name="description"
          rows={3}
          onChange={handleChange}
          placeholder="Descreva o problema..."
        />
      </FormGroup>


<FormOption>
  <FormGroup>
    <Label>Categoria de Serviço</Label>
    <CustomSelect
  options={apiCategories}
  value={formData.category_id}
  onChange={handleCategoryChange}
/>
  </FormGroup>

  <FormGroup>
  <Label>Filial</Label>
  <CustomSelect
    // 1. Garanta que o value está lendo do estado certo
    value={formData.branch_id} 
    options={branches}
    // 2. O 'value' que o CustomSelect retorna é o ID da filial
    onChange={(value) => {
      console.log("Filial selecionada:", value); // Debug para ver se o ID chegou
      setFormData(prev => ({ 
        ...prev, 
        branch_id: value // Atualiza o campo correto no formData
      }));
    }}
  />
</FormGroup>
</FormOption>

{/* Só renderiza se:
   1. Tiver categoria selecionada
   2. Essa categoria tiver campos extras (custom_fields)
*/}
{selectedCategoryData?.custom_fields?.length > 0 && (
  <DynamicFieldsContainer>
    <DynamicHeader>
      <TitleLabel>
        Itens da Categoria: {selectedCategoryData.label}
      </TitleLabel>
      
      {/* Botão de adicionar no canto superior direito */}
      <AddButtonSquare type="button" onClick={addNewItem} title="Adicionar novo item">
        +
      </AddButtonSquare>
    </DynamicHeader>

    <HorizontalScroll ref={scrollRef}>
      {dynamicResponses.map((_, index) => (
        <Card 
          key={index} 
          style={{ 
            marginTop: 0,
    borderTop: `4px solid ${theme.COLORS.ORANGE_200}`,
    borderLeft: 'none',
    position: 'relative',
    minHeight: '20rem',

    /* ADICIONAR */
    minWidth: '32rem',
    maxWidth: '32rem',
    flex: '0 0 32rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <Subtitle style={{ fontSize: '1.4rem' }}>Item #{index + 1}</Subtitle>
            
            {index > 0 && (
              <button 
                type="button" 
                onClick={() => removeItem(index)} 
                style={{ 
                  color: theme.COLORS.RED_200, 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                Remover
              </button>
            )}
          </div>

          {/* Campos em coluna dentro do card menor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            {selectedCategoryData.custom_fields.map((field: any) => (
              <FormGroup key={field.label}>
                <Label style={{ fontSize: '1.2rem' }}>{field.label}</Label>
                <Input 
                  type={field.type}
                  placeholder={`Informe...`}
                  value={dynamicResponses[index][field.label] || ''}
                  onChange={(e) => handleDynamicInputChange(index, field.label, e.target.value)}
                  style={{ padding: '0.8rem' }}
                />
              </FormGroup>
            ))}
          </div>
        </Card>
      ))}
    </HorizontalScroll>
  </DynamicFieldsContainer>
)}

      <FormOption>
       <FormGroup>
        <Label>Departamento</Label>
       <CustomSelect
          value={formData.department}
          options={departments}
          onChange={(value) =>
          setFormData(prev => ({ ...prev, department: value }))
        }
        />
      </FormGroup>

       <FormGroup>
        <Label>Prioridade</Label>
      <CustomSelect
        value={formData.priority}
        options={priority}
        onChange={(value) =>
        setFormData(prev => ({ ...prev, priority: value }))
        }
      />
      </FormGroup>
      </FormOption>
      <FormGroup>
  <Label>Anexos (Fotos ou Vídeos)</Label>

  <FileInputContainer onClick={() => document.getElementById('file-upload')?.click()}>
    <Subtitle>Clique aqui para selecionar arquivos</Subtitle>
    <input 
      id="file-upload"
      type="file" 
      multiple 
      accept="image/*,video/*" 
      onChange={handleFileChange}
    />
  </FileInputContainer>

  {selectedFiles.length > 0 && (
    <FileList>
      {selectedFiles.map((file, index) => (
        <FileItem key={index}>
          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
          <button type="button" onClick={() => removeFile(index)}>Remover</button>
        </FileItem>
      ))}
    </FileList>
  )}
</FormGroup>

      <Button type="submit">Criar chamado</Button>
    </Card>
    </TicketForm>
  )
}
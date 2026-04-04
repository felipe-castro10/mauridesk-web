import { FiPlus, FiTrash, FiSave } from "react-icons/fi";
import { useState } from "react";
import { Button, Container, Input, Section } from "./styles";
import theme from "../../styles/theme";
import { toast } from "sonner";
import { api } from "../../services/api";
import { useNavigate } from "react-router";
// Importe seus componentes de Input, Button, etc.

interface ExtraField {
  id: string;
  label: string;
  type: "text" | "number" | "date";
}



export function EditFormTicket() {
  const [categoryName, setCategoryName] = useState("");
  const [extraFields, setExtraFields] = useState<ExtraField[]>([]);
  const navigate = useNavigate();


  async function handleSave(){
    if(!categoryName || extraFields.length === 0){
      return toast.error("Preencha o nome e adicione ao menos um campo!")
    }

    try {
      await api.post("/categories", {
        name: categoryName,
        custom_fields: extraFields
      });

      toast.success("Categoria personalizada com sucesso!")
      navigate(-1)
    } catch(error){
      console.error(error)
      toast.error("Não foi possível salvar categoria.")
    }
  }

  // Função para adicionar um novo rascunho de input
  function handleAddField() {
    const newField: ExtraField = {
      id: String(Date.now()), // ID temporário para o map
      label: "",
      type: "text"
    };
    setExtraFields([...extraFields, newField]);
  }

  // Função para remover um campo da lista
  function handleRemoveField(id: string) {
    setExtraFields(extraFields.filter(field => field.id !== id));
  }

  // Função para atualizar o label de um campo específico
  function handleUpdateField(id: string, value: string) {
    setExtraFields(extraFields.map(field => 
      field.id === id ? { ...field, label: value } : field
    ));
  }

  return (
    <Container>
      <h1>Configurar Formulário de Serviço</h1>

      <Section>
        <label>Nome da Categoria (Ex: PROTHEUS - Pesagem)</label>
        <Input 
          value={categoryName} 
          onChange={e => setCategoryName(e.target.value)}
          placeholder="Digite o nome do serviço"
        />
      </Section>

      <Section>
        <header>
          <h2>Campos Personalizados</h2>
          <button type="button" onClick={handleAddField}>
            <FiPlus /> Adicionar Campo
          </button>
        </header>

        {extraFields.map((field, index) => (
          <div key={field.id} className="field-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Input 
              placeholder="Título do campo (Ex: Placa)" 
              value={field.label}
              onChange={e => handleUpdateField(field.id, e.target.value)}
            />
            
            <select 
              value={field.type}
              onChange={e => {
                const newFields = [...extraFields];
                newFields[index].type = e.target.value as any;
                setExtraFields(newFields);
              }}
            >
              <option value="text">Texto</option>
              <option value="number">Número</option>
              <option value="date">Data</option>
            </select>

            <button onClick={() => handleRemoveField(field.id)}>
              <FiTrash color={theme.COLORS.RED_200} />
            </button>
          </div>
        ))}
      </Section>

      <Button 
        onClick={handleSave} >
          Salvar Categoria
          </Button>
    </Container>
  );
}
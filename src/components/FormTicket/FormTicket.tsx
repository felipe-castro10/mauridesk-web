import { useEffect, useState } from "react";
import { Card, FormGroup,Input, Header, Label, Subtitle, TextArea, TitleLabel, FormOption, TicketForm, Button } from "./styles";
import { departments } from "../../constants/departments";
import { categories } from "../../constants/categories";
import { priority } from "../../constants/priority";
import { CustomSelect } from "../SelectOptions/SelectOptions";
import { api } from "../../services/api";
import type { iTicket } from "../../interfaces/Ticket";




interface FormTicketProps {
  onSubmit: (data: iTicket) => void
}



export function FormTicket({onSubmit}: FormTicketProps){
 const [branches, setBranches] = useState<{ label: string; value: string }[]>([])

 function handleSubmit(e: React.FormEvent){
   e.preventDefault()
   onSubmit(formData)
 }
 useEffect(()=>{
  async function loadBranches(){
    const response = await api.get("/branchs")

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
    category: '',
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
      value={formData.category}
      options={categories}
      onChange={(value) =>
      setFormData(prev => ({ ...prev, category: value }))
      }
      />
      </FormGroup>
      <FormGroup>
        <Label>Filial</Label>
       <CustomSelect
         value={formData.branch_id}
         options={branches}
         onChange={(value) =>
         setFormData(prev => ({ ...prev, branch_id: value }))
        }
        />
      </FormGroup>
      </FormOption>

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

      <Button type="submit">Criar chamado</Button>
    </Card>
    </TicketForm>
  )
}
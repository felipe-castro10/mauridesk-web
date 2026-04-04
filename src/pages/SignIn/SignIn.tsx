import {
  Container,
  LeftSide,
  RightSide,
  LoginWrapper,
  Card,
  Title,
  Subtitle,
  InputGroup,
  Label,
  Input,
  Button,
  Slogan,
} from "./styles"
import logo from "../../assets/mauricea.svg"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { toast } from "sonner"





export default function SignIn() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  useEffect(() => {
  const token = localStorage.getItem('mauridesk.token');
  if (token) {
    navigate('/home');
  }
}, [navigate]);


  //criando a funsão que irá efetuar login no back e receber o token;

  async function handleLogin(){

    try{
    const response = await api.post("/sessions",{
      email,
      password
    });

    const {token} = response.data;
  
    localStorage.setItem("mauridesk.token", token)

    toast.success("Login realizado com sucesso!")

    navigate("/home")
  }catch(err: any){
    if(err.response?.status === 409){
      toast.error("E-mail ou senha inválidos")
    }else {
      toast.error("Erro ao conectar com o servidor")
    }
  }
  }

  return (
    <Container>
      <LeftSide>
      <img src={logo}/>
      
      <Slogan> <p>MAURIDESK</p>Gestão de chamados simples, suporte eficiente.</Slogan>
      </LeftSide>

      <RightSide>

        <LoginWrapper>

        

          <Card>

            <Title>MAURIDESK</Title>

            <Subtitle>
              Entre usando seu e-mail e senha cadastrados
            </Subtitle>

            <InputGroup>
              <Label>E-mail</Label>
              <Input
                type="email"
                placeholder="exemplo@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            <Button onClick={handleLogin}>Entrar</Button>

          </Card>

        </LoginWrapper>

      </RightSide>

    </Container>
  )
}
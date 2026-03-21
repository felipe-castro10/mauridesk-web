import axios from "axios";


//configurando conexão com API
export const baseURL = "http://localhost:8000";

export const api = axios.create({
  baseURL,
})


// configurando sistema de envio de token para a API

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("mauridesk.token")

  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
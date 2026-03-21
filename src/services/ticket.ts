import { api } from "./api";


export async function getMetrics(){
  const response = await api.get("/tickets/metrics")

  return response.data.metrics
}
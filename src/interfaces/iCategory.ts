export interface CustomField {
  id: string;      // O ID temporário que usamos no Front (Date.now())
  label: string;   // "Placa do Veículo", "Peso 1", etc.
  type: "text" | "number" | "date"; // Os tipos que seu select permite
}

export interface iCategory {
  id: string;              // UUID vindo do Prisma
  name: string;            // Nome da categoria (ex: PROTHEUS)
  custom_fields: CustomField[]; // O JSON que o Prisma entrega como array
  created_at?: string;
  updated_at?: string;
}
import type { iBranch } from "./Branch"
import type { iCategory } from "./iCategory"
import type { iUsers } from "./Users"

export interface iTicket{
  id: string
  title: string
  description: string
  category_id: string
  department: string
  status: string 
  priority: string
  creator_id: string | null
  technician_id: string | null
  branch_id: string  
  created_at: string
  updated_at: string 
  dynamic_responses?: Record<string, any>
  first_response_at: string
  resolved_at: string | null
  closed_at: string | null
  sla_due_at: string | null
  sla_violated: boolean | null,
  branch: iBranch,
  technician: iUsers,
  creator: iUsers,
  category: iCategory
}
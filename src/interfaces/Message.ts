import type { iUsers } from "./Users";

export interface IMessages{
  id: string;
  text: string;
  created_at: string;
  user_id: string;
  user: iUsers
}
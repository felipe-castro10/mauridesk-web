import type { iBranch } from "./Branch";


export interface iUsers {
  id: string;
  name: string;
  email: string;
  type_user: string;
  branch: iBranch;
}
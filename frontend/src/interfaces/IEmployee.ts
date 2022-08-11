// import { IDepartment } from "./IDepartment";
// import { IPostion } from "./IPosition";

export interface IEmployee {
  id: number;
  parentId?: string;
  givenName?: string;
  positionName?: string;
  phone?: string;
  email?: string;
  team?: string;
  location?: string;
  department?: string;
  description?: string;
  imageUrl?: string;
}

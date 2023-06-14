export interface IUser {
  id: string;
  name: string | null;
  email: string | null;
  createdAt?: string; // implementar
  skatersLikes?: string[];
  createdSkaters?: string[];
}

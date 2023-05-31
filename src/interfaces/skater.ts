export interface ISkater {
  id: string;
  age: string;
  name: string;
  state: { name: string, uf: string };
  level: string;
  avatar: string;
  stance: string;
  country: string;
  sponsor: string[];
  updatedAt: string;
}

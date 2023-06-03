type Address = {
  uf: string
  state: string;
  country: string;
}

export interface ISkater {
  id: string;
  age: string;
  name: string;
  level: string;
  avatar: string;
  stance: string;
  address: Address;
  sponsors: string[];
  updatedAt: string;
  amountLikes: number;
}

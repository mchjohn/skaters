type Address = {
  uf: string
  state: string
  country: string
}

export interface ISkater {
  id: string
  age: string
  name: string
  level: string
  avatar: string
  stance: string
  likes?: number
  address: Address
  updater: {
    id: string
    name: string
  }
  approved: boolean
  sponsors: string[]
  updatedAt: string
  instagram: string
}

export type RegisterSkater = {
  uf: string
  age: string
  name: string
  state: string
  level: string
  stance: string
  country: string
  updater: {
    id: string
    name: string
  }
  sponsors: string
  updatedAt: string
  instagram: string
}

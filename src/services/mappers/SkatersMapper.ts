import { ISkater, RegisterSkater } from '../../interfaces/skater'

class SkatersMapper {
  toDomain(id: string, persistSkater: ISkater) {
    const skater: ISkater = {
      id,
      age: persistSkater.age,
      name: persistSkater.name,
      level: persistSkater.level,
      likes: persistSkater.likes,
      avatar: persistSkater.avatar,
      stance: persistSkater.stance,
      address: persistSkater.address,
      updater: persistSkater.updater,
      creator: persistSkater.creator,
      approved: persistSkater.approved,
      sponsors: persistSkater.sponsors,
      instagram: persistSkater.instagram,
      updatedAt: persistSkater.updatedAt,
    }

    return skater
  }

  toDomainRegister(data: RegisterSkater) {
    const skater: Omit<ISkater, 'id' | 'avatar'> = {
      age: data.age,
      name: data.name,
      level: data.level,
      likes: 0,
      stance: data.stance,
      creator: data.creator,
      approved: false,
      sponsors: data.sponsors.split(','),
      instagram: data.instagram,
      updatedAt: data.updatedAt,
      address: {
        uf: data.uf,
        state: data.state,
        country: data.country,
      },
    }

    return skater
  }
}

export default new SkatersMapper()

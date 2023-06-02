import { ISkater } from '../../interfaces/skater'

class SkatersMapper {
  toDomain(id: string, persistSkater: ISkater) {
    const skater: ISkater = {
      id,
      age: persistSkater.age,
      name: persistSkater.name,
      level: persistSkater.level,
      avatar: persistSkater.avatar,
      stance: persistSkater.stance,
      address: persistSkater.address,
      sponsors: persistSkater.sponsors,
      updatedAt: persistSkater.updatedAt
    }

    return skater
  }
}

export default new SkatersMapper()

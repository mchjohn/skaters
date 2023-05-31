import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import * as S from './styles'

import { GoBackButton } from '../../components/GoBackButton'

import { DATA } from '../../utils/FAKE_DATA'
import { Info } from './Info'
import { ISkater } from '../../interfaces/skater'
import { RouteProps } from '../../../@types/routes'

export function Profile() {
  const route = useRoute<RouteProps>()
  const [skater, setSkater] = useState({} as ISkater)

  useEffect(() => {
    if (route.params?.userId) {
      setSkater(DATA[Number(route.params.userId)])
    }
  }, [])

  return (
    <S.View>
      <GoBackButton />

      <S.Card>
        <S.Avatar
          source={{
            uri: skater.avatar,
          }}
        />

        <S.Title>{skater.name}</S.Title>

        <S.WrapperInfo>
          <Info label='Local:' value={` ${skater.state?.name}, ${skater.country}`} />
          <Info label='Idade:' value={` ${skater.age}`} />
          <Info label='Status:' value={` ${skater.level}`} />
          <Info label='Stance:' value={` ${skater.stance}`} />
          <Info label='Patrocínios:' value={` ${skater.sponsor?.join(', ')}`} />
        </S.WrapperInfo>

        <S.Link>Última atualização: {skater.updatedAt} - Enviar uma atualização.</S.Link>
      </S.Card>
    </S.View>
  )
}

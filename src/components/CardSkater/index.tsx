import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

import { ISkater } from '../../interfaces/skater'
import { NavigationProps } from '../../../@types/routes'

type Props = {
  data: ISkater
}

export function CardSkater({ data }: Props) {
  const { colors } = useTheme()
  const navigation = useNavigation<NavigationProps>()

  function handleGoToProfile(id: string) {
    navigation.navigate('Profile', { userId: id })
  }

  return (
    <S.WrapperButton>
      <S.Button
        android_ripple={{
          color: colors.yellow4,
          foreground: true,
        }}
        onPress={() => handleGoToProfile(data.id)}
      >
        <S.Avatar
          source={{
            uri: data.avatar,
          }}
        />

        <S.Info>
          <S.Title>{data.name}</S.Title>
          <S.Text>{data.level} - {data.country}, {data.state.uf}</S.Text>
          <S.Link>Ver mais...</S.Link>
        </S.Info>
      </S.Button>
    </S.WrapperButton>
  )
}

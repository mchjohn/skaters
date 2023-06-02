import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

import { ISkater } from '../../interfaces/skater'
import { NavigationProps } from '../../../@types/routes'

type Props = {
  data: ISkater
  isLoading: boolean
}

export function CardSkater({ data, isLoading }: Props) {
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
        {isLoading ? (
          <S.WrapperLoading>
            <ActivityIndicator size="large" color={colors.yellow4} />
          </S.WrapperLoading>
        ) : (
          <S.Avatar
            source={{
              uri: data.avatar,
            }}
          />
        )}

        <S.Info>
          <S.Title>{data?.name}</S.Title>
          <S.Text>{data?.level} - {data?.address?.country}, {data?.address?.uf}</S.Text>
          <S.Link>Ver mais...</S.Link>
        </S.Info>
      </S.Button>
    </S.WrapperButton>
  )
}

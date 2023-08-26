import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

import { Text } from '../Typography/styles'
import { ISkater } from '../../interfaces/skater'
import { NavigationProps } from '../../../@types/routes'

type Props = {
  data: ISkater
  isLoading: boolean
}

export function CardSkater({ data, isLoading }: Props) {
  const { t } = useTranslation()
  const { colors } = useTheme()
  const navigation = useNavigation<NavigationProps>()

  function handleGoToProfile(id: string) {
    navigation.navigate('Profile', { skaterId: id })
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
          <Text weight='700'>{data?.name}</Text>
          <Text my='xs' size='sm'>{t(data?.level)} - {data?.address?.country}, {data?.address?.uf}</Text>
          <Text color='yellow4' size='2xs'>{t('Ver mais')}</Text>
        </S.Info>
      </S.Button>
    </S.WrapperButton>
  )
}

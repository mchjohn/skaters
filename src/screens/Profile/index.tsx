import { useTheme } from 'styled-components'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

import { GoBackButton } from '../../components/GoBackButton'
import { FavoriteButton } from '../../components/FavoriteButton'

import { Info } from './Info'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import { useProfile } from './useProfile'

export function Profile() {
  const { colors } = useTheme()

  const {
    skater,
    isFavorite,
    isLoadingSkater,
    isLoadingUserFirestoreData,
    onPress,
  } = useProfile()

  return (
    <>
      <S.View>
        <GoBackButton />

        <S.Card>
          <S.WrapperAvatar>
            <S.Avatar
              source={{
                uri: skater?.avatar,
              }}
              alt={`${skater?.name} de frente`}
            />

            <FavoriteButton isFavorite={isFavorite} onPress={onPress} />
          </S.WrapperAvatar>

          <S.Title>{skater?.name}</S.Title>

          <S.WrapperInfo>
            <Info label='Local:' value={` ${skater?.address.state}, ${skater?.address.country}`} />
            <Info label='Idade:' value={` ${skater?.age}`} />
            <Info label='Status:' value={` ${skater?.level}`} />
            <Info label='Stance:' value={` ${skater?.stance}`} />
            <Info label='Patrocínios:' value={` ${skater?.sponsors?.join(', ')}`} />
          </S.WrapperInfo>

          <S.Link>Última atualização: {skater?.updatedAt} - Enviar uma atualização.</S.Link>
        </S.Card>
      </S.View>

      <SignIn />
      <SignUp />
    </>
  )
}

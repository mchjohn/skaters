import * as S from './styles'

import { LikeButton } from '../../components/LikeButton'
import { GoBackButton } from '../../components/GoBackButton'

import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import { Loading } from '../../components/Loading'

import { Info } from './Info'
import { Avatar } from './Avatar'
import { useProfile } from './useProfile'

export function Profile() {
  const {
    skater,
    isLiked,
    isUserLoading,
    isSkaterLoading,
    handleLikeOrOpenSignModal,
  } = useProfile()

  return (
    <>
      <S.View>
        <GoBackButton />

        {isSkaterLoading ?
          <Loading self='center' size='large' my={60} /> :
          <S.Card>
            <S.WrapperAvatar>
              <Avatar uri={skater?.avatar} name={skater?.name} />

              <LikeButton isLoading={isUserLoading} isLiked={isLiked} onPress={handleLikeOrOpenSignModal} />
            </S.WrapperAvatar>

            <S.Title>{skater?.name}</S.Title>

            <S.WrapperInfo>
              <Info label='Local:' value={` ${skater?.address.state}, ${skater?.address.country}`} />
              <Info label='Idade:' value={` ${skater?.age}`} />
              <Info label='Status:' value={` ${skater?.level}`} />
              <Info label='Stance:' value={` ${skater?.stance}`} />
              <Info label='Patrocínios:' value={` ${skater?.sponsors?.join(', ')}`} />
            </S.WrapperInfo>

            <S.Link>Atualizado por Michel John em {skater?.updatedAt} - Enviar uma atualização.</S.Link>
          </S.Card>
        }
      </S.View>

      <SignIn />
      <SignUp />
    </>
  )
}

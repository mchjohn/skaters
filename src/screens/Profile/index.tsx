import * as S from './styles'

import { LikeButton } from '../../components/LikeButton'
import { GoBackButton } from '../../components/GoBackButton'

import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import { Loading } from '../../components/Loading'
import { FormUpdateSkater } from '../FormUpdateSkater'

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
    handleOpenSignModalOrOpenFormModal
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

            {/* TODO: Implementar update onPress={handleOpenSignModalOrOpenFormModal} */}
            <S.Footer>
              {/* TODO: Definir quem fez a atualização */}
              <S.Link>{skater?.updater.name} atualizou em {skater?.updatedAt}</S.Link>
              <S.Link>- Enviar atualização.</S.Link>
            </S.Footer>

            <S.Link>Cadastrado por {skater?.updater.name} em {skater?.updatedAt.slice(6)}</S.Link>
          </S.Card>
        }
      </S.View>

      <SignIn />
      <SignUp />
      <FormUpdateSkater />
    </>
  )
}

import * as S from './styles'

import { LikeButton } from '../../components/LikeButton'
import { GoBackButton } from '../../components/GoBackButton'

import { SignIn } from '../SignIn'
import { Text } from '../../components/Typography/styles'
import { SignUp } from '../SignUp'
import { Loading } from '../../components/Loading'
import { FormUpdateSkater } from '../FormUpdateSkater'

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

  const amountLikes = `${skater?.likes} ${skater?.likes === 1 ? 'like' : 'likes'}`

  return (
    <>
      <S.View>
        <GoBackButton />

        {isSkaterLoading ?
          <Loading self='center' size='large' my={60} /> :
          <S.Card>
            <S.Wrapper>
              <S.WrapperAvatar>
                <Avatar uri={skater?.avatar} name={skater?.name} />

                <LikeButton
                  isLoading={isUserLoading}
                  isLiked={isLiked}
                  onPress={handleLikeOrOpenSignModal}
                />
              </S.WrapperAvatar>

              <S.InlineView>
                <S.WrapperText>
                  <Text mt='sm' color='yellow4' size='lg' weight='700'>{skater?.name}</Text>
                  <Text weight='700' color='gray2' size='sm'>
                    {skater?.address.state}, {skater?.address.country}
                  </Text>
                </S.WrapperText>

                <Text size='xs' color='gray2' weight='900'>
                  {amountLikes}
                </Text>
              </S.InlineView>

              <S.ListInfo>
                <S.CardInfo>
                  <Text size='sm'>Idade</Text>
                  <Text weight='700' color='gray1' size='sm'>{skater?.age}</Text>
                </S.CardInfo>

                <S.CardInfo>
                  <Text size='sm'>Categoria</Text>
                  <Text weight='700' color='gray1' size='sm'>{skater?.level}</Text>
                </S.CardInfo>

                <S.CardInfo>
                  <Text size='sm'>Base</Text>
                  <Text weight='700' color='gray1' size='sm'>{skater?.stance}</Text>
                </S.CardInfo>

                <S.CardInfo>
                  <Text size='sm'>Instagram</Text>
                  <Text weight='700' color='gray1' size='sm'>{skater?.instagram}</Text>
                </S.CardInfo>
              </S.ListInfo>

              <S.WrapperText>
                <Text size='sm'>Patrocínios:</Text>
                <S.ListSponsors>
                  {skater?.sponsors.map((brand, index) => {
                    if (index % 2 === 0) {
                      return (
                        <S.CardSponsor key={brand}>
                          <Text weight='700' color='gray1' size='xs'>{brand}</Text>
                        </S.CardSponsor>
                      )
                    }
                  })}
                </S.ListSponsors>
                <S.ListSponsors>
                  {skater?.sponsors.map((brand, index) => {
                    if (index % 2 !== 0) {
                      return (
                        <S.CardSponsor key={brand}>
                          <Text weight='700' color='gray1' size='xs'>{brand}</Text>
                        </S.CardSponsor>
                      )
                    }
                  })}
                </S.ListSponsors>
              </S.WrapperText>
            </S.Wrapper>

            {/* TODO: Implementar update onPress={handleOpenSignModalOrOpenFormModal} */}
            {/* TODO: Definir quem fez a atualização */}
            {/* <S.Footer>
              {skater?.updater &&
                <Text size='xs'>{skater?.updater.name} atualizou em {skater?.updatedAt} - </Text>
              }
              <Text size='xs'>Enviar atualização.</Text>
            </S.Footer> */}

            <Text size='xs'>Cadastrado por {skater?.creator.name} em {skater?.updatedAt.slice(6)}</Text>
          </S.Card>
        }
      </S.View>

      <SignIn />
      <SignUp />
      <FormUpdateSkater />
    </>
  )
}

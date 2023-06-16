import { useTheme } from 'styled-components'

import * as S from './styles'

import { LikeButton } from '../../components/LikeButton'
import { GoBackButton } from '../../components/GoBackButton'

import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import { Loading } from '../../components/Loading'
import { FormUpdateSkater } from '../FormUpdateSkater'

import { Avatar } from './Avatar'
import { useProfile } from './useProfile'

export function Profile() {
  const { colors, fontSize } = useTheme()
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
                  <S.Title>{skater?.name}</S.Title>
                  <S.TextBold style={{ color: colors.gray2 }}>
                    {skater?.address.state}, {skater?.address.country}
                  </S.TextBold>
                </S.WrapperText>

                <S.Link style={{ color: colors.gray2, fontWeight: '900' }}>
                  {amountLikes}
                </S.Link>
              </S.InlineView>

              <S.ListInfo>
                <S.CardInfo>
                  <S.Label>Idade</S.Label>
                  <S.TextBold>{skater?.age}</S.TextBold>
                </S.CardInfo>

                <S.CardInfo>
                  <S.Label>Categoria</S.Label>
                  <S.TextBold>{skater?.level}</S.TextBold>
                </S.CardInfo>

                <S.CardInfo>
                  <S.Label>Base</S.Label>
                  <S.TextBold>{skater?.stance}</S.TextBold>
                </S.CardInfo>


                <S.CardInfo>
                  <S.Label>Instagram</S.Label>
                  <S.TextBold>{skater?.instagram}</S.TextBold>
                </S.CardInfo>
              </S.ListInfo>

              <S.WrapperText>
                <S.Label>Patrocínios:</S.Label>
                <S.ListSponsors>
                  {skater?.sponsors.map((brand, index) => {
                    if (index % 2 === 0) {
                      return (
                        <S.CardSponsor key={brand}>
                          <S.TextBold style={{ fontSize: fontSize.xs }}>{brand}</S.TextBold>
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
                          <S.TextBold style={{ fontSize: fontSize.xs }}>{brand}</S.TextBold>
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
                <S.Link>{skater?.updater.name} atualizou em {skater?.updatedAt} - </S.Link>
              }
              <S.Link>Enviar atualização.</S.Link>
            </S.Footer> */}

            <S.Link>Cadastrado por {skater?.creator.name} em {skater?.updatedAt.slice(6)}</S.Link>
          </S.Card>
        }
      </S.View>

      <SignIn />
      <SignUp />
      <FormUpdateSkater />
    </>
  )
}

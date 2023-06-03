import { useTheme } from 'styled-components'

import * as S from './styles'
import { useSignIn } from './useSignIn'

import { ModalCloseButton } from '../../components/ModalCloseButton'

export function SignIn() {
  const { colors } = useTheme()

  const {
    formData,
    disableSignInButton,
    modalSignInIsVisible,
    handleSignIn,
    handleGoToSignUp,
    handleToggleSignInModal
  } = useSignIn()

  return (
    <S.Modal
      visible={modalSignInIsVisible}
      onRequestClose={() => {
        handleToggleSignInModal()
      }}
    >
      <S.CenteredView>
        <ModalCloseButton onPress={handleToggleSignInModal} />

        <S.ModalView>
          <S.Title>Olá, entre com sua conta para curtir 🛹</S.Title>

          <S.Form>
            <S.Input
              placeholder='Digite seu e-mail *'
              value={formData.email}
              onChangeText={formData.setEmail}
            />

            <S.Input
              placeholder='Digite sua senha *'
              value={formData.password}
              onChangeText={formData.setPassword}
            />

            <S.Button
              android_ripple={{
                color: colors.gray9,
              }}
              style={{ opacity: disableSignInButton ? 0.8 : 1 }}
              disabled={disableSignInButton}
              onPress={handleSignIn}
            >
              {disableSignInButton ?
                <S.Text>Preencha todos os campos</S.Text> :
                <S.Text>Entrar</S.Text>
              }
            </S.Button>

            <S.ButtonOutline
              android_ripple={{
                color: colors.gray9,
              }}
              onPress={handleGoToSignUp}
            >
              <S.TextLink>Criar uma conta</S.TextLink>
            </S.ButtonOutline>
          </S.Form>
        </S.ModalView>
      </S.CenteredView>
    </S.Modal>
  )
}

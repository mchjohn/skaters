import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import * as S from './styles'
import { useSignUp } from './useSignUp'

import { ModalCloseButton } from '../../components/ModalCloseButton'

export function SignUp() {
  const { colors } = useTheme()

  const {
    formData,
    disableSignUpButton,
    modalSignUpIsVisible,
    handleSignUp,
    handleGoToSignIn,
    handleToggleSignUpModal
  } = useSignUp()

  return (
    (
      <S.Modal
        visible={modalSignUpIsVisible}
        onRequestClose={() => {
          handleToggleSignUpModal()
        }}
      >
        <S.CenteredView>
          <ModalCloseButton onPress={handleToggleSignUpModal} />

          <S.ModalView>
            <S.Title>Olá, crie uma conta para curtir 🛹</S.Title>

            <S.Form>
              <S.Input
                placeholder='Digite seu nome *'
                value={formData.name}
                onChangeText={formData.setName}
              />

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
              <S.LabelInput>Mínimo 6 caracteres *</S.LabelInput>

              <S.Button
                android_ripple={{
                  color: colors.gray9,
                }}
                style={{ opacity: disableSignUpButton ? 0.8 : 1 }}
                disabled={disableSignUpButton}
                onPress={handleSignUp}
              >
                {disableSignUpButton ?
                  <S.Text>Preencha todos os campos</S.Text> :
                  <S.Text>Cadastrar</S.Text>
                }
              </S.Button>

              <S.ButtonOutline
                android_ripple={{
                  color: colors.gray9,
                }}
                onPress={handleGoToSignIn}
              >
                <S.TextLink>Entrar com minha conta</S.TextLink>
              </S.ButtonOutline>
            </S.Form>
          </S.ModalView>
        </S.CenteredView>

        <Toast />
      </S.Modal>
    )
  )
}

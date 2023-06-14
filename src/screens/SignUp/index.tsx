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
            <S.Title>Crie uma conta para realizar essa trick 🛹</S.Title>

            <S.Form>
              <S.Input
                autoCapitalize='words'
                maxLength={32}
                placeholder='Digite seu nome/apelido *'
                value={formData.name}
                onChangeText={formData.setName}
              />

              <S.Input
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Digite seu e-mail *'
                value={formData.email}
                onChangeText={formData.setEmail}
              />

              <S.Input
                secureTextEntry
                autoCapitalize='none'
                autoCorrect={false}
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

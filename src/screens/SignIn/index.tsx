import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import * as S from './styles'
import { useSignIn } from './useSignIn'

import { Text } from '../../components/Typography/styles'
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
          <Text mb='xl' size='xl' weight='700' style={{ alignSelf: 'flex-start' }}>
            Entre com sua conta para continuar 🛹
          </Text>

          <S.Form>
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
              autoCorrect={false}
              autoCapitalize='none'
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
                <Text color='gray9' weight='700'>Preencha todos os campos</Text> :
                <Text color='gray9' weight='700'>Entrar</Text>
              }
            </S.Button>

            <S.ButtonOutline
              android_ripple={{
                color: colors.gray9,
              }}
              onPress={handleGoToSignUp}
            >
              <Text>Criar uma conta</Text>
            </S.ButtonOutline>
          </S.Form>
        </S.ModalView>
      </S.CenteredView>

      <Toast />
    </S.Modal>
  )
}

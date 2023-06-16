import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import { useSignUp } from './useSignUp'

import * as S from '../../components/SignModal/styles'
import { Text } from '../../components/Typography/styles'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input/styles'
import { GoBackButton } from '../../components/GoBackButton'

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
      <Modal
        visible={modalSignUpIsVisible}
        closeModal={handleToggleSignUpModal}
      >
        <GoBackButton onPress={handleToggleSignUpModal} />

        <S.ModalView>
          <Text mb='xl' size='xl' weight='700' style={{ alignSelf: 'flex-start' }}>
              Crie uma conta para realizar essa trick 🛹
          </Text>

          <S.Form>
            <Input
              autoCapitalize='words'
              maxLength={32}
              placeholder='Digite seu nome/apelido *'
              value={formData.name}
              onChangeText={formData.setName}
            />

            <Input
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Digite seu e-mail *'
              value={formData.email}
              onChangeText={formData.setEmail}
            />

            <Input
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Digite sua senha *'
              value={formData.password}
              onChangeText={formData.setPassword}
            />
            <Text mt='xs' ml='xs' color='yellow4' size='xs' style={{ alignSelf: 'flex-start' }}>
                Mínimo 6 caracteres *
            </Text>

            <S.Button
              android_ripple={{
                color: colors.gray9,
              }}
              style={{ opacity: disableSignUpButton ? 0.8 : 1 }}
              disabled={disableSignUpButton}
              onPress={handleSignUp}
            >
              {disableSignUpButton ?
                <Text color='gray9' weight='700'>Preencha todos os campos</Text> :
                <Text color='gray9' weight='700'>Cadastrar</Text>
              }
            </S.Button>

            <S.ButtonOutline
              android_ripple={{
                color: colors.gray9,
              }}
              onPress={handleGoToSignIn}
            >
              <Text>Entrar com minha conta</Text>
            </S.ButtonOutline>
          </S.Form>
        </S.ModalView>

        <Toast />
      </Modal>
    )
  )
}

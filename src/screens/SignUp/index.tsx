import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'

import { useSignUp } from './useSignUp'

import * as S from '../../components/SignModal/styles'
import { Text } from '../../components/Typography/styles'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input/styles'
import { GoBackButton } from '../../components/GoBackButton'

export function SignUp() {
  const { t } = useTranslation()
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
            {`${t('Crie uma conta para realizar essa trick')} 🛹`}
          </Text>

          <S.Form>
            <Input
              autoCapitalize='words'
              maxLength={32}
              placeholder={`${t('Digite seu nome/apelido')} *`}
              value={formData.name}
              onChangeText={formData.setName}
            />

            <Input
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              placeholder={`${t('Digite seu email')} *`}
              value={formData.email}
              onChangeText={formData.setEmail}
            />

            <Input
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              placeholder={`${t('Digite sua senha')} *`}
              value={formData.password}
              onChangeText={formData.setPassword}
            />
            <Text mt='xs' ml='xs' color='yellow4' size='xs' style={{ alignSelf: 'flex-start' }}>
              {`${t('Mínimo 6 caracteres')} *`}
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
                <Text color='gray9' weight='700'>{t('Preencha todos os campos')}</Text> :
                <Text color='gray9' weight='700'>{t('Cadastrar')}</Text>
              }
            </S.Button>

            <S.ButtonOutline
              android_ripple={{
                color: colors.gray9,
              }}
              onPress={handleGoToSignIn}
            >
              <Text>{t('Entrar com minha conta')}</Text>
            </S.ButtonOutline>
          </S.Form>
        </S.ModalView>

        <Toast />
      </Modal>
    )
  )
}

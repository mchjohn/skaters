import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'

import { useSignIn } from './useSignIn'

import * as S from '../../components/SignModal/styles'
import { Text } from '../../components/Typography/styles'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input/styles'
import { GoBackButton } from '../../components/GoBackButton'

export function SignIn() {
  const { t } = useTranslation()
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
    <Modal
      visible={modalSignInIsVisible}
      closeModal={handleToggleSignInModal}
    >
      <GoBackButton onPress={handleToggleSignInModal} />

      <S.ModalView>
        <Text mb='xl' size='xl' weight='700' style={{ alignSelf: 'flex-start' }}>
          {t('Entre com sua conta para continuar')} 🛹
        </Text>

        <S.Form>
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
            autoCorrect={false}
            autoCapitalize='none'
            placeholder={`${t('Digite sua senha')} *`}
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
              <Text color='gray9' weight='700'>{t('Preencha todos os campos')}</Text> :
              <Text color='gray9' weight='700'>{t('Entrar')}</Text>
            }
          </S.Button>

          <S.ButtonOutline
            android_ripple={{
              color: colors.gray9,
            }}
            onPress={handleGoToSignUp}
          >
            <Text>{t('Criar uma conta')}</Text>
          </S.ButtonOutline>
        </S.Form>
      </S.ModalView>

      <Toast />
    </Modal>
  )
}

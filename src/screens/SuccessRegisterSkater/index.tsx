import { useTheme } from 'styled-components'

import * as S from './styles'

import { Text } from '../../components/Typography/styles'
import { Modal } from '../../components/Modal'
import { useAuth } from '../../contexts/AuthContext'
import { useModal } from '../../contexts/ModalContext'

export function SuccessRegisterSkater() {
  const { colors } = useTheme()

  const { user } = useAuth()
  const {
    modalRegisterSkaterSuccessIsVisible,
    handleToggleRegisterSkaterSuccessModal
  } = useModal()

  return (
    <Modal
      visible={modalRegisterSkaterSuccessIsVisible}
      closeModal={handleToggleRegisterSkaterSuccessModal}
    >
      <S.ModalView>
        <S.Card>
          <Text size='xl' my='lg'>Boa!</Text>

          <Text mt='sm'>
              O skatista foi salvo. Nossa equipe agradece.
          </Text>
          <Text mt='sm'>
              Vamos analisar e logo estará disponível para todos no app.
          </Text>
          <Text mt='sm'>
              TMJ {user?.name} 🛹
          </Text>

          <S.Button
            android_ripple={{
              color: colors.gray9,
            }}
            onPress={handleToggleRegisterSkaterSuccessModal}
          >
            <Text color='gray9' weight='700'>OK</Text>
          </S.Button>
        </S.Card>
      </S.ModalView>
    </Modal>
  )
}

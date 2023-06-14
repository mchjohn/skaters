import { useTheme } from 'styled-components'

import * as S from './styles'

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
    <S.Modal
      visible={modalRegisterSkaterSuccessIsVisible}
      onRequestClose={handleToggleRegisterSkaterSuccessModal}
    >
      <S.CenteredView>
        <S.ModalView>
          <S.Card>
            <S.Title>Boa!</S.Title>

            <S.Text>
              O skatista foi salvo. Nossa equipe agradece.
            </S.Text>
            <S.Text>
              Vamos analisar e logo estará disponível para todos no app.
            </S.Text>
            <S.Text>
              TMJ {user?.name} 🛹
            </S.Text>

            <S.Button
              android_ripple={{
                color: colors.gray9,
              }}
              onPress={handleToggleRegisterSkaterSuccessModal}
            >
              <S.ButtonText>OK</S.ButtonText>
            </S.Button>
          </S.Card>
        </S.ModalView>
      </S.CenteredView>
    </S.Modal>
  )
}

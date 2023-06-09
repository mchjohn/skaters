import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import * as S from './styles'
import { useFormUpdateSkater } from './useFormUpdateSkater'

import { ModalCloseButton } from '../../components/ModalCloseButton'

export function FormUpdateSkater() {
  const { colors } = useTheme()

  const {
    formData,
    disableUpdateSkaterButton,
    modalFormUpdateSkaterIsVisible,
    handleUpdateSkater,
    handleToggleFormUpdateSkaterModal
  } = useFormUpdateSkater()

  return (
    <S.Modal
      visible={modalFormUpdateSkaterIsVisible}
      onRequestClose={handleToggleFormUpdateSkaterModal}
    >
      <S.CenteredView>
        <ModalCloseButton onPress={handleToggleFormUpdateSkaterModal} />

        <S.ModalView>
          <S.Title>Preencha os campos que deseja atualizar 🛹</S.Title>

          <S.Form>
            <S.Input
              autoCapitalize='words'
              maxLength={32}
              placeholder='Nome'
              value={formData.name}
              onChangeText={formData.setName}
            />

            <S.Button
              android_ripple={{
                color: colors.gray9,
              }}
              style={{ opacity: disableUpdateSkaterButton ? 0.8 : 1 }}
              disabled={disableUpdateSkaterButton}
              onPress={handleUpdateSkater}
            >
              {disableUpdateSkaterButton ?
                <S.Text>Preencha ao menos um campo</S.Text> :
                <S.Text>Salvar</S.Text>
              }
            </S.Button>
          </S.Form>
        </S.ModalView>
      </S.CenteredView>

      <Toast />
    </S.Modal>
  )
}

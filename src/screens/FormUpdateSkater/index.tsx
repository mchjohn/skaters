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
              placeholder='Nome do skatista'
              value={formData.name}
              onChangeText={formData.setName}
            />
            <S.Input
              autoCapitalize='words'
              maxLength={2}
              placeholder='Idade'
              value={formData.age}
              onChangeText={formData.setAge}
            />
            <S.Input
              autoCapitalize='words'
              maxLength={22}
              placeholder='Estado'
              value={formData.state}
              onChangeText={formData.setState}
            />
            <S.Input
              autoCapitalize='words'
              maxLength={12}
              placeholder='Nível (Profissional ou Amador)'
              value={formData.level}
              onChangeText={formData.setLevel}
            />
            <S.Input
              autoCapitalize='words'
              maxLength={7}
              placeholder='Base (Regular ou Goofy)'
              value={formData.stance}
              onChangeText={formData.setStance}
            />
            <S.Input
              autoCapitalize='words'
              placeholder='Patrocínios (separado por virgula)'
              value={formData.sponsors}
              onChangeText={formData.setSponsors}
            />
            <S.Input
              autoCapitalize='words'
              maxLength={22}
              placeholder='Instagram'
              value={formData.instagram}
              onChangeText={formData.setInstagram}
            />
            <S.Input
              autoCapitalize='words'
              maxLength={7}
              placeholder='Data das informações'
              value={formData.updatedAt}
              onChangeText={formData.setUpdatedAt}
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
import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import * as S from './styles'
import { useFormUpdateSkater } from './useFormUpdateSkater'

import { Text } from '../../components/Typography/styles'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input/styles'
import { GoBackButton } from '../../components/GoBackButton'

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
    <Modal
      visible={modalFormUpdateSkaterIsVisible}
      closeModal={handleToggleFormUpdateSkaterModal}
    >
      <GoBackButton onPress={handleToggleFormUpdateSkaterModal} />

      <S.ModalView>
        <Text my='xs' size='sm'>Preencha os campos que deseja atualizar 🛹</Text>

        <S.Form>
          <Input
            autoCapitalize='words'
            maxLength={32}
            placeholder='Nome do skatista'
            value={formData.name}
            onChangeText={formData.setName}
          />
          <Input
            autoCapitalize='words'
            maxLength={2}
            placeholder='Idade'
            value={formData.age}
            onChangeText={formData.setAge}
          />
          <Input
            autoCapitalize='words'
            maxLength={22}
            placeholder='Estado'
            value={formData.state}
            onChangeText={formData.setState}
          />
          <Input
            autoCapitalize='words'
            maxLength={12}
            placeholder='Nível (Profissional ou Amador)'
            value={formData.level}
            onChangeText={formData.setLevel}
          />
          <Input
            autoCapitalize='words'
            maxLength={7}
            placeholder='Base (Regular ou Goofy)'
            value={formData.stance}
            onChangeText={formData.setStance}
          />
          <Input
            autoCapitalize='words'
            placeholder='Patrocínios (separado por virgula)'
            value={formData.sponsors}
            onChangeText={formData.setSponsors}
          />
          <Input
            autoCapitalize='words'
            maxLength={22}
            placeholder='Instagram'
            value={formData.instagram}
            onChangeText={formData.setInstagram}
          />
          <Input
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
              <Text color='gray9' weight='700'>Preencha ao menos um campo</Text> :
              <Text color='gray9' weight='700'>Salvar</Text>
            }
          </S.Button>
        </S.Form>
      </S.ModalView>

      <Toast />
    </Modal>
  )
}

import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import * as S from './styles'
import { useFormRegisterSkater } from './useFormRegisterSkater'

import { Text } from '../../components/Typography/styles'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input/styles'
import { Select } from '../../components/Select'
import { Loading } from '../../components/Loading'
import { GoBackButton } from '../../components/GoBackButton'

export function FormRegisterSkater() {
  const { colors } = useTheme()

  const {
    formData,
    isLoading,
    shouldDisableUpdateSkaterButton,
    modalFormRegisterSkaterIsVisible,
    handleToggleFormRegisterSkaterModal,
    handleUpdateSkater,
  } = useFormRegisterSkater()

  const textButton = shouldDisableUpdateSkaterButton ? 'Preencha todos os campos' : 'Salvar'

  return (
    <Modal
      visible={modalFormRegisterSkaterIsVisible}
      closeModal={handleToggleFormRegisterSkaterModal}
    >
      <S.ModalView centerContent contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        <S.Header>
          <Text size='sm' style={{ maxWidth: 220 }}>
            Preencha todos os campos para cadastrar um skatista no app
          </Text>

          <GoBackButton onPress={handleToggleFormRegisterSkaterModal} />
        </S.Header>

        <S.Form>
          <Input
            editable={!isLoading}
            maxLength={32}
            autoCapitalize='words'
            placeholder='Nome do skatista'
            value={formData.name}
            onChangeText={formData.setName}
          />
          <Input
            editable={!isLoading}
            maxLength={2}
            placeholder='Idade'
            keyboardType='numeric'
            value={formData.age}
            onChangeText={formData.setAge}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='words'
            maxLength={22}
            placeholder='País'
            value={formData.country}
            onChangeText={formData.setCountry}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='words'
            maxLength={22}
            placeholder='Estado'
            value={formData.state}
            onChangeText={formData.setState}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='characters'
            maxLength={2}
            placeholder='UF do estado'
            value={formData.uf}
            onChangeText={formData.setUf}
          />

          <S.WrapperSelect>
            <Select
              data={['Profissional', 'Amador']}
              color={formData.level && colors.gray1}
              defaultButtonText='Categoria'
              onSelect={formData.setLevel}
            />
            <Select
              data={['Regular', 'Goofy']}
              color={formData.stance && colors.gray1}
              defaultButtonText='Base'
              onSelect={formData.setStance}
            />
          </S.WrapperSelect>

          <Input
            editable={!isLoading}
            autoCapitalize='words'
            placeholder='Patrocínios (separado por virgula)'
            value={formData.sponsors}
            onChangeText={formData.setSponsors}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='none'
            maxLength={22}
            placeholder='Instagram'
            value={formData.instagram}
            onChangeText={formData.setInstagram}
          />
          <S.MaskedInput
            editable={!isLoading}
            maxLength={10}
            placeholder='Data das informações'
            keyboardType='numeric'
            type='data'
            mask="99/99/9999"
            options={{
              dateFormat: 'DD-MM-YYYY'
            }}
            onChangeText={formData.setUpdatedAt}
          />

          <S.Button
            android_ripple={{
              color: colors.gray9,
            }}
            style={{ opacity: shouldDisableUpdateSkaterButton ? 0.8 : 1 }}
            disabled={isLoading || shouldDisableUpdateSkaterButton}
            onPress={() => handleUpdateSkater()}
          >
            {isLoading ?
              <Loading self='center' mx={0} my={0} color={colors.gray9} /> :
              <Text size='md' color='gray9' weight='700'>{textButton}</Text>
            }
          </S.Button>
        </S.Form>
      </S.ModalView>

      <Toast />
    </Modal>
  )
}

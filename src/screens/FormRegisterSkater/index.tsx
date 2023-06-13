import { useTheme } from 'styled-components'
import Toast from 'react-native-toast-message'

import * as S from './styles'
import { useFormRegisterSkater } from './useFormRegisterSkater'

import { Loading } from '../../components/Loading'
import { ModalCloseButton } from '../../components/ModalCloseButton'

export function FormRegisterSkater() {
  const { colors } = useTheme()

  const {
    formData,
    isLoading,
    disableUpdateSkaterButton,
    modalFormRegisterSkaterIsVisible,
    handleToggleFormRegisterSkaterModal,
    handleUpdateSkater,
  } = useFormRegisterSkater()

  const isDisabled = isLoading || disableUpdateSkaterButton
  const textButton = disableUpdateSkaterButton ? 'Preencha todos os campos' : 'Salvar'

  return (
    <S.Modal
      visible={modalFormRegisterSkaterIsVisible}
      onRequestClose={handleToggleFormRegisterSkaterModal}
    >
      <S.CenteredView>
        <S.Header>
          <S.Title>Preencha todos os campos para cadastrar um skatista no app</S.Title>

          <ModalCloseButton onPress={handleToggleFormRegisterSkaterModal} />
        </S.Header>

        <S.ModalView>
          <S.Form>
            <S.Input
              editable={isDisabled}
              autoCapitalize='words'
              maxLength={32}
              placeholder='Nome do skatista'
              value={formData.name}
              onChangeText={formData.setName}
            />
            <S.Input
              editable={isDisabled}
              maxLength={2}
              placeholder='Idade'
              value={formData.age}
              onChangeText={formData.setAge}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='words'
              maxLength={22}
              placeholder='País'
              value={formData.country}
              onChangeText={formData.setCountry}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='words'
              maxLength={22}
              placeholder='Estado'
              value={formData.state}
              onChangeText={formData.setState}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='characters'
              maxLength={2}
              placeholder='UF do estado'
              value={formData.uf}
              onChangeText={formData.setUf}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='words'
              maxLength={12}
              placeholder='Nível (Profissional ou Amador)'
              value={formData.level}
              onChangeText={formData.setLevel}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='words'
              maxLength={7}
              placeholder='Base (Regular ou Goofy)'
              value={formData.stance}
              onChangeText={formData.setStance}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='words'
              placeholder='Patrocínios (separado por virgula)'
              value={formData.sponsors}
              onChangeText={formData.setSponsors}
            />
            <S.Input
              editable={isDisabled}
              autoCapitalize='none'
              maxLength={22}
              placeholder='Instagram'
              value={formData.instagram}
              onChangeText={formData.setInstagram}
            />
            {/* TODO: Aplicar mascara */}
            <S.Input
              editable={isDisabled}
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
              disabled={isLoading || disableUpdateSkaterButton}
              onPress={() => handleUpdateSkater()}
            >
              {isLoading ?
                <Loading self='center' mx={0} my={0} color='#1A1A1A' /> :
                <S.Text>{textButton}</S.Text>
              }
            </S.Button>
          </S.Form>
        </S.ModalView>
      </S.CenteredView>

      <Toast />
    </S.Modal>
  )
}

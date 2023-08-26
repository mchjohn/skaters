import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const { colors } = useTheme()

  const {
    formData,
    isLoading,
    shouldDisableUpdateSkaterButton,
    modalFormRegisterSkaterIsVisible,
    handleToggleFormRegisterSkaterModal,
    handleUpdateSkater,
  } = useFormRegisterSkater()

  const textButton = shouldDisableUpdateSkaterButton ? t('Preencha todos os campos') : t('Salvar')

  return (
    <Modal
      visible={modalFormRegisterSkaterIsVisible}
      closeModal={handleToggleFormRegisterSkaterModal}
    >
      <S.ModalView centerContent contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        <S.Header>
          <Text size='sm' style={{ maxWidth: 220 }}>
            {t('Preencha todos os campos para cadastrar um skatista no app')}
          </Text>

          <GoBackButton onPress={handleToggleFormRegisterSkaterModal} />
        </S.Header>

        <S.Form>
          <Input
            editable={!isLoading}
            maxLength={32}
            autoCapitalize='words'
            placeholder={t('Nome do skatista')}
            value={formData.name}
            onChangeText={formData.setName}
          />
          <Input
            editable={!isLoading}
            maxLength={2}
            placeholder={t('Idade')}
            keyboardType='numeric'
            value={formData.age}
            onChangeText={formData.setAge}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='words'
            maxLength={22}
            placeholder={t('País')}
            value={formData.country}
            onChangeText={formData.setCountry}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='words'
            maxLength={22}
            placeholder={t('Estado')}
            value={formData.state}
            onChangeText={formData.setState}
          />
          <Input
            editable={!isLoading}
            autoCapitalize='characters'
            maxLength={2}
            placeholder={t('UF do estado')}
            value={formData.uf}
            onChangeText={formData.setUf}
          />

          <S.WrapperSelect>
            <Select
              data={[t('Profissional'), t('Amador')]}
              color={formData.level && colors.gray1}
              defaultButtonText={t('Category')}
              onSelect={formData.setLevel}
            />
            <Select
              data={['Regular', 'Goofy']}
              color={formData.stance && colors.gray1}
              defaultButtonText={t('Base')}
              onSelect={formData.setStance}
            />
          </S.WrapperSelect>

          <Input
            editable={!isLoading}
            autoCapitalize='words'
            placeholder={t('Patrocínios (separado por virgula)')}
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
            placeholder={t('Data das informações')}
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

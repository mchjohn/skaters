import { useTheme } from 'styled-components'

import * as S from './styles'

import { IUser } from '../../interfaces/user'

import * as UsersServices from '../../services/firebase/UsersServices'

import { Text } from '../Typography/styles'
import { Modal } from '../Modal'
import { GoBackButton } from '../GoBackButton'

type Props = {
  user: IUser
  modalVisible: boolean
  handleToggleModal(): void
}

export function ModalUserInfo({ user, modalVisible, handleToggleModal }: Props) {
  const { colors } = useTheme()

  const amountLikes = user?.skatersLikes?.length ?? 0
  const amountCreated = user?.createdSkaters?.length ?? 0

  function handleSignOut() {
    UsersServices.signOut()

    handleToggleModal()
  }

  return (
    <Modal
      visible={modalVisible}
      closeModal={handleToggleModal}
    >
      <GoBackButton onPress={handleToggleModal} />

      <S.ModalView>
        <Text color='yellow4' size='xl' weight='700'>Olá, {user?.name} 🛹</Text>

        <S.Info>
          <Text mb='xs'>Email: {user?.email}</Text>
        </S.Info>

        <Text mb='xs'>
            Skatistas curtidos: <Text mb='xs' style={{ color: colors.yellow4 }}>{amountLikes}</Text>
        </Text>
        <Text mb='xs'>
            Skatistas cadastrados: <Text mb='xs' style={{ color: colors.yellow4 }}>{amountCreated}</Text>
        </Text>
      </S.ModalView>

      <S.Button
        android_ripple={{
          color: colors.yellow4,
          foreground: true,
        }}
        onPress={handleSignOut}
      >
        <Text>Sair da minha conta</Text>
      </S.Button>
    </Modal>
  )
}

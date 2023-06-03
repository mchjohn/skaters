import { useTheme } from 'styled-components'

import * as S from './styles'

import { IUser } from '../../interfaces/user'

import * as UsersServices from '../../services/firebase/UsersServices'

import { ModalCloseButton } from '../ModalCloseButton'

type Props = {
  user: IUser
  modalVisible: boolean
  handleToggleModal(): void
}

export function ModalUserInfo({ user, modalVisible, handleToggleModal }: Props) {
  const { colors } = useTheme()

  function handleSignOut() {
    UsersServices.signOut()

    handleToggleModal()
  }

  return (
    <S.Modal
      visible={modalVisible}
      onRequestClose={() => {
        handleToggleModal()
      }}
    >
      <S.CenteredView>
        <ModalCloseButton onPress={handleToggleModal} />

        <S.ModalView>
          <S.Title>Olá, John {user?.name} 🛹</S.Title>

          <S.Info>
            <S.Text>Email: {user?.email}</S.Text>
          </S.Info>

          <S.Text>Você curtiu 100 skatistas nesse rolê</S.Text>
        </S.ModalView>

        <S.Button
          android_ripple={{
            color: colors.yellow4,
            foreground: true,
          }}
          onPress={handleSignOut}
        >
          <S.Link>Sair da minha conta</S.Link>
        </S.Button>
      </S.CenteredView>
    </S.Modal>
  )
}

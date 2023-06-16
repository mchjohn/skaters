import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children: ReactNode
  visible: boolean
  closeModal(): void
}

export function Modal({ children, visible, closeModal }: Props) {
  return (
    <S.Modal
      visible={visible}
      onRequestClose={closeModal}
    >
      <S.CenteredView>
        {children}
      </S.CenteredView>
    </S.Modal>
  )
}

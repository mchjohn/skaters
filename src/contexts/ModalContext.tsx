import { ReactNode, createContext, useContext, useState } from 'react'

type ModalProviderProps = {
  children: ReactNode;
};

interface ModalContextType {
  modalSignInIsVisible: boolean
  modalSignUpIsVisible: boolean
  modalFormUpdateSkaterIsVisible: boolean
  handleToggleSignInModal(): void
  handleToggleSignUpModal(): void
  handleToggleFormUpdateSkaterModal(): void
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)
  const [modalSignUpIsVisible, setModalSignUpIsVisible] = useState(false)
  const [modalFormUpdateSkaterIsVisible, setModalFormUpdateSkaterIsVisible] = useState(false)

  function handleToggleSignInModal() {
    setModalSignInIsVisible(prev => !prev)
  }

  function handleToggleSignUpModal() {
    setModalSignUpIsVisible(prev => !prev)
  }

  function handleToggleFormUpdateSkaterModal() {
    setModalFormUpdateSkaterIsVisible(prev => !prev)
  }

  return (
    <ModalContext.Provider
      value={{
        modalSignInIsVisible,
        modalSignUpIsVisible,
        modalFormUpdateSkaterIsVisible,
        handleToggleSignInModal,
        handleToggleSignUpModal,
        handleToggleFormUpdateSkaterModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}

import { ReactNode, createContext, useContext, useState } from 'react'

type ModalProviderProps = {
  children: ReactNode;
};

interface ModalContextType {
  modalSignInIsVisible: boolean
  modalSignUpIsVisible: boolean
  modalFormUpdateSkaterIsVisible: boolean
  modalFormRegisterSkaterIsVisible: boolean
  modalRegisterSkaterSuccessIsVisible: boolean
  handleToggleSignInModal(): void
  handleToggleSignUpModal(): void
  handleToggleFormUpdateSkaterModal(): void
  handleToggleFormRegisterSkaterModal(): void
  handleToggleRegisterSkaterSuccessModal(): void
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)
  const [modalSignUpIsVisible, setModalSignUpIsVisible] = useState(false)
  const [modalFormUpdateSkaterIsVisible, setModalFormUpdateSkaterIsVisible] = useState(false)
  const [modalFormRegisterSkaterIsVisible, setModalFormRegisterSkaterIsVisible] = useState(false)
  const [modalRegisterSkaterSuccessIsVisible, setModalRegisterSkaterSuccessIsVisible] = useState(false)

  function handleToggleSignInModal() {
    setModalSignInIsVisible(prev => !prev)
  }

  function handleToggleSignUpModal() {
    setModalSignUpIsVisible(prev => !prev)
  }

  function handleToggleFormUpdateSkaterModal() {
    setModalFormUpdateSkaterIsVisible(prev => !prev)
  }

  function handleToggleFormRegisterSkaterModal() {
    setModalFormRegisterSkaterIsVisible(prev => !prev)
  }

  function handleToggleRegisterSkaterSuccessModal() {
    setModalRegisterSkaterSuccessIsVisible(prev => !prev)
  }

  return (
    <ModalContext.Provider
      value={{
        modalSignInIsVisible,
        modalSignUpIsVisible,
        modalFormUpdateSkaterIsVisible,
        modalFormRegisterSkaterIsVisible,
        modalRegisterSkaterSuccessIsVisible,
        handleToggleSignInModal,
        handleToggleSignUpModal,
        handleToggleFormUpdateSkaterModal,
        handleToggleFormRegisterSkaterModal,
        handleToggleRegisterSkaterSuccessModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}

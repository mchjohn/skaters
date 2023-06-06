import { ReactNode, createContext, useContext, useState } from 'react'

type ModalProviderProps = {
  children: ReactNode;
};

interface ModalContextType {
  modalSignInIsVisible: boolean
  modalSignUpIsVisible: boolean
  handleToggleSignInModal(): void
  handleToggleSignUpModal(): void
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)
  const [modalSignUpIsVisible, setModalSignUpIsVisible] = useState(false)

  function handleToggleSignInModal() {
    setModalSignInIsVisible(prev => !prev)
  }

  function handleToggleSignUpModal() {
    setModalSignUpIsVisible(prev => !prev)
  }

  return (
    <ModalContext.Provider
      value={{
        modalSignInIsVisible,
        modalSignUpIsVisible,
        handleToggleSignInModal,
        handleToggleSignUpModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}

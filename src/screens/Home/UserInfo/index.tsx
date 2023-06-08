import * as S from './styles'

import { Loading } from '../../../components/Loading'

type Props = {
  name?: string | null
  isLoading: boolean
  handleToggleModal(): void
}

export function UserInfo({ name, isLoading, handleToggleModal }: Props) {
  if (isLoading) return <Loading />

  return (
    <>
      {name ?
        <S.Text onPress={handleToggleModal}>Olá, {name} 🛹</S.Text> : null
      }
    </>
  )
}

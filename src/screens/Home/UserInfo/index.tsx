import { useTranslation } from 'react-i18next'

import { Text } from '../../../components/Typography/styles'
import { Loading } from '../../../components/Loading'

type Props = {
  name?: string | null
  isLoading: boolean
  handleToggleModal(): void
}

export function UserInfo({ name, isLoading, handleToggleModal }: Props) {
  const { t } = useTranslation()

  if (isLoading) return <Loading />

  return (
    <>
      {name ?
        <Text size='lg' color='yellow4' onPress={handleToggleModal}>{t('Olá')}, {name} 🛹</Text> : null
      }
    </>
  )
}

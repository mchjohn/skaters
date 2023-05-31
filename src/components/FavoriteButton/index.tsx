import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'

type Props = {
  isFavorite: boolean;
  handleToggleFavorite: () => void;
}

export function FavoriteButton({ isFavorite, handleToggleFavorite }: Props) {
  const { colors } = useTheme()

  return (
    <S.Button onPress={handleToggleFavorite}>
      <Ionicons
        size={34}
        name={isFavorite ? 'ios-heart' : 'ios-heart-outline'}
        color={isFavorite ? colors.yellow4 : colors.gray1}
      />
    </S.Button>
  )
}

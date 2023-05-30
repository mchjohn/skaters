import { useTheme } from 'styled-components'

import * as S from './styles'

type Props = {
  data: {
    name: string;
    country: string;
    state: string;
    level: string;
    avatar: string;
  }
}

export function CardSkater({ data }: Props) {
  const { colors } = useTheme()

  return (
    <S.WrapperButton>
      <S.Button
        android_ripple={{
          color: colors.yellow4,
          foreground: true,
        }}
      >
        <S.Avatar
          source={{
            uri: data.avatar,
          }}
        />

        <S.Info>
          <S.Title>{data.name}</S.Title>
          <S.Text>{data.level} - {data.country}, {data.state}</S.Text>
          <S.Link>Ver mais...</S.Link>
        </S.Info>
      </S.Button>
    </S.WrapperButton>
  )
}

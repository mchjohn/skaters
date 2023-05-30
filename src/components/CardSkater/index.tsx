import { useTheme } from 'styled-components'

import * as S from './styles'

const uri= 'https://b6f4196fd8.cbaul-cdnwnd.com/497c46086f60a827fa51f31e6cb37c5b/200000006-cd5d4cf4ff/i%20%281%29.png?ph=b6f4196fd8'

export function CardSkater() {
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
            uri,
          }}
        />

        <S.Info>
          <S.Title>Gabriela Mazetto</S.Title>
          <S.Text>Profissional - Brasil, SP</S.Text>
          <S.Link>Ver mais...</S.Link>
        </S.Info>
      </S.Button>
    </S.WrapperButton>
  )
}

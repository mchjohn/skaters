import * as S from './styles'

type InfoProps = {
  label: string
  value: string
}

export function Info({ label, value }: InfoProps) {
  return (
    <S.Label>{label}
      <S.TextBold>{value}</S.TextBold>
    </S.Label>
  )
}

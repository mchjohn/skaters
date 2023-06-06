import * as S from './styles'

export function Avatar({ uri, name }: { uri?: string, name?: string}) {
  return (
    <>
      {uri ?
        <S.Avatar source={{ uri: uri }} alt={`${name} de frente`} /> :
        <S.Avatar
          source={require('../../images/inskate-logo.png')}
          alt='logotipo do inSkate, silhueta de skatista remando'
        />
      }
    </>
  )
}

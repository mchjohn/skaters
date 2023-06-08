import * as S from './styles'

import { Loading } from '../../components/Loading'

export function Avatar({ uri, name }: { uri?: string, name?: string}) {
  return (
    <>
      {uri ?
        <S.Avatar source={{ uri: uri }} alt={`${name} de frente`} /> :
        <S.LoadingAvatar>
          <Loading self='center' size='large' />
        </S.LoadingAvatar>
      }
    </>
  )
}

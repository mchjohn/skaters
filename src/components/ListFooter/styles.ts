import styled from 'styled-components/native'

import { RFValue } from '../../utils/responsive_fontsize'

export const View = styled.View`
  margin-top: ${props => RFValue(props.theme.spacing.md)}px

  alignItems: center
  justifyContent: center
`

import 'styled-components'

import Theme from '../src/styles/theme'

export type ITheme = typeof Theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}

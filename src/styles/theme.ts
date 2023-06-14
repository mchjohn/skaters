import { RFValue } from '../utils/responsive_fontsize'

const Theme = {
  colors: {
    gray1: '#FAFAFA',
    gray4: '#8c8c8c',
    gray8: '#282828',
    gray9: '#1A1A1A',

    yellow4: '#FFFD01',
  },
  spacing: {
    '2xs': RFValue(2),
    xs: RFValue(4),
    sm: RFValue(8),
    md: RFValue(16),
    lg: RFValue(18),
    xl: RFValue(40),
  },
  size: {
    sm: RFValue(48),
    md: RFValue(64),
    lg: RFValue(96),
    xl: RFValue(160),
    full: '100%',
    half: '50%',
  },
  radii: {
    sm: 4,
    md: 8,
    xl: 30,
    full: 9999,
  },
  fontSize: {
    '2xs': RFValue(10),
    xs: RFValue(12),
    sm: RFValue(14),
    md: RFValue(16),
    lg: RFValue(20),
    xl: RFValue(24),
    '2xl': RFValue(28),
  }
} as const

export default Theme

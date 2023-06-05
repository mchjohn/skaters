const Theme = {
  colors: {
    gray1: '#FAFAFA',
    gray8: '#282828',
    gray9: '#1A1A1A',

    yellow4: '#FFFD01',
  },
  spacing: {
    '2xs': 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 18,
    xl: 40,
  },
  size: {
    sm: 48,
    md: 64,
    lg: 96,
    xl: 160,
    full: '100%',
  },
  radii: {
    sm: 4,
    md: 8,
    xl: 30,
    full: 9999,
  },
  fontSize: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 28,
  } as const
}


export default Theme

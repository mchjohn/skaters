import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'

import { RFValue } from '../../utils/responsive_fontsize'

const filters = ['Popular', 'A - Z']

const options = {
  Popular: 'likes',
  'A - Z': 'name'
} as const

type Options = 'Popular' | 'A - Z'
export type SelectedItemProps = 'name' | 'likes'

type Props = {
  onSelect: (selectedItem: SelectedItemProps) => void
}

export function Filter({ onSelect }: Props) {
  const { radii, colors, fontSize, size, spacing } = useTheme()

  return (
    <SelectDropdown
      data={filters}
      onSelect={(selectedItem: Options) => {
        onSelect(options[selectedItem])
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem
      }}
      rowTextForSelection={(item) => {
        return item
      }}
      defaultButtonText='Ordenar por'
      buttonStyle={{
        width: size.xl,
        height: size.sm,
        borderRadius: radii.md,
        backgroundColor: colors.gray8
      }}
      buttonTextStyle={{ color: colors.gray1, fontSize: RFValue(fontSize.md) }}
      renderDropdownIcon={
        () => <Ionicons name="ios-chevron-down" size={RFValue(32)} color={colors.gray1} />
      }
      rowStyle={{
        width: size.xl,
        height: size.sm,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray9,
        backgroundColor: colors.gray8,
      }}
      rowTextStyle={{ color: colors.gray1, fontSize: RFValue(fontSize.md) }}
      dropdownStyle={{
        width: size.xl,
        marginTop: spacing.xs,
        borderRadius: radii.md,
        backgroundColor: colors.gray9
      }}
      selectedRowTextStyle={{
        color: colors.yellow4,
      }}
      statusBarTranslucent={true}
    />
  )
}

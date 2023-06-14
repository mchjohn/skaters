import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'

import { RFValue } from '../../utils/responsive_fontsize'

type Props = {
  data: string[]
  color?: string
  defaultButtonText: string
  onSelect: (selectedItem: string) => void
}

export function Select({
  data,
  color,
  defaultButtonText,
  onSelect
}: Props) {
  const { radii, colors, fontSize, size, spacing } = useTheme()

  const buttonTextColor = color ? color : colors.gray2

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem: string) => {
        onSelect(selectedItem)
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem
      }}
      rowTextForSelection={(item) => {
        return item
      }}
      statusBarTranslucent={true}
      defaultButtonText={defaultButtonText}
      renderDropdownIcon={
        () => <Ionicons name="ios-chevron-down" size={RFValue(32)} color={colors.gray1} />
      }
      buttonStyle={{
        flex: 1,
        display: 'flex',
        marginTop: spacing.md,
        borderRadius: radii.md,
        backgroundColor: colors.gray9
      }}
      buttonTextStyle={{ color: buttonTextColor, fontSize: fontSize.md }}

      rowStyle={{
        borderBottomWidth: 2,
        borderBottomColor: colors.gray9,
        backgroundColor: colors.gray8,
      }}
      rowTextStyle={{ color: colors.gray1, fontSize: fontSize.md }}
      dropdownStyle={{
        width: size.xl,
        marginTop: spacing.lg,
        borderRadius: radii.md,
        backgroundColor: colors.gray9
      }}
      selectedRowTextStyle={{
        color: colors.yellow4,
      }}
    />
  )
}

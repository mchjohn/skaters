import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'

const filters = ['Popular', 'A - Z']

export function Filter() {
  const { radii, colors, fontSize, size, spacing } = useTheme()

  return (
    <SelectDropdown
      data={filters}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index)
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
      buttonTextStyle={{ color: colors.gray1, fontSize: fontSize.md }}
      renderDropdownIcon={
        () => <Ionicons name="ios-chevron-down" size={32} color={colors.gray1} />
      }
      rowStyle={{
        width: size.xl,
        height: size.sm,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray9,
        backgroundColor: colors.gray8,
      }}
      rowTextStyle={{ color: colors.gray1, fontSize: fontSize.md }}
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

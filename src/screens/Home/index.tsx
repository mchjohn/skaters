import { useNavigation } from '@react-navigation/native'
import { YStack, Text, Button } from 'tamagui'

import { NavigationProps } from '../../../@types/routes'

export function Home() {
  const navigation = useNavigation<NavigationProps>()

  function handleGoToProfile() {
    navigation.navigate('Profile', { userId: '123' })
  }

  return (
    <YStack p={'$3.5'} flex={1} bg='$dark9'>
      <Text color="$dark0">Home</Text>
      <Button color='$dark0' onPress={handleGoToProfile}>Go to Profile</Button>
    </YStack>
  )
}

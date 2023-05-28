import { useNavigation } from '@react-navigation/native'
import { YStack, Text, Button } from 'tamagui'

export function Home() {
  const { navigate } = useNavigation()

  return (
    <YStack margin={10}>
      <Text color="$color">Home</Text>
      <Button onPress={() => navigate('Profile')}>Go to Profile</Button>
    </YStack>
  )
}

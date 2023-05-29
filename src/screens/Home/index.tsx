import { Button, View } from 'react-native'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { NavigationProps } from '../../../@types/routes'

export function Home() {
  const navigation = useNavigation<NavigationProps>()

  function handleGoToProfile() {
    navigation.navigate('Profile', { userId: '123' })
  }

  return (
    <View >
      <Text>Home</Text>

      <Button title='Go to Profile' onPress={handleGoToProfile} />
    </View>
  )
}

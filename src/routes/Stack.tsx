import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../@types/routes'

import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

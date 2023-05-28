import { NavigationContainer } from '@react-navigation/native'

import { StackNavigation } from './Stack'

export default function Route() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

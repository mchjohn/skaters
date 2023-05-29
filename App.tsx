import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Route from './src/routes'

import { SafeArea } from './src/components/SafeArea'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeArea>
        <Route />
      </SafeArea>

      <StatusBar style="inverted" />
    </SafeAreaProvider>
  )
}

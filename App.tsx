import {
  QueryClient,
  focusManager,
  onlineManager,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppState, Platform } from 'react-native'
import type { AppStateStatus } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

import Theme from './src/styles/theme'

import Route from './src/routes'

import { SafeArea } from './src/components/SafeArea'

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const queryClient = new QueryClient()

export default function App() {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <SafeAreaProvider>
          <SafeArea>
            <Route />
          </SafeArea>

          <StatusBar style="inverted" />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

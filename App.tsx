import {
  QueryClient,
  focusManager,
  onlineManager,
  QueryClientProvider,
} from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppState, Platform } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import type { AppStateStatus } from 'react-native'
import Toast from 'react-native-toast-message'
import NetInfo from '@react-native-community/netinfo'

import Octicons from '@expo/vector-icons/Octicons'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

SplashScreen.preventAutoHideAsync()

import Theme from './src/styles/theme'

import Route from './src/routes'

import { SafeArea } from './src/components/SafeArea'
import { AuthProvider } from './src/contexts/AuthContext'
import { ModalProvider } from './src/contexts/ModalContext'

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
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          ...Octicons.font,
          ...Ionicons.font,
        })

        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <SafeAreaProvider>
          <AuthProvider>
            <ModalProvider>
              <SafeArea onLayoutRootView={onLayoutRootView}>
                <Route />

                <Toast />
              </SafeArea>
            </ModalProvider>
          </AuthProvider>
          <StatusBar style="inverted" />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

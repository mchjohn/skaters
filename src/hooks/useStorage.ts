import { MMKV } from 'react-native-mmkv'
import { useCallback } from 'react'

type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONValue };

const storage = new MMKV({ id: 'vdb' })

export function useStorage() {
  const setStorageValue = useCallback((key: string, value: JSONValue) => {
    const jsonValue = JSON.stringify(value)
    storage.set(key, jsonValue)
  }, [])

  const getStorageValue = useCallback((key: string) => {
    const data = storage.getString(key)
    return data ? JSON.parse(data) : null
  }, [])

  const deleteStorageValue = useCallback((key: string) => {
    storage.delete(key)
  }, [])

  return { setStorageValue, getStorageValue, deleteStorageValue }
}

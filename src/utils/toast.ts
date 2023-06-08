import Toast from 'react-native-toast-message'

type ToastProps = {
  type: 'error' | 'success' | 'info'
  text?: string
  title?: string
};

export function showToast({ type, text, title }: ToastProps) {
  Toast.show({
    type,
    text1: title,
    text2: text
  })
}

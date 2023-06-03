import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { showToast } from '../../utils/toast'

type UserDataToFirestore = {
  id: string
  name: string
  email: string
}
async function saveUserOnFirestore(userData: UserDataToFirestore) {
  try {
    firestore().collection('users').doc(userData.id).set({
      email: userData.email,
      name: userData.name
    })
  } catch (error) {
    console.log('Não foi possível salvar o usuário no firestore', error)
  }
}

export type UserData = {
  name: string
  email: string
  password: string
}
function signUp(userData: UserData, onClose: () => void) {
  auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then(({user}) => {
      onClose()

      if (user) {
        saveUserOnFirestore({
          id: user.uid,
          name: userData.name,
          email: userData.email
        })
      }

      showToast({type: 'success', title: 'Conta criada com sucesso 🛹'})
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        return showToast({type: 'error', title: 'Usuário já cadastrado 🛹'})
      }
      if (error.code === 'auth/invalid-email') {
        return showToast({type: 'error', title: 'Insira um e-mail válido 🛹'})
      }
      return showToast({type: 'error', title: 'Não deu pra completar esse rolê, tente novamente 🛹'})
    })
}

function signIn(email: string, password: string, onClose: () => void) {
  auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      onClose()
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
        return showToast({type: 'error', title: 'E-mail ou senha inválida 🛹'})
      }
      if (error.code === 'auth/not-register' || error.code === 'auth/user-not-found') {
        return showToast({type: 'error', title: 'Usuário não encontrado 🛹'})
      }
      return showToast({type: 'error', title: 'Não deu pra completar esse rolê, tente novamente 🛹'})
    })
}

function signOut() {
  auth().signOut()
}

export { signUp, signIn, signOut }

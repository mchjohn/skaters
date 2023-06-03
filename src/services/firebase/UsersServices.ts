import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

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
      if (user) {
        saveUserOnFirestore({
          id: user.uid,
          name: userData.name,
          email: userData.email
        })
      }

      onClose()
    })
    .catch(error => {
      if (error.code === 'auth/email-already-exist') {
        console.log('E-mail already exists')
      }
      if (error.code === 'auth/invalid-email') {
        console.log('E-mail invalid')
      }
    })
}

function signIn(email: string, password: string, onClose: () => void) {
  auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      onClose()
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        console.log('Password invalid')
      }
      if (error.code === 'auth/not-register') {
        console.log('User not found')
      }
    })
}

function signOut() {
  auth().signOut()
}

export { signUp, signIn, signOut }

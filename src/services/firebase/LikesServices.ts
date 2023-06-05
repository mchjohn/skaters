import firestore from '@react-native-firebase/firestore'

async function getDocRef(collection: string, id: string) {
  const docRef = firestore().collection(collection).doc(id)

  return docRef
}

async function likeSkater(skaterId: string, userId: string, value: 1 | -1, handleToggleFavorite: () => void) {
  const docRefUser = await getDocRef('users', userId)
  const docRefSkater = await getDocRef('skaters', skaterId)

  // Atualiza a quantidade de likes no skatista
  docRefSkater.update({
    likes: firestore.FieldValue.increment(value)
  }).then(() => handleToggleFavorite())

  // Salva o ID do skater no usuário
  if (value === 1) {
    docRefUser.update({
      skatersLikes: firestore.FieldValue.arrayUnion(skaterId)
    })
  }
  if (value === -1) {
    docRefUser.update({
      skatersLikes: firestore.FieldValue.arrayRemove(skaterId)
    })
  }
}

export { likeSkater }

import firestore from '@react-native-firebase/firestore'

import SkatersMapper from '../mappers/SkatersMapper'
import { ISkater, RegisterSkater } from '../../interfaces/skater'

async function getDocumentReference(collection: string, id: string) {
  const documentRef = firestore().collection(collection).doc(id)

  return documentRef.get()
}

async function getSkatersOrderedBy() {
  const query = firestore().collection('skaters').where('approved', '==', true).orderBy('likes', 'desc').limit(6)

  return query
}

async function getSkaters(lastItemId: string | null) {
  let query = await getSkatersOrderedBy()

  if (lastItemId) {
    const lastItemDoc = await getDocumentReference('skaters', lastItemId)

    if (lastItemDoc.exists) {
      query = query.startAfter(lastItemDoc)
    } else {
      console.log(`Document with ID ${lastItemId} does not exist.`)
    }
  }

  const snapshot = await query.get()
  const skaters: ISkater[] = []

  snapshot.docs.forEach(doc => {
    const skater = SkatersMapper.toDomain(doc.id, doc.data() as ISkater)
    skaters.push(skater)
  })

  return skaters
}

async function getSkaterById(id: string) {
  const docSnapshot = await getDocumentReference('skaters', id)

  if (docSnapshot.exists) {
    const skater = docSnapshot.data()

    return skater as ISkater
  }
}

// TODO: Refatorar para deixar dinâmico
async function updateUser(userId: string, skaterId: string) {
  const collectionReference = firestore().collection('users').doc(userId)

  collectionReference.update({
    createdSkaters: firestore.FieldValue.arrayUnion(skaterId)
  })
}

async function registerSkater(userId: string, data: RegisterSkater) {
  const skater = SkatersMapper.toDomainRegister(data)

  const collectionReference = firestore().collection('skaters')

  const response = await collectionReference.add(skater)

  const skaterId = (await response.get()).id

  updateUser(userId, skaterId)
}

export { getSkaters, getSkaterById, registerSkater }

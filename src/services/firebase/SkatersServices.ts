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

async function registerSkater(data: RegisterSkater) {
  const skater = SkatersMapper.toDomainRegister(data)

  const collectionReference = firestore().collection('skaters')

  collectionReference.add(skater)
}

export { getSkaters, getSkaterById, registerSkater }

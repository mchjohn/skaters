import firestore from '@react-native-firebase/firestore'

import { ISkater } from '../../interfaces/skater'
import SkatersMapper from '../mappers/SkatersMapper'

async function getSnapshot(collection: string) {
  return firestore().collection(collection).get()
}

async function getDocRef(collection: string, id: string) {
  const skaterDocRef = firestore().collection(collection).doc(id)

  return skaterDocRef.get()
}

async function getSkaters() {
  const skatersSnapshot = await getSnapshot('skaters')

  return skatersSnapshot.docs.map(doc =>
    SkatersMapper.toDomain(doc.id, doc.data() as ISkater)
  )
}

async function getSkaterById(id: string) {
  const docSnapshot = await getDocRef('skaters', id)

  if (docSnapshot.exists) {
    const skater = docSnapshot.data()

    return skater as ISkater
  }
}

export { getSkaters, getSkaterById }

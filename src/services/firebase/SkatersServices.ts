import firestore from '@react-native-firebase/firestore'

import { ISkater } from '../../interfaces/skater'
import SkatersMapper from '../mappers/SkatersMapper'

async function getDocRef(collection: string, id: string) {
  const skaterDocRef = firestore().collection(collection).doc(id)

  return skaterDocRef.get()
}

async function getSkaters(lastItemId: string | null, orderBy: string, searchTerm: string) {
  let query = firestore()
    .collection('skaters')
    .limit(5)

  if (searchTerm) {
    query = query.where('name', 'array-contains', searchTerm)
  } else {
    query = query.orderBy(orderBy)
  }

  if (lastItemId !== undefined && lastItemId !== null) {
    const lastItemDoc = await firestore().collection('skaters').doc(lastItemId).get()

    if (lastItemDoc.exists) {
      query = query.startAfter(lastItemDoc)
    } else {
      console.log(`Document with ID ${lastItemId} does not exist.`)
    }
  }

  const snapshot = await query.get()
  const skaters: ISkater[] = []

  snapshot.docs.map(doc => {
    const skater = SkatersMapper.toDomain(doc.id, doc.data() as ISkater)
    skaters.push(skater)
  })

  return skaters
}

async function getSkaterById(id: string) {
  const docSnapshot = await getDocRef('skaters', id)

  if (docSnapshot.exists) {
    const skater = docSnapshot.data()

    return skater as ISkater
  }
}

export { getSkaters, getSkaterById }

import { collection, doc } from 'firebase/firestore'
import { db } from './initFirebase.js'

import { PluginVue3, PluginFirestore, Magnetar, logger } from 'magnetar'

function generateRandomId() {
  return doc(collection(db, 'random')).id
}
const remote = PluginFirestore.CreatePlugin({ db })
const cache = PluginVue3.CreatePlugin({ generateRandomId })

export const magnetar = Magnetar({
  stores: { cache, remote },
  executionOrder: {
    read: ['cache', 'remote'],
    write: ['cache', 'remote'],
    delete: ['cache', 'remote']
  },
  on: { success: logger } // disable this on production builds
})
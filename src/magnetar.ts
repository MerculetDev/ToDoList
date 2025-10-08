import { Magnetar } from '@magnetarjs/core'
import { CreatePlugin as PluginFirestore } from '@magnetarjs/plugin-firestore'
import { CreatePlugin as PluginVue3 } from '@magnetarjs/plugin-vue3'
import { db } from './initFirebase'

const firestorePlugin = PluginFirestore({
    db,
}) 

const vuePlugin = PluginVue3({generateRandomId: () => Math.random().toString(36).slice(2),})

export const magnetar = Magnetar({
  stores: { 
    cache: vuePlugin,
    firestore: firestorePlugin,
    },
  executionOrder: {
    fetch: ['cache', 'firestore'], 
    insert: ['firestore', 'cache'],
    delete: ['firestore', 'cache'],
    replace: ['firestore', 'cache'],
    merge: ['firestore', 'cache'],
  },
})
<template>
  <div class="p-4 max-w-md mx-auto">
    <h2>Firestore データ一覧</h2>

    <ul>
      <li v-for="item in messages" :key="item.id" class="border-b py-2">
        {{ item.text }}
      </li>
    </ul>

    <p v-if="messages.length === 0">データがありません。</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { db } from '../initFirebase'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

type Message = {
  id: string
  text: string
  createdAt?: any
}

const messages = ref<Message[]>([])

onMounted(() => {
  // Firestoreのmessagesコレクションを監視
  const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'))

  onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as Message[]
  })
})
</script>

<style scoped>
h2 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
</style>

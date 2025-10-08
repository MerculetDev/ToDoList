<script setup lang="ts">
import { ref } from 'vue'
import { db } from '../initFirebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// フォームの入力値
const message = ref<string>('')
const status = ref<string>('')

// データを Firestore に追加
const addData = async () => {
  if (!message.value) return
  try {
    await addDoc(collection(db, 'messages'), {
      text: message.value,
      createdAt: serverTimestamp(),
    })
    status.value = 'データを追加しました！'
    message.value = ''
  } catch (e) {
    console.error(e)
    status.value = 'エラーが発生しました'
  }
}


</script>

<template>
  <form @submit.prevent="addData">
      <input
        v-model="message"
        type="text"
        placeholder="メッセージを入力"
        class="border p-2 w-full mb-2"
      />
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        追加
      </button>
    </form>
</template>

<style scoped>

</style>

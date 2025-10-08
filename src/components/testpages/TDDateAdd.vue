<script setup lang="ts">
import { ref } from 'vue'
import { todos } from '@/models/todos'

const newTodo = ref<string>('')

const addTodo = async () => {
  if (!newTodo.value.trim()) return
  await todos.insert({
    title: newTodo.value,
    createdAt: new Date(),
  })
  newTodo.value = ''
  console.log(newTodo.value)
}
</script>

<template>
  <form @submit.prevent="addTodo">
      <input
        v-model="newTodo"
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

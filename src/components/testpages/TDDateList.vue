<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { todos } from '@/models/todos'

onMounted(async () => {
  const test = await todos.fetch()
  console.log(test)
})

const todoList = computed(() => Array.from(todos.data.values()))

</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <h2>Firestore データ一覧</h2>    

    <ul>
      <li v-for="(todo, index) in todoList" :key="index" class="border-b py-2">
        {{ todo.title }}
      </li>
    </ul>

    <p v-if="todoList.length === 0">データがありません。</p>
  </div>
</template>


<style scoped>
h2 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
</style>

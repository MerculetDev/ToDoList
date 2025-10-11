<script setup lang="ts">
import { onMounted } from "vue";

interface ToDoItem {
  text: string;
  completed: boolean;
  src: string;
}
const model = withDefaults(defineProps<ToDoItem>(), {});

const addItems = () => {};

onMounted(() => {
  console.log(model.src);
});
</script>

<template>
  <div class="_todo_list">
    <button @click="addItems">ボタン</button>
    <div v-for="item in 5" :key="item" class="_todo_item">
      <input type="checkbox" id="todo1" name="todo1" value="todo1" />
      <input
        type="text"
        id="todo1_text"
        name="todo1_text"
        placeholder="タスクを入力"
      />
      <img :src="src" alt="ゴミ箱アイコン" />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>

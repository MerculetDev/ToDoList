<script setup lang="ts">
import { onMounted } from "vue";

interface ToDoItem {
  text: string;
  completed: boolean;
}
const model = defineModel<ToDoItem[]>({ default: [] });

const props = withDefaults(
  defineProps<{
    trashSrc?: string;
  }>(),
  {
    trashSrc: "/images/trash.svg",
  }
);

//新しいアイテムを作成する関数
function newItem(): ToDoItem {
  return { text: "", completed: false };
}

onMounted(() => {
  // 初回表示時：空なら1行だけ作る
  if (model.value.length === 0) {
    model.value.push(newItem());
  }
});

//リスト追加の関数
function addItem() {
  model.value.push(newItem());
}
//リスト削除の関数
function removeItem(index: number) {
  model.value.splice(index, 1);
}
</script>

<template>
  <div class="_todo_list">
    <button type="button" @click="addItem">ボタン</button>
    <div v-for="(item, index) in model" :key="index" class="_todo_item">
      <input
        type="checkbox"
        v-model="item.completed"
        :id="`todo-${index}`"
        :name="`todo-${index}`"
      />
      <input
        type="text"
        v-model="item.text"
        :id="`todo-${index}_text`"
        :name="`todo-${index}_text`"
        placeholder="タスクを入力"
      />
      <button @click="removeItem(index)">
        <img :src="props.trashSrc" alt="ゴミ箱アイコン" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="sass"></style>

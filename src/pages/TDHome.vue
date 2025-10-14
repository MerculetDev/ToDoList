<script setup lang="ts">
import { ref } from "vue";
import TDMainMark from "@/components/TDMainMark/TDMainMark.vue";
import TDToDoList from "@/components/TDToDoList/TDToDoList.vue";

// ToDoList.vueからのToDoアイテムの型定義
type ToDoItem = {
  text: string;
  completed: boolean;
};

// ToDoList.vueからのToDoリストのデータを保持するref
const toDoList = ref<ToDoItem[]>([]);

const addToDoList = () => {
  toDoList.value.push({
    text: `新人研修タスク${toDoList.value.length + 1}`,
    completed: false,
  });
};
import TDTrashButton from "@/components/TDTrashButton/TDTrashButton.vue";
</script>

<template>
  <h1>このページはTDHome.vueです。</h1>
  <button @click="$router.push('/login')">Logoutする</button>
  <TDMainMark src="images/TDMainMark.svg" />
  <TDTrashButton
    normalIconSrc="/images/TDOffTrashButton.svg"
    deleteIconSrc="/images/TDOnTrashButton.svg"
  />
  <button @click="addToDoList">ToDoList追加</button>
  <div class="_todo_list_container">
    <TDToDoList
      trashSrc="images/TDToDoListIcon.svg"
      checkedSrc="images/TDToDoListCheckedIcon.svg"
      uncheckedSrc="images/TDToDoListUncheckedIcon.svg"
      v-model="toDoList"
    />
  </div>
</template>

<style scoped lang="sass">
._todo_list_container
  width: calc(100% - 24px) //24px分の余白を取る
  margin: 4px auto // 中央寄せ
</style>

<script setup lang="ts">
import { ref } from "vue";
import TDMainMark from "@/components/TDMainMark/TDMainMark.vue";
import TDToDoList from "@/components/TDToDoList/TDToDoList.vue";
import TDAddButton from "@/components/TDAddButton/TDAddButton.vue";

// ToDoList.vueからのToDoアイテムの型定義
type ToDoItem = {
  text: string;
  completed: boolean;
};

// ToDoList.vueからのToDoリストのデータを保持するref
const toDoList = ref<ToDoItem[]>([]);

const deleteMode = ref(false);

const addToDoList = () => {
  toDoList.value.push({
    text: "",
    completed: false,
  });
};
import TDTrashButton from "@/components/TDTrashButton/TDTrashButton.vue";
</script>

<template>
  <div class="_header">
    <div class="_header_icon">
      <TDMainMark src="images/TDMainMark.svg" />
    </div>
    <TDTrashButton
      normalIconSrc="/images/TDOffTrashButton.svg"
      deleteIconSrc="/images/TDOnTrashButton.svg"
      @click="deleteMode = !deleteMode"
    />
  </div>
  <div class="_todo_list_container">
    <TDToDoList
      trashSrc="images/TDToDoListIcon.svg"
      checkedSrc="images/TDToDoListCheckedIcon.svg"
      uncheckedSrc="images/TDToDoListUncheckedIcon.svg"
      v-model="toDoList"
      :deleteMode="deleteMode"
    />
  </div>
  <TDAddButton
    src="images/TDAddButton.svg"
    :deleteMode="deleteMode"
    @click="addToDoList"
  />
  <button @click="$router.push('/login')">Logoutする</button>
</template>

<style scoped lang="sass">
body
  margin: 0
  padding: 0
._header
  display: grid
  place-items: center
  justify-content: space-between
  grid-template-columns: 1fr 1fr
  margin: 48px 24px 24px 16px
._header_icon
  height: 54px
  width: 54px
  display: grid
  justify-self: start
  overflow: hidden
  :is(img, svg)
    width: 100%
    height: 100%
    object-fit: contain
    display: block
._todo_list_container
  width: calc(100% - 48px) //48px分の余白を取る
  margin: 4px auto // 中央寄せ
</style>

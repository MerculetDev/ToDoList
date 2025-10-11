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
</script>

<template>
  <h1>このページはTDHome.vueです。</h1>
  <button @click="$router.push('/login')">Logoutする</button>
  <TDMainMark src="images/TDMainMark.svg" />
  <TDToDoList trashSrc="images/TDToDoListIcon.svg" v-model="toDoList" />
</template>

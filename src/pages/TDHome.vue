<script setup lang="ts">
import TDMainMark from "@/components/TDMainMark/TDMainMark.vue";
import TDToDoList from "@/components/TDToDoList/TDToDoList.vue";
</script>

<template>
  <h1>このページはTDHome.vueです。</h1>
  <button @click="$router.push('/login')">Logoutする</button>
  <TDMainMark src="images/TDMainMark.svg" />
  <TDToDoList src="images/TDToDoListIcon.svg" />
</template>

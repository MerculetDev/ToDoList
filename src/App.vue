<script setup lang="ts">
import TDDateAdd from './components/TDDateAdd.vue'
import TDDateList from './components/TDDateList.vue'
</script>

<template>
  <TDDateAdd />
  <TDDateList />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

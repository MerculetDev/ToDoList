<script setup lang="ts">
import TDTrashButton from "@/components/TDTrashButton/TDTrashButton.vue";
</script>

<template>
  <h1>このページはTDHome.vueです。</h1>
  <button @click="$router.push('/login')">Logoutする</button>
  <TDTrashButton
    normalIconSrc="/images/TDOffTrashButton.svg"
    deleteIconSrc="/images/TDOnTrashButton.svg"
  />
</template>

<style scoped lang="sass"></style>

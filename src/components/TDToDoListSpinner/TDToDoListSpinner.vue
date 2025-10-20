<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    loading?: boolean;
  }>(),
  {
    src: "/images/TDToDoListSpinner.svg",
  }
);
</script>

<template>
  <div v-if="loading" class="_loading_spinner">
    <img :src="src" alt="読み込み中のスピナー" class="_spinner_image" />
  </div>
</template>

<style scoped lang="sass">
._spinner_image
  width: 100px
  height: 100px
._loading_spinner
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #FFFFFF
  opacity: 0.8
  z-index: 10
  display: grid
  place-content: center
</style>

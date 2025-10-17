<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
  }>(),
  {
    src: "/images/TDToDoListSpinner.svg",
  }
);
</script>

<template>
  <img :src="src" alt="読み込み中のスピナー" class="_spinner" />
</template>

<style scoped lang="sass">
._spinner
  width: 200px
  height: 200px
</style>

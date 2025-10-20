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
  <img :src="src" alt="読み込み中のスピナー" class="_spinner_image" />
</template>

<style scoped lang="sass">
._spinner_image
  width: 100px
  height: 100px
</style>

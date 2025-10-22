<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string;
    height?: string;
    width?: string;
  }>(),
  {
    src: "/images/TDMainMark.svg",
  }
);
</script>

<template>
  <img :src="src" alt="メインロゴ" class="_main_logo" />
</template>

<style scoped lang="sass">
._main_logo
  width: v-bind('props.width')
  height: v-bind('props.height')
</style>

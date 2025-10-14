<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
  }>(),
  {
    src: "/images/TDMainMark.svg",
  }
);
</script>

<template>
  <img :src="src" alt="メインロゴ" />
</template>

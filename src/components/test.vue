<script setup lang="ts">
const props=withDefaults(
defineProps<{
test?: string,
}>(),
{
test: "ボタン"
}
)
</script>

<template>
  <div></div>
</template>

<style scoped lang="sass">

@media screen and (max-width: 768px)
</style>
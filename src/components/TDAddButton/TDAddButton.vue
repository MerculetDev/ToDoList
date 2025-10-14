<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: string;
    deleteMode?: boolean;
  }>(),
  {
    src: "/images/TDAddButton.svg",
    deleteMode: false,
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div>
    <img
      :src="src"
      alt="追加ボタン"
      class="_add_button"
      @click="emit('click')"
      v-if="deleteMode"
    />
  </div>
</template>

<style scoped lang="sass">
._add_button
  display: grid
  place-items: center
  justify-content: center
  margin: 24px 10px
</style>

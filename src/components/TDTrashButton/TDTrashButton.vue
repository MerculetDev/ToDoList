<script setup lang="ts">
// Propsの型定義
interface TDTrashButtonProps {
  normalIconSrc: string;
  deleteIconSrc: string;
}

// Emitの型定義
interface TDTrashButtonEmit {
  (e: "toggle", value: boolean): void;
}

const props = withDefaults(defineProps<TDTrashButtonProps>(), {});
const emit = defineEmits<TDTrashButtonEmit>();

// 削除モードの状態を管理するモデル
const deletemode = defineModel<boolean>("deletemode", { default: false });

const onToggle = () => {
  deletemode.value = !deletemode.value;
  emit("toggle", deletemode.value);
};
</script>

<template>
  <button
    type="button"
    @click="onToggle"
    class="_trash_button"
    :class="{ _delete_icon: deletemode }"
  >
    <img
      :src="deletemode ? props.deleteIconSrc : props.normalIconSrc"
      alt="ゴミ箱のアイコン"
    />
  </button>
</template>

<style scoped lang="sass">
._trash_button
  display: grid
  justify-self: end
  background: white
  padding: 3px
  height: 25px
  width: 25px
button
  margin: 0
  padding: 0
  background: none
  border: none
  border-radius: 0
  outline: none
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  cursor: pointer
img
  max-width: 100%
  height: auto
  vertical-align: middle
  font-style: italic
  background-repeat: no-repeat
  background-size: cover
  shape-margin: 0.75rem
  border: none
._trash_icon
  padding: 3px


._delete_icon
  background: #FF3B30
  stroke-width: 2.5px
  border-radius: 999px
  opacity: 0.5
</style>

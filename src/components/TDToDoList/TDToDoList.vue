<script setup lang="ts">
// 双方向にバインドするモデルの型定義
interface ToDoItem {
  id: string;
  text: string;
  completed: boolean;
}
const model = defineModel<ToDoItem[]>({ default: [] });

//親から受け取るPropsの定義
const props = withDefaults(
  defineProps<{
    trashSrc?: string;
    checkedSrc: string;
    uncheckedSrc: string;
    deleteMode?: boolean;
  }>(),
  {
    trashSrc: "/images/trash.svg",
    deleteMode: false,
  }
);

//親へイベントを発火させる
const emit = defineEmits<{
  (e: "delete", id: string): void;
  (e: "toggle", id: string, completed: boolean): void;
  (e: "focus", id: string): void;
  (e: "blur", id: string): void;
}>();
</script>

<template>
  <div v-for="(item, index) in model" :key="index" class="_todo_items">
    <img
      :src="item.completed ? props.checkedSrc : props.uncheckedSrc"
      alt="チェックボタン"
      @click="emit('toggle', item.id, item.completed)"
      class="_check_button"
    />
    <input
      type="text"
      v-model="item.text"
      :id="`todo-${index}_text`"
      :name="`todo-${index}_text`"
      :placeholder="`新人研修タスク${index + 1}`"
      class="_todo_text_input"
      :class="{ 'is-completed': item.completed }"
      :readonly="item.completed"
      @focus="emit('focus', item.id)"
      @blur="emit('blur', item.id)"
    />
    <button @click="emit('delete', item.id)">
      <img
        :src="props.trashSrc"
        alt="ゴミ箱アイコン"
        class="_trash_icon"
        v-if="props.deleteMode"
      />
    </button>
  </div>
</template>

<style scoped lang="sass">
body
  margin: 0
  padding: 0
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
._todo_items
  display: grid
  align-items: center
  justify-content: center
  grid-template-columns: max-content 1fr max-content
  gap: 8px
  width: 100%
  margin: 8px 0
._todo_text_input
  width:100%
  height: 40px
  font-family: 'Noto Sans JP', sans-serif
  display: grid
  align-items: center
  justify-content: center
  border-radius: 3px
  border: 1px solid #BBB
  background: #FFF
  color: #666666
  font-family: "Noto Sans JP"
  font-size: 14px
  font-style: normal
  font-weight: 400
  line-height: normal
  letter-spacing: 0.7px
  padding: 10px 12px
  box-sizing: border-box
  &.is-completed
    color: #BBBBBB
._trash_icon
  width: 18px
  height: 20px
</style>

<script setup lang="ts">
import { onMounted } from "vue";

interface ToDoItem {
  text: string;
  completed: boolean;
}
const model = defineModel<ToDoItem[]>({ default: [] });

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

//新しいアイテムを作成する関数
function newItem(): ToDoItem {
  return { text: "", completed: false };
}

onMounted(() => {
  // 初回表示時：空なら1行だけ作る
  if (model.value.length === 0) {
    model.value.push(newItem());
  }
});

//リスト削除の関数
function removeItem(index: number) {
  model.value.splice(index, 1);
}

//チェックボックスの表示切替
function toggle(index: number) {
  const row = model.value[index]; //該当行を取得
  if (!row) {
    return;
  }
  row.completed = !row.completed;
}
</script>

<template>
  <div v-for="(item, index) in model" :key="index" class="_todo_items">
    <img
      :src="item.completed ? props.checkedSrc : props.uncheckedSrc"
      alt="チェックボタン"
      @click="toggle(index)"
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
    />
    <button @click="removeItem(index)">
      <img
        :src="props.trashSrc"
        alt="ゴミ箱アイコン"
        class="_trash_icon"
        :class="{ 'is-hidden': props.deleteMode }"
      />
    </button>
  </div>
</template>

<style scoped lang="sass">
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
  &.is-hidden
    display: none
</style>

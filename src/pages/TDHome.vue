<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from "vue";
import TDMainMark from "@/components/TDMainMark/TDMainMark.vue";
import TDToDoList from "@/components/TDToDoList/TDToDoList.vue";
import TDAddButton from "@/components/TDAddButton/TDAddButton.vue";
import TDTrashButton from "@/components/TDTrashButton/TDTrashButton.vue";
import TDToDoListSpinner from "@/components/TDToDoListSpinner/TDToDoListSpinner.vue";
import { auth } from "@/initFirebase";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import {
  TDLists,
  addTodo,
  toggleTodo,
  deleteTodo,
  updateText,
} from "@/models/TDLists.ts";

// ToDoList.vueからのToDoアイテムの型定義
type ToDoItem = {
  id: string;
  text: string;
  completed: boolean;
};

const model = defineModel<ToDoItem[]>({ default: [] });
const deleteMode = ref<boolean>(false);
const loading = ref<boolean>(false);
const firstReady = ref<boolean>(false);

// streamで取得したデータをリアクティブに扱う
onMounted(async () => {
  await TDLists.stream();
  await nextTick();
});

//コンポーネントが閉じた際、streamを閉じる
onUnmounted(() => {
  TDLists.closeStream();
});

const raw = computed(() =>
  Array.from(TDLists.data.values()).map((x) => ({
    id: x.id,
    text: x.text,
    completed: x.completed,
  }))
);

// const items = computed<ToDoItem[]>(() => {
//   const d = raw.value;
//   const arr = !d
//     ? []
//     : Array.isArray(d)
//       ? d
//       : d instanceof Map
//         ? Array.from(d.values())
//         : typeof d === "object"
//           ? Object.values(d)
//           : [];
//   return arr.map((x: any) => ({
//     id: String(x.id),
//     text: String(x.text ?? ""),
//     completed: !!x.completed,
//   }));
// });
const text = ref("");
const addToDoList = async () => {
  await addTodo({
    id: "",
    UID: auth.currentUser?.uid,
    text: "",
    completed: false,
    createdAt: "",
    updatedAt: "",
  });
  text.value = "";
};

watch(
  raw,
  (v, oldV) => {
    model.value = v;
    // ひとつ前の状態がundefinedではなくなるまで待ってから、新規追加を行う
    if (oldV === undefined) return;
    if (model.value.length === 0) addToDoList();
  },
  { immediate: true, flush: "post" }
);

const toggleCompleted = async (id: string, completed: boolean) => {
  await toggleTodo(id, completed);
};

const removeItem = async (id: string) => {
  await deleteTodo(id);
};

const focusSnap = ref(new Map<string, string>());

const onFocus = (id: string) => {
  //idが一致する配列要素を取得　itemと定義
  const item = model.value.find((i) => i.id === id);

  //itemsが存在する場合、idが一致する配列要素をfocusSnapに保存
  if (item) focusSnap.value.set(id, item.text ?? "");
};

const onBlur = async (id: string) => {
  //idが一致する配列要素を取得　itemと定義
  const item = model.value.find((i) => i.id === id);
  if (!item) return;

  const before = focusSnap.value.get(id) ?? "";
  const after = item.text ?? "";
  focusSnap.value.delete(id);

  if (before !== after) {
    loading.value = true;
    await updateText(id, after);
    loading.value = false;
  }
};

console.log("現在のログイン状態:", auth.currentUser);

//検証用のログアウトボタン
const router = useRouter();
const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    router.push("/login");
    console.log("ログアウトしました");
  } catch (e: any) {
    console.error("ログアウトに失敗しました:", e);
  }
};
</script>

<template>
  <div class="_header">
    <div class="_header_icon">
      <TDMainMark src="images/TDMainMark.svg" />
    </div>
    <TDTrashButton
      normalIconSrc="/images/TDOffTrashButton.svg"
      deleteIconSrc="/images/TDOnTrashButton.svg"
      @click="deleteMode = !deleteMode"
    />
  </div>
  <div class="_todo_list_container">
    <TDToDoList
      trashSrc="images/TDToDoListIcon.svg"
      checkedSrc="images/TDToDoListCheckedIcon.svg"
      uncheckedSrc="images/TDToDoListUncheckedIcon.svg"
      v-model="model"
      :deleteMode="deleteMode"
      @delete="removeItem"
      @toggle="toggleCompleted"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
  <TDAddButton
    src="images/TDAddButton.svg"
    :deleteMode="deleteMode"
    @click="addToDoList"
  />
  <button @click="logout">Logoutする</button>

  <!-- ローディングスピナーの表示 -->
  <TDToDoListSpinner
    src="images/TDToDoListLoadingSpinner.svg"
    :loading="loading"
  />
</template>

<style scoped lang="sass">
body
  margin: 0
  padding: 0
._header
  display: grid
  place-items: center
  justify-content: space-between
  grid-template-columns: 1fr 1fr
  margin: 48px 24px 24px 16px
._header_icon
  height: 54px
  width: 54px
  display: grid
  justify-self: start
  overflow: hidden
  :is(img, svg)
    width: 100%
    height: 100%
    object-fit: contain
    display: block
._todo_list_container
  width: calc(100% - 48px) //48px分の余白を取る
  margin: 4px auto // 中央寄せ
</style>

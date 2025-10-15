<script setup lang="ts">
import { ref } from "vue";
import TDErrorMessage from "@/components/TDErrorMessage/TDErrorMessage.vue";
import TDToDoList from "@/components/TDToDoList/TDToDoList.vue";
import TDTrashButton from "@/components/TDTrashButton/TDTrashButton.vue";
import TDAddButton from "@/components/TDAddButton/TDAddButton.vue";
import TDInput from "@/components/TDInput/TDInput.vue";

const email = ref("");
const pass = ref("");
const error = ref("");
const deleteMode = ref(false);
const password = ref("");

const visible = ref(false);
const login = () => {
  if (!email.value || !pass.value)
    return (error.value = "ログインIDまたはパスワードに誤りがあります");
  if (email.value !== "" || pass.value !== "") error.value = "";
  return console.log("seikou");
};

const addToDoList = () => {
  toDoList.value.push({ text: "", completed: false });
};
console.log("test");

type ToDoItem = {
  text: string;
  completed: boolean;
  deleteMode?: boolean;
};

// ToDoList.vueからのToDoリストのデータを保持するref
const toDoList = ref<ToDoItem[]>([]);

const onClick = () => {
  if (!email.value || !password.value)
    return (error.value = "ログインIDまたはパスワードに誤りがあります");
  else return;
  console.log("ログイン成功");
};
</script>

<template>
  <div>
    <h1>このページはTDTestComponent.vueです。</h1>
    <button @click="$router.push('/login')">Logoutする</button>
    <button @click="login">login</button>
    <TDTrashButton
      normalIconSrc="/images/TDOffTrashButton.svg"
      deleteIconSrc="/images/TDOnTrashButton.svg"
      @click="deleteMode = !deleteMode"
    />
    <TDErrorMessage :errorMessage="error" />
    <input type="text" v-model="email" />
    <input type="text" v-model="pass" />
    <button @click="addToDoList">ToDoList追加</button>
    <button @click="deleteMode = !deleteMode">削除モード切替</button>
    <div class="_todo_list_container">
      <TDToDoList
        trashSrc="images/TDToDoListIcon.svg"
        checkedSrc="images/TDToDoListCheckedIcon.svg"
        uncheckedSrc="images/TDToDoListUncheckedIcon.svg"
        v-model="toDoList"
        :deleteMode="deleteMode"
      />
    </div>
    <TDAddButton
      src="images/TDAddButton.svg"
      :deleteMode="deleteMode"
      @click="addToDoList"
    />
    <div class="_input_container">
      <TDInput v-model="email" type="mail" />
      <TDInput
        v-model="password"
        v-model:visible="visible"
        type="password"
        openedEyeSrc="/images/TDInputOpenedEye.svg"
        closedEyeSrc="/images/TDInputClosedEye.svg"
      />
    </div>
    <div class="_login_button_container">
      <TDLoginButton
        :buttonText="'ログイン'"
        src="/images/TDLoginButton.svg"
        @click="onClick"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
._todo_list_container
  width: calc(100% - 24px) //24px分の余白を取る
  margin: 4px auto // 中央寄せ
</style>

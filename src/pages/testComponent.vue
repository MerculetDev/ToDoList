<script setup lang="ts">
import { ref } from "vue";
import TDErrorMessage from "@/components/TDErrorMessage/TDErrorMessage.vue";

withDefaults(
  defineProps<{
    test?: string;
  }>(),
  {
    test: "ボタン",
  }
);
const email = ref("");
const pass = ref("");
const error = ref("");
const login = () => {
  if (!email.value) return (error.value = "メールアドレスを入力してください");
  if (!pass.value) return (error.value = "パスワードを入力してください");
  if (email.value !== "" || pass.value !== "") error.value = "";
  return console.log("seikou");
};
console.log("test");
</script>

<template>
  <div>
    <h1>このページはTDTestComponent.vueです。</h1>
    <button @click="$router.push('/login')">Logoutする</button>
    <button @click="login">login</button>
    <div>{{ error }}</div>
    <TDErrorMessage :errorMessage="error" />
    <input type="text" v-model="email" />
    <input type="text" v-model="pass" />
  </div>
</template>

<style scoped lang="sass">

@media screen and (max-width: 768px)
</style>

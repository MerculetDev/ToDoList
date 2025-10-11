<script setup lang="ts">
import { ref } from "vue";
import TDErrorMessage from "@/components/TDErrorMessage/TDErrorMessage.vue";
import TDTrashButton from "@/components/TDTrashButton/TDTrashButton.vue";

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
  if (!email.value || !pass.value)
    return (error.value = "ログインIDまたはパスワードに誤りがあります");
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
    <TDErrorMessage :errorMessage="error" />
    <input type="text" v-model="email" />
    <input type="text" v-model="pass" />
    <TDTrashButton
      normalIconSrc="/images/TDOffTrashButton.svg"
      deleteIconSrc="/images/TDOnTrashButton.svg"
    />
  </div>
</template>

<style scoped lang="sass">

@media screen and (max-width: 768px)
</style>

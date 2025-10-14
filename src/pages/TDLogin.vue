<script setup lang="ts">
import { ref } from "vue";
import TDMainMark from "@/components/TDMainMark/TDMainMark.vue";
import TDInput from "@/components/TDInput/TDInput.vue";
import TDLoginButton from "@/components/TDLoginButton/TDLoginButton.vue";
import TDErrorMessage from "@/components/TDErrorMessage/TDErrorMessage.vue";

const email = ref("");
const password = ref("");
const error = ref("");
const visible = ref(false);
console.log(visible);

const onClick = () => {
  if (!email.value || !password.value)
    return (error.value = "ログインIDまたはパスワードに誤りがあります");
  else return;
  ((error.value = ""), console.log("ログイン成功"));
};
</script>

<template>
  <div class="_main_mark_container">
    <TDMainMark src="/images/TDMainMark.svg" />
  </div>
  <div class="_error_message_container">
    <TDErrorMessage :errorMessage="error" />
  </div>
  <div class="_input_container">
    <TDInput v-model="email" type="mail" :error="true" />
    <TDInput
      v-model="password"
      v-model:visible="visible"
      type="password"
      openedEyeSrc="/images/TDInputOpenedEye.svg"
      closedEyeSrc="/images/TDInputClosedEye.svg"
      :error="true"
    />
  </div>
  <div class="_login_button_container">
    <TDLoginButton
      :buttonText="'ログイン'"
      src="/images/TDLoginButton.svg"
      @click="onClick"
    />
  </div>

  // テスト用ボタン
  <button @click="$router.push('/test')">TestPage</button>
  <button @click="$router.push('/home')">Homeに戻る</button>
</template>

<style lang="sass" scoped>
.body
  font-family: 'Noto Sans JP', sans-serif
._main_mark_container
  display: grid
  align-items: center
  justify-content: center
  width: calc(100% - 260px)
  margin: 130px auto 42px auto
._error_message_container
  width: calc(100% - 110px)
  margin: 0 auto
  margin-bottom: 24px
._login_button_container
  width: calc(100% - 60px)
  margin: 0 auto
._input_container
  width: calc(100% - 60px)
  margin: 0 auto 98px auto
</style>

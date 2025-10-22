<script setup lang="ts">
import { ref } from "vue";
import TDMainMark from "@/components/TDMainMark/TDMainMark.vue";
import TDInput from "@/components/TDInput/TDInput.vue";
import TDLoginButton from "@/components/TDLoginButton/TDLoginButton.vue";
import TDErrorMessage from "@/components/TDErrorMessage/TDErrorMessage.vue";
//ログイン機能
import { auth } from "@/initFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const visible = ref(false);
console.log(visible);
//ログイン機能
const router = useRouter();

const login = async (): Promise<void> => {
  error.value = "";
  visible.value = false;
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    if ("credentials" in navigator) {
      try {
        // @ts-ignore  // lib.dom が有効なら不要
        const cred = new PasswordCredential({
          id: email.value,
          password: password.value,
        });
        // @ts-ignore
        await navigator.credentials.store(cred);
      } catch {}
    }
    setTimeout(() => router.push("/home"), 120);
  } catch (e: any) {
    error.value = "ログインIDまたはパスワードに誤りがあります";
  } finally {
  }
};

//User { uid: "...", email: "...", ... } → ログイン中
//null → ログアウト中
console.log("現在のログイン状態:", auth.currentUser);
</script>

<template>
  <div class="_main_mark_container">
    <TDMainMark src="/images/TDMainMark.svg" height="115px" width="115px" />
  </div>
  <div class="_error_message_container">
    <TDErrorMessage :errorMessage="error" :error="!!error" />
  </div>
  <form @submit.prevent="login"></form>
  <div class="_input_container">
    <TDInput v-model="email" type="mail" :error="!!error" />
    <TDInput
      v-model="password"
      v-model:visible="visible"
      type="password"
      openedEyeSrc="/images/TDInputOpenedEye.svg"
      closedEyeSrc="/images/TDInputClosedEye.svg"
      :class="{ 'is-visible': visible }"
      :error="!!error"
    />
  </div>
  <div class="_login_button_container">
    <TDLoginButton
      :buttonText="'ログイン'"
      src="/images/TDLoginButton.svg"
      @click="login"
    />
  </div>

  // テスト用ボタン
  <button @click="$router.push('/test')">TestPage</button>
  <button @click="$router.push('/home')">Homeに戻る</button>
</template>

<style lang="sass" scoped>
.body
  //font-family: 'Noto Sans JP', sans-serif
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

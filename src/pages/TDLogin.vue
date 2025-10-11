<script setup lang="ts">
import { ref } from 'vue';
import TDMainMark from '@/components/TDMainMark/TDMainMark.vue';
import TDInput from '@/components/TDInput/TDInput.vue';
import TDLoginButton from '@/components/TDLoginButton/TDLoginButton.vue';
import TDErrorMessage from '@/components/TDErrorMessage/TDErrorMessage.vue';

const email = ref('');
const password = ref('');
const visible = ref(false); 
console.log(visible);

const onClick = () => {
  console.log('ログインボタンがクリックされました');
};
</script>

<template>
    <h1>このページはTDLogin.vueです。</h1>
    <button @click="$router.push('/test')">TestPage</button>
    <button @click="$router.push('/home')">Homeに戻る</button>
    <TDMainMark src="../public/images/TDMainMark.svg" />
    <div class="_error_message_container">
      <TDErrorMessage errorMessage="ログインIDまたはパスワードに誤りがあります" />
      <TDErrorMessage errorMessage="" />
    </div>
    <TDInput v-model="email" type="mail" :error="true"/>
    <TDInput 
      v-model="password" 
      v-model:visible="visible"
      type="password" 
      openedEyeSrc="../public/images/TDInputOpenedEye.svg"
      closedEyeSrc="../public/images/TDInputClosedEye.svg"
      :error="true"
    />
    <div class="_login_button_container">
      <TDLoginButton 
        :buttonText="'ログイン'" 
        src="../public/images/TDLoginButton.svg"
        @click="onClick"
      />
    </div>
</template>

<style lang="sass" scoped>
h1
  color: blue
._login_button_container
  width: calc(100% - 60px) //60px分の余白を取る
  margin: 0 auto // 中央寄せ
._error_message_container
  width: calc(100% - 110px) //110px分の余白を取る
  margin: 0 auto // 中央寄せ
  margin-bottom: 24px
</style>
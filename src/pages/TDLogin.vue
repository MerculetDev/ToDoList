<script setup lang="ts">
import { ref } from 'vue';
import TDMainMark from '@/components/TDMainMark/TDMainMark.vue';
import TDInput from '@/components/TDInput/TDInput.vue';
import TDLoginButton from '@/components/TDLoginButton/TDLoginButton.vue';

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
    <button @click="$router.push('/home')">Homeに戻る</button>
    <TDMainMark src="../public/images/TDMainMark.svg"/>
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
  display: grid
  /* 左右は可変余白、中央はボタン領域（最小280px〜最大420pxなど好みで） */
  grid-template-columns: minmax(16px, 1fr) minmax(280px, 420px) minmax(16px, 1fr)
  align-items: center
  min-height: 1px
._login_button_container > * 
  grid-column: 2 /* 真ん中のカラムに配置 */
  justify-self: center


</style>
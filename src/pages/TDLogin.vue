<script setup lang="ts">
import { ref } from 'vue';
import TDMainMark from '@/components/TDMainMark/TDMainMark.vue';
import TDInput from '@/components/TDInput/TDInput.vue';

const email = ref('');
const password = ref('');
const visible = ref(false); 

//import openedEye from '@/assets/TDInputOpenedEye.svg'
//import closedEye from '@/assets/TDInputClosedEye.svg'


</script>

<template>
    <h1>このページはTDLogin.vueです。</h1>
    <button @click="$router.push('/home')">Homeに戻る</button>
    <TDMainMark src="../public/images/TDMainMark.svg"/>
    <TDInput v-model="email" type="mail" />
    <TDInput 
      v-model="password" 
      type="password" 
      :visible="visible"
      openedEyeSrc="../public/images/TDInputOpenedEye.svg"
      closedEyeSrc="../public/images/TDInputClosedEye.svg"
      @toggleVisible="visible = !visible"
    />
    
{{ email }}
</template>

<style lang="sass" scoped>
h1
  color: blue
</style>
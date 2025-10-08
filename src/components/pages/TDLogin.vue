<script setup lang="ts">
import TDMainMark from '@/components/TDMainMark/TDMainMark.vue';

</script>

<template>
    <h1>このページはTDLogin.vueです。</h1>
    <button @click="$router.push('/home')">Homeに戻る</button>
    <TDMainMark src="../public/images/TDMainMark.svg"/>
</template>

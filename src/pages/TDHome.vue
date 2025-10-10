<script setup lang="ts">
import TDMainMark from '@/components/TDMainMark/TDMainMark.vue';
</script>

<template>
    <h1>このページはTDHome.vueです。</h1>
    <button @click="$router.push('/login')">Logoutする</button>
    <TDMainMark src="../public/images/TDMainMark.svg"/>
</template>

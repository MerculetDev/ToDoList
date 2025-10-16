<script setup lang="ts">
import { onMounted, onUnmounted, computed } from "vue";
import { TDLists } from "@/models/TDLists";

//コンポーネントが開いた際、streamでリアクティブに更新
onMounted(async () => {
  await TDLists.stream();
});

//コンポーネントが閉じた際、streamを閉じる
onUnmounted(() => {
  TDLists.closeStream();
});

const todos = computed(() => {
  //Firestoreのデータを新しい順に並び替え
  const data = TDLists.orderBy("createdAt", "desc").data;
  // Mapオブジェクトを配列に変換
  if (data instanceof Map) return Array.from(data.values());
  // オブジェクト形式の際、配列に変換
  if (Array.isArray(data)) return data;
  return [];
});
</script>

<template>
  <p>ページ確認用テキスト</p>

  <ul>
    <li v-for="(i, idx) in todos" :key="i.UID ?? idx">
      {{ i.text }} / {{ i.completed ? "✅" : "⬜︎" }} / {{ i.UID }}
    </li>
  </ul>
</template>

<style scoped lang="sass"></style>

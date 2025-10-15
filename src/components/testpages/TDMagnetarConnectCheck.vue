<script setup lang="ts">
import { onMounted, computed } from "vue";
import { TDLists } from "@/models/TDLists";

// 1) fetchがある環境だけ1回呼ぶ（無ければ何もしない）
onMounted(async () => {
  await (TDLists as any).fetch?.();
});

// 2) Magnetarの素のdataをそのまま参照（ref/非ref 両対応に修正）
const raw = computed(() => {
  const r = (TDLists as any).data;
  return r?.value ?? r;
});

// 3) 画面用に“必ず配列化”
const list = computed(() => {
  const d = raw.value;
  if (!d) return [];
  if (Array.isArray(d)) return d;
  // MagnetarがMap形式の際、配列に変換
  // 例）Map { "UID001" => {...}, "UID002" => {...} } → [ {...}, {...} ]
  if (d instanceof Map) return Array.from(d.values());
  // オブジェクト形式の際、配列に変換
  // 例）{ UID001: {...}, UID002: {...} } → [ {...}, {...} ]
  if (typeof d === "object") return Object.values(d);
  return [];
});
</script>

<template>
  <p>TDToDoListUncheckedIcon</p>

  <!-- 生の形を一旦表示（確認用。出たら消してOK） -->
  <pre style="white-space: pre-wrap">{{ raw }}</pre>

  <ul>
    <li v-for="(i, idx) in list" :key="i.UID ?? idx">
      {{ i.text }} / {{ i.completed ? "✅" : "⬜︎" }} / {{ i.UID }}
    </li>
  </ul>
</template>

<style scoped lang="sass"></style>

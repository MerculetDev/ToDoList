import { createRouter, createWebHistory } from "vue-router";
import TDLogin from "@/pages/TDLogin.vue";
import TDHome from "@/pages/TDHome.vue";
import TestComponent from "@/pages/testComponent.vue";
import MagnetarCheck from "@/components/testpages/TDMagnetarConnectCheck.vue";
import { auth } from "@/initFirebase";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login", component: TDLogin },
  {
    path: "/home",
    name: "Home",
    component: TDHome,
    meta: { requiresAuth: true },
  }, //追加：認証が必要
  { path: "/test", name: "Test", component: TestComponent },
  { path: "/magnetarCheck", name: "MagnetarCheck", component: MagnetarCheck },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//ページが切り替わる直前に、毎回実行
router.beforeEach((to) => {
  const isAuthenticated = !!auth.currentUser; // ユーザーがログインしているか確認

  //meta=今回であれば/homeにログインしていないユーザーがアクセスしようとした場合
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: "Login" }; //ログインページにリダイレクト
  }

  if (to.name === "Login" && isAuthenticated) {
    return { name: "Home" }; //ログイン済みならホームへリダイレクト
  }

  return true; //そのまま遷移
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import TDLogin from "@/pages/TDLogin.vue";
import TDHome from "@/pages/TDHome.vue";
import TestComponent from "@/pages/testComponent.vue";
import MagnetarCheck from "@/components/testpages/TDMagnetarConnectCheck.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login", component: TDLogin },
  { path: "/home", name: "Home", component: TDHome },
  { path: "/test", name: "Test", component: TestComponent },
  { path: "/magnetarCheck", name: "MagnetarCheck", component: MagnetarCheck },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

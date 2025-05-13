import { createRouter, createWebHistory } from "vue-router";
import MapView from "./components/MapView.vue";

const routes = [{ path: "/", name: "Map", component: MapView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

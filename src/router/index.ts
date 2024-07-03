import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import { type RouteRecordRaw } from 'vue-router';

const modules: any = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModulesList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModulesList.push(...modList);
});
// 进行正排序
function sortRoute(a: RouteRecordRaw, b: RouteRecordRaw) {
  return (Number(a.meta?.sort) || 0) - (Number(b.meta?.sort) || 0);
}
routeModulesList.sort(sortRoute);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeModulesList
});

export default router;

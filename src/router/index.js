import UserList from "../pages/UserList.vue";
import PetList from "../pages/PetList.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/users", component: UserList },
  { path: "/pets", component: PetList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;

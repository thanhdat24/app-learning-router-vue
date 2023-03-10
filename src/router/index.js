import UserList from "../pages/UserList.vue";
import PetList from "../pages/PetList.vue";
import UserDetail from "../pages/UserDetail.vue";
import NotFound from "../pages/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/users", name: "user-list", component: UserList, alias: "/" },
  {
    path: "/users-detail/:userId",
    name: "user-detail",
    component: UserDetail,
  },

  { path: "/pets", component: PetList },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;

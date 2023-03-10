<template lang="">
  <h1 class="text-4xl font-bold underline text-red-500 text-center my-3">
    User List
  </h1>
  <div
    v-for="(user, index) in userList"
    :key="index"
    class="mb-2 justify-center flex"
  >
    <user-item :user="user"></user-item>
  </div>
</template>
<script>
import UserItem from "../components/UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("users");
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
};
</script>
<style lang=""></style>

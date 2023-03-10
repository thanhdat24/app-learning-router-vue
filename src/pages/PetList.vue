<template lang="">
  <h1 class="text-4xl font-bold underline text-center">Pet List</h1>
  <div class="flex justify-between m-5 grid grid-cols-4 gap-4">
    <div v-for="(pet, index) in petList" :key="index">
      <pet-item :pet="pet"></pet-item>
    </div>
  </div>
</template>
<script>
import PetItem from "../components/PetItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("pets");
export default {
  components: {
    PetItem,
  },
  computed: {
    ...mapState({
      petList: (state) => state.petList,
    }),
  },
};
</script>
<style lang=""></style>

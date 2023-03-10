<template lang="">
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="pet.image" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ pet.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ pet.description }}
      </p>
      <span
        class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
        :class="{
          'dark:bg-blue-900 dark:text-blue-300': pet.type === 'Chó',
          'dark:bg-red-900 dark:text-red-300': pet.type === 'Mèo',
          'dark:bg-green-900 dark:text-green-300 ': pet.type === 'Chuột',
          'dark:bg-yellow-900 dark:text-yellow-300': pet.type === 'Cá',
          'dark:bg-purple-900 dark:text-purple-300': pet.type === 'Chim',
          'ark:bg-pink-900 dark:text-pink-300': pet.type === 'Báo',
        }"
        >{{ pet.type }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pet: {
      type: Object,
    },
  },
};
</script>
<style lang=""></style>

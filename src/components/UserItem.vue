<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ user.name }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>

    <span
      v-for="(type, index) in user.typePets"
      class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
      :class="{
        'dark:bg-blue-900 dark:text-blue-300': type === 'Chó',
        'dark:bg-red-900 dark:text-red-300': type === 'Mèo',
        'dark:bg-green-900 dark:text-green-300 ': type === 'Chuột',
        'dark:bg-yellow-900 dark:text-yellow-300': type === 'Cá',
      }"
      >{{ type }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style></style>

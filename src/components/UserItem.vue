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
    <div class="block mt-5">
      <button
        @click="handleClickDetail"
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Detail
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    handleClickDetail() {
      this.$router.push({
        name: "user-detail",
        params: { userId: this.user.id },
      });
    },
  },
};
</script>

<style></style>

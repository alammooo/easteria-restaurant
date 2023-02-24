<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: ["username"],
  emits: ["navPage"],
  methods: {
    navPage(pagename) {
      this.$emit("navPage", pagename)
    },
  },
}
</script>

<template>
  <header class="bg-sky-50 bg-opacity-50 fixed top-0 w-full z-50">
    <nav class="bg-white px-2 sm:px-4 py-2.5 w-full border-b border-gray-200">
      <div
        class="container flex flex-wrap items-center justify-between mx-auto">
        <a class="flex items-center">
          <span class="self-center text-4xl font-serif whitespace-nowrap"
            >Easteria Eatery</span
          >
        </a>
        <div class="flex md:order-2 items-center gap-5">
          <h1 class="text-2xl">Hi, {{ username }}!</h1>
          <button
            type="button"
            @click.prevent="$emit(`triggerLogout`)"
            class="text-amber-200 text-xl bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm px-5 py-2.5 text-center mr-3 md:mr-0">
            Logout
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-sm bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-white">
            <li>
              <a
                @click="navPage(`dashboardSection`)"
                class="cursor-pointer text-xl block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                @click="navPage(`foodSection`)"
                class="cursor-pointer text-xl block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Foods</a
              >
            </li>
            <li>
              <a
                @click="navPage(`categorySection`)"
                class="cursor-pointer text-xl block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Categories</a
              >
            </li>
            <li>
              <a
                @click="navPage(`historySection`)"
                class="cursor-pointer text-xl block py-2 pl-3 pr-4 text-slate-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Histories</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

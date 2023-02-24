<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: ["totalFood", "totalCategory"],
}
</script>

<template>
  <section id="sectionDashboard">
    <div class="flex gap-10 items-center justify-center py-52">
      <a
        class="block max-w-sm p-14 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
        <h5
          class="mb-2 text-4xl text-center font-bold tracking-tight text-slate-700">
          Total Products
        </h5>
        <p class="mt-5 text-center text-3xl font-semibold text-slate-600">{{ totalFood }}</p>
      </a>
      <a
        class="block max-w-sm p-14 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
        <h5
          class="mb-2 text-4xl text-center font-bold tracking-tight text-slate-700">
          Total Categories
        </h5>
        <p class="mt-5 text-center text-3xl font-semibold text-slate-600">
          {{ totalCategory }}
        </p>
      </a>
    </div>
  </section>
</template>

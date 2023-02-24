<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Buttons from "./Buttons.vue"
import TableRow from "./TableRow.vue"
export default {
  props: ["categoryList", "page"],
  components: {
    Buttons,
    TableRow,
  },
  methods: {
    navPage(pagename) {
      this.$emit("navPage", pagename)
    },
    setCategoryId(id) {
      this.$emit("setCategoryId", id)
    },
  },
}
</script>

<template>
  <section id="sectionCategory">
    <div
      class="overflow-x-auto relative container max-w-lg mx-auto py-10 mt-24">
      <h1 class="font-medium text-4xl">List of Categories</h1>
      <Buttons
        @click="navPage(`addCategorySection`)"
        title="Add new category"
        class="bg-sky-700 text-amber-200 px-14 py-2 rounded-md hover:bg-sky-800 active:scale-95 duration-75 my-5" />
      <!-- <button
        class="bg-sky-700 text-amber-200 px-14 py-2 rounded-md hover:bg-sky-800 active:scale-95 duration-75 my-5"
        @click="navPage(`addCategorySection`)">
        Add new Category
      </button> -->
      <table class="w-full shadow-lg border text-left text-gray-500">
        <thead class="text-gray-700 text-lg uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6 border">No</th>
            <th scope="col" class="py-3 px-6 border">Name</th>
            <th scope="col" class="py-3 px-6 border text-center">Action</th>
          </tr>
        </thead>
        <tbody class="text-lg">
          <TableRow
            v-for="(category, indexCategory) in categoryList"
            @setCategoryId="setCategoryId"
            :page="page"
            :key="category.id"
            :category="category"
            :indexCategory="indexCategory" />
        </tbody>
      </table>
    </div>
  </section>
</template>

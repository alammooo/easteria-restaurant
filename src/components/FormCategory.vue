<script>
import Buttons from "./Buttons.vue"
export default {
  components: {
    Buttons,
  },
  data() {
    return {
      name: "",
    }
  },
  emits: ["triggerAddCategory"],
  methods: {
    createCategory() {
      let form = {
        name: this.name,
      }
      this.$emit("triggerAddCategory", form)
    },
  },
}
</script>

<template>
  <section id="addCategorySection">
    <h1 class="font-medium text-4xl py-5 container mx-auto mt-24">
      Add a new Category
    </h1>
    <div class="container mx-auto shadow-lg p-5 bg-white">
      <form @submit.prevent="createCategory">
        <div class="mb-6">
          <label
            for="categoryName"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Name</label
          >
          <input
            type="text"
            id="categoryName"
            v-model="name"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Appetizer" />
        </div>
        <Buttons title="Add Category" type="submit" class="text-white mt-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"/>
      </form>
    </div>
  </section>
</template>

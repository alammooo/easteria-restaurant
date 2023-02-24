<script>
import Buttons from "./Buttons.vue"
export default {
  data() {
    return {
      name: "",
      description: "",
      price: 0,
      imgUrl: "",
      categoryId: "",
    }
  },
  components: {
    Buttons,
  },
  props: ["categoryList", "foodId", "foodData", "page"],
  emits: ["triggerAddFood", "triggerEditFood"],
  methods: {
    createFood() {
      let form = {
        name: this.name,
        description: this.description,
        price: this.price,
        imgUrl: this.imgUrl,
        categoryId: this.categoryId,
      }
      this.$emit("triggerAddFood", form)
    },
    editFood() {
      this.$emit("triggerEditFood", this.foodData)
    },
  },
}
</script>

<template>
  <section id="addFoodSection">
    <h1 class="font-medium text-4xl py-5 container mx-auto mt-24">
      Add a new Food
    </h1>
    <div class="container mx-auto shadow-lg p-5 bg-white">
      <form v-if="page === `addFoodSection`" @submit.prevent="createFood">
        <div class="mb-6">
          <label
            for="foodName"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Name</label
          >
          <input
            type="text"
            id="foodName"
            v-model="name"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Shawarma" />
        </div>
        <div class="mb-6">
          <label
            for="foodDescription"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Description</label
          >
          <input
            type="text"
            id="foodDescription"
            v-model="description"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="An eastern cuisine with typical eastern spices" />
        </div>
        <div class="mb-6">
          <label
            for="foodPrice"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Price</label
          >
          <input
            type="number"
            id="foodPrice"
            v-model="price"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="20" />
        </div>
        <div class="mb-6">
          <label
            for="foodLink"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Image Link</label
          >
          <input
            type="text"
            id="foodLink"
            v-model="imgUrl"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="" />
        </div>
        <label
          for="foodCategory"
          class="block mb-2 text-lg font-medium text-slate-700"
          >Category</label
        >
        <select
          id="foodCategory"
          v-model="categoryId"
          class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="">
          <option value="" selected disabled>-- Select Category --</option>
          <option
            v-for="category in categoryList"
            :key="category.id"
            :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <Buttons
          type="submit"
          title="Add Food Detail"
          class="text-white mt-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" />
      </form>

      <form v-if="page === `editFoodSection`" @submit.prevent="editFood">
        <div class="mb-6">
          <label
            for="foodName"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Name</label
          >
          <input
            type="text"
            id="foodName"
            v-model="foodData.name"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Shawarma" />
        </div>
        <div class="mb-6">
          <label
            for="foodDescription"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Description</label
          >
          <input
            type="text"
            id="foodDescription"
            v-model="foodData.description"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="An eastern cuisine with typical eastern spices" />
        </div>
        <div class="mb-6">
          <label
            for="foodPrice"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Price</label
          >
          <input
            type="number"
            id="foodPrice"
            v-model="foodData.price"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="20" />
        </div>
        <div class="mb-6">
          <label
            for="foodLink"
            class="block mb-2 text-lg font-medium text-slate-700"
            >Image Link</label
          >
          <input
            type="text"
            id="foodLink"
            v-model="foodData.imgUrl"
            class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="" />
        </div>
        <label
          for="foodCategory"
          class="block mb-2 text-lg font-medium text-slate-700"
          >Category</label
        >
        <select
          v-model="categoryId"
          class="bg-slate-50 border border-gray-300 text-slate-700 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option value="" selected disabled>--Select Category--</option>
          <option
            v-for="category in categoryList"
            :key="category.id"
            :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <Buttons
          type="submit"
          title="Edit Food Detail"
          class="text-white mt-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" />
      </form>
    </div>
  </section>
</template>

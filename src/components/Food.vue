<!-- eslint-disable vue/multi-word-component-names -->
<script>
import TableRow from "./TableRow.vue"
import Buttons from "./Buttons.vue"

export default {
  props: ["foodList", "role", "page", "foodId", "foodData"],
  components: {
    TableRow,
    Buttons,
  },
  emits: ["navPage", "editFoodStatus", "setfoodId"],
  methods: {
    navPage(pageName) {
      this.$emit("navPage", pageName)
    },
    editFoodStatus(status, id) {
      this.$emit("editFoodStatus", status, id)
    },
    setfoodId(id) {
      this.$emit("setfoodId", id)
    },
  },
}
</script>

<template>
  <section id="sectionFood">
    <div class="overflow-x-auto relative mx-auto py-36 px-72">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="font-medium text-4xl">List of Foods</h1>
          <Buttons
            @click="navPage(`addFoodSection`)"
            title="Add new Food"
            class="bg-sky-700 text-amber-200 px-14 py-2 rounded-md hover:bg-sky-800 active:scale-95 duration-75 my-5" />
          <!-- <button
            @click="navPage(`addFoodSection`)"
            >
            Add Food
          </button> -->
        </div>
      </div>
      <table class="w-full shadow-lg border text-left text-gray-500">
        <thead class="text-gray-700 text-lg uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6 border">No</th>
            <th scope="col" class="py-3 px-6 border">Food</th>
            <th scope="col" class="py-3 px-6 border">Image</th>
            <th scope="col" class="py-3 px-6 border">Description</th>
            <th scope="col" class="py-3 px-6 border">Price</th>
            <th scope="col" class="py-3 px-6 border">Author</th>
            <th scope="col" class="py-3 px-6 border">Status</th>
            <th scope="col" class="py-3 px-6 border">Action</th>
          </tr>
        </thead>
        <tbody class="text-lg">
          <TableRow
            v-for="(food, indexFood) in foodList"
            @editFoodStatus="editFoodStatus"
            @navPage="navPage"
            @setfoodId="setfoodId"
            :page="page"
            :role="role"
            :key="food.id"
            :food="food"
            :indexFood="indexFood" />
        </tbody>
      </table>
    </div>
  </section>
</template>

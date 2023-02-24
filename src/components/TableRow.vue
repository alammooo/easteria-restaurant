<!-- eslint-disable vue/no-mutating-props -->

<script>
import Buttons from "./Buttons.vue"
export default {
  components: {
    Buttons,
  },
  props: [
    "food",
    "indexFood",
    "role",
    "page",
    "category",
    "indexCategory",
    "history",
    "indexHistory",
  ],
  emits: ["editFoodStatus", "navPage", "setfoodId", "setCategoryId"],
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
    setCategoryId(id) {
      this.$emit("setCategoryId", id)
    },
  },
  computed: {
    setLocalDate() {
      return new Date(this.history.updatedAt).toLocaleDateString("en-GB")
    },
    setCurrency() {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(this.food.price)
    },
  },
}
</script>
<template>
  <tr class="bg-white border-b" v-if="page === `foodSection`">
    <td class="py-4 px-6">{{ indexFood + 1 }}</td>
    <td
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
      {{ food.name }}
    </td>
    <td class="py-4 px-6">
      <img class="max-w-xs" :src="food.imgUrl" :alt="food.name" />
    </td>
    <td class="py-4 px-6">{{ food.description }}</td>
    <td class="py-4 px-6">{{ setCurrency }}</td>
    <td class="py-4 px-6">{{ food.User.email }}</td>
    <td class="py-4 px-6">
      <select
        v-if="role === `Admin`"
        v-model="food.status"
        @change="editFoodStatus(food.status, food.id)"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Archived">Archived</option>
      </select>
      <h1
        v-else-if="role === `Staff` && food.status === `Active`"
        class="font-semibold text-emerald-500">
        {{ food.status }}
      </h1>
      <h1
        v-else-if="role === `Staff` && food.status === `Archived`"
        class="font-semibold text-amber-300">
        {{ food.status }}
      </h1>
      <h1
        v-else-if="role === `Staff` && food.status === `Inactive`"
        class="font-semibold text-red-500">
        {{ food.status }}
      </h1>
    </td>
    <td class="py-4 px-6">
      <button
        @click="setfoodId(food.id)"
        class="font-medium block text-amber-200 py-2 rounded-md bg-sky-600 px-5 hover:underline cursor-pointer active:scale-95 duration-75">
        Edit
      </button>
    </td>
  </tr>

  <tr
    class="bg-white border-b hover:bg-gray-50"
    v-if="page === `categorySection`">
    <td
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
      {{ indexCategory + 1 }}
    </td>
    <td
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
      {{ category.name }}
    </td>
    <td scope="row" class="flex items-center justify-center">
      <Buttons
        @click="setCategoryId(category.id)"
        type="button"
        title="Delete"
        class="text-white mt-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto" />
    </td>
  </tr>

  <tr
    v-if="page === `historySection`"
    class="bg-white border-b hover:bg-gray-50">
    <td scope="row" class="py-4 px-6 text-gray-900 whitespace-nowrap">
      {{ indexHistory + 1 }}
    </td>
    <td scope="row" class="py-4 px-6 text-gray-900 whitespace-nowrap">
      {{ history.title }}
    </td>
    <td scope="row" class="py-4 px-6 text-gray-900 whitespace-nowrap">
      {{ history.description }}
    </td>
    <td scope="row" class="py-4 px-6 text-gray-900 whitespace-nowrap">
      {{ history.updatedBy }}
    </td>
    <td scope="row" class="py-4 px-6 text-gray-900 whitespace-nowrap">
      {{ setLocalDate }}
    </td>
  </tr>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import TableRow from "./TableRow.vue"
export default {
  props: ["historyList", "page"],
  components: {
    TableRow,
  },
}
</script>

<template>
  <section id="historySection">
    <div class="overflow-x-auto relative container mx-auto mt-24">
      <h1 class="font-medium text-4xl py-5">History</h1>
      <table
        class="w-full shadow-lg border text-left text-gray-500">
        <thead
          class="text-gray-700 text-lg uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6 border">No</th>
            <th scope="col" class="py-3 px-6 border">Title</th>
            <th scope="col" class="py-3 px-6 border">Description</th>
            <th scope="col" class="py-3 px-6 border">Updated By</th>
            <th scope="col" class="py-3 px-6 border">Updated At</th>
          </tr>
        </thead>
        <tbody class="text-lg">
          <TableRow
            v-for="(history, indexHistory) in historyList"
            :page="page"
            :key="history.id"
            :history="history"
            :indexHistory="indexHistory" />
        </tbody>
      </table>
    </div>
  </section>
</template>

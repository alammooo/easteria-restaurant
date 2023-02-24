<script>
export default {
  props: ["title", "type"],
}
</script>
<template>
  <button
    :type="type">
    {{ title }}
  </button>
</template>

<template>
  <div>
    <div class="sz-btn">SZ Button</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZButton",
})
</script>

<style lang="postcss" scoped>
.sz-btn {
  @apply cursor-pointer text-xl border border-solid rounded-md border-teal-400;
  @apply hover: bg-teal-400;
}
</style>

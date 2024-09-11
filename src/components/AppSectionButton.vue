<template>
  <button
    class="py-3 px-4 border border-gray-dark text-gray-dark text-sm leading-[14px]
     rounded-[46px] hover:text-white hover:bg-gray-dark transition-colors duration-300"
  >
    {{ content }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  content: string
}>()
</script>

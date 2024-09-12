<template>
  <div class="flex gap-4">
    <button><IconArrowLeft :width="width" :height="height" /></button>
    <button><IconArrowRight :width="width" :height="height" /></button>
  </div>
</template>

<script setup lang="ts">
import IconArrowLeft from './icons/icons-for-buttons/IconArrowLeft.vue'
import IconArrowRight from './icons/icons-for-buttons/IconArrowRight.vue'

defineProps<{
  width?: string
  height?: string
}>()
</script>

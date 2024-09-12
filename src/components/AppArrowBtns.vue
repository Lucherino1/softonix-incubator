<template>
  <div class="flex gap-4 group">
    <button>
      <IconArrowLeft
        class=" hover:fill-gray-dark stroke-gray-dark hover:stroke-vanilla transition-colors duration-300"
        :width="width"
        :height="height"
      />
    </button>
    <button>
      <IconArrowRight
        class=" hover:fill-gray-dark stroke-gray-dark hover:stroke-vanilla transition-colors duration-300"
        :width="width"
        :height="height"
      />
    </button>
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

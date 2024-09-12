<template>
  <svg :width="width? width : 54" :height="height? height : 54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27" cy="27" r="26.5" transform="matrix(-1 0 0 1 54 0)" stroke="#2D3134" />
    <path d="M24 33L30 27L24 21" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  width?: string
  height?: string
}>()
</script>

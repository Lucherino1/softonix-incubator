<template>
  <div class="flex flex-col items-center text-left bg-white flex-1 py-[30px] rounded-[14px]">
    <p class=" text-[46px] leading-[46px] font-semibold text-orange">{{ title }}</p>
    <p class=" text-xl text-start max-w-min text-gray-light pt-[18px]">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  text: string
}>()
</script>

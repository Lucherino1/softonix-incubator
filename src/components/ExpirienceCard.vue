<template>
  <div
    class="flex flex-col pl-[26px] lg:pr-[5px] text-left bg-white flex-1 py-[30px]
    rounded-[14px] max-w-[158px]"
  >
    <p class="text-[32px] xl:text-[46px] leading-[32px] xl:leading-[46px] font-semibold text-orange">{{ title }}</p>
    <p class="text-xl text-start max-w-min text-gray-light pt-[18px]">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  text: string
}>()
</script>

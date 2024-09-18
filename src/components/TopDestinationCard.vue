<template>
  <div
    :style="{ width: width, height: height }"
    class="relative rounded-[20px] bg-gray-light cursor-pointer flex group hover:shadow-lg overflow-hidden
    transition-shadow duration-300"
  >
    <img :src="imgSrc" alt="Card Image" class="w-full h-full object-cover">
    <div
      class="absolute text-center bg-white rounded-xl left-6 top-6 px-[9px] py-[5px]
      group-hover:bg-gray-dark transition-colors duration-300"
    >
      <p class="group-hover:text-white font-medium leading-[14px] text-[14px]">
        {{ score }}
      </p>
    </div>

    <div class="absolute left-6 bottom-6 flex flex-col gap-[10px]">
      <p class="text-white font-semibold leading-5">{{ title }}</p>
      <p class="text-white leading-[14px] text-[14px]">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imgSrc: string
  width: string
  height: string
  score: string
  title: string
  text: string
}>()
</script>

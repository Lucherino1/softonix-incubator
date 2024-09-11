<template>
  <div class="relative flex flex-col gap-[18px] text-center items-center justify-center group transition duration-300">
    <div
      class="w-[170px] h-[230px] rounded-[85px] bg-gray overflow-hidden
       group-hover:brightness-75 transition duration-300 cursor-pointer"
    >
      <img class="w-full h-full object-cover" :src="imgSrc" alt="Image">
      <p
        class="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold leading-[22px]
         opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30"
      >
        Visite
      </p>
    </div>
    <p class="font-medium text-[26px] text-gray-dark cursor-pointer">{{ title }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imgSrc: string
  title: string
}>()
</script>

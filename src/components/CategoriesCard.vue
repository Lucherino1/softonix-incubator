<template>
  <div
    class="relative flex flex-col gap-[18px] text-center items-center justify-center group transition duration-300"
  >
    <div
      class="relative w-[170px] h-[230px] rounded-[85px] bg-gray overflow-hidden
        transition duration-300 cursor-pointer"
    >
      <img
        class="absolute object-cover w-full h-auto overflow-hidden group-hover:brightness-75"
        :src="imgSrc"
        alt="Image"
      >
      <p
        class="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold leading-[22px]
         opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30
         group-hover:brightness-none"
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

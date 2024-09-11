<template>
  <div class=" max-w-sm px-3 flex flex-col justify-center flex-shrink-0 border-2 border-white rounded-2xl">
    <div class=" w-[362px] h-[252px] bg-gray rounded-2xl self-center mt-2">
      <img class="w-full h-full object-cover rounded-2xl" :src="imgSrc" alt="Tour Image">
    </div>
    <div class="pt-6 pl-6">
      <p class="pb-[14px] text-2xl leading-6 text-gray-dark">{{ title }}</p>
      <p class="text-sm leading-[14px]">{{ text }}</p>
    </div>
    <div class="flex pt-7 items-center justify-between pb-9">
      <p class="ml-6 text-lg">
        <span class=" text-2xl font-semibold text-gray-dark leading-5">{{ price }}</span> /{{ amount }}
      </p>
      <AppSectionButton class="mr-6" content="Book Now" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppSectionButton from './AppSectionButton.vue'

defineProps<{
  imgSrc: string
  title: string
  text: string
  price: string
  amount: string
}>()
</script>

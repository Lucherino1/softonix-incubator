<template>
  <div class="flex flex-col bg-white px-[30px] py-[30px] rounded-[14px]">
    <p class=" text-lg leading-[30px] pr-1 pt-[2px] max-h-[170px] overflow-y-auto">
      Salty helped me a lot in finding the best place for our first outdoor adventure trip.
      They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
    </p>
    <div class="flex flex-col pt-7">
      <div class="flex gap-1">
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </div>
      <div class="flex justify-between items-center pt-4">
        <div class="">
          <p class="font-medium text-xl leading-5 pb-2 text-gray-dark">{{ name }}</p>
          <p class="text-xs leading-3">{{ job }}</p>
        </div>
        <AppArrowBtns width="40" height="40" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconStar from './icons/IconStar.vue'
defineProps<{
  review: string
  name: string
  job: string
}>()
</script>

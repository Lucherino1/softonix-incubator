<template>
  <div class="font-poppins font-normal text-16[px] leading-4 text-blue-dark">
    <ul class="flex gap-[36px]">
      <li
        class="selected-list-item relative cursor-pointer pb-[0.5rem] hover:text-orange transition duration-300"
      >
        Home
      </li>
      <li class="relative cursor-pointer pb-[0.5rem] hover:text-orange transition duration-300">
        About us
      </li>
      <li class="relative cursor-pointer pb-[0.5rem] hover:text-orange transition duration-300">
        Destinations
      </li>
      <li class="relative cursor-pointer pb-[0.5rem] hover:text-orange transition duration-300">
        Tours
      </li>
      <li class="relative cursor-pointer pb-[0.5rem] hover:text-orange transition duration-300">
        Blog
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.selected-list-item {
  position: relative;
  padding-bottom: 0.375rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12px;
    height: 2px;
    background-color: #f66f4d;
  }
}
</style>

<template>
  <nav class="flex items-center mb-6 px-5 w-full">
    <ul class="flex items-center gap-4">
      <li class="menu__item">
        <router-link to="/contacts" active-class="text-blue-500" class="font-medium m-0">
          Contact list
        </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/job-openings" active-class="text-blue-500" class="font-medium m-0">
          Job Openings
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu__item {
  @apply font-medium m-0;
}
</style>

<template>
  <div class="flex items-center bg-white">
    <input v-model="modelValue" class="" type="search">
    {{ modelValue }}
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<string>()
</script>

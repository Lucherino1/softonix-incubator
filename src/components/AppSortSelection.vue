<template>
  <div class="rounded-md relative flex items-center gap-2">
    <p class="font-normal">sort:</p>
    <select
      v-model="modelValue"
      class="appearance-none bg-white border border-white shadow-sm  px-1 py-1 pr-10
      rounded-md focus:outline-none cursor-pointer hover:border-gray-ultra-light text-gray"
    >
      <option
        v-for="option in sortOptions" :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <slot name="icon">^</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const modelValue = defineModel<string>('modelValue')

const sortOptions = reactive<string[]>(['Default', 'Ascending', 'Descending'])
</script>

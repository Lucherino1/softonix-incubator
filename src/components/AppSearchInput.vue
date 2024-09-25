<template>
  <div ref="dropdownContainer" class="relative flex flex-col bg-white py-2 px-4 rounded-[40px] w-[500px]">
    <div class="flex gap-2 items-start">
      <IconSearch @click="focusInput()" />
      <input
        ref="inputRef"
        v-model="modelValue"
        class="block w-full  border border-white focus:border-b-blue-500"
        type="search"
        placeholder="Search..."
        @focus="isDropDownVisible = true"
        @input="isDropDownVisible = true"
      >
    </div>
    <Transition name="slide-fade">
      <div
        v-if="modelValue?.length && isDropDownVisible"
        class="absolute left-0 flex z-50 bg-white w-full mt-10 rounded shadow-lg"
      >
        <ul class="cursor-pointer w-full justify-center max-h-[200px] overflow-y-auto scroll-auto">
          <li v-if="!props.searchResults.length" class="p-2"><span class="text-red-500">*</span> No results found</li>
          <li
            v-for="item in props.searchResults"
            :key="item"
            class="dropdown__item"
            @click="onSelectItem(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'

const props = defineProps<{
  searchResults: string[]
}>()

const inputRef = ref<HTMLInputElement>()
function focusInput () {
  inputRef.value?.focus()
}

const modelValue = defineModel<string>({ required: true })

const dropdownContainer = ref<HTMLElement | null>(null)
const isDropDownVisible = ref(false)

function onSelectItem (item: string) {
  modelValue.value = item
  isDropDownVisible.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as HTMLElement)) {
    isDropDownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
.dropdown__item {
  @apply px-2 py-2 truncate hover:bg-gray-ultra-light transition-colors duration-150;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>

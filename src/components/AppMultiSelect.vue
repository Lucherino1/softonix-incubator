<template>
  <div ref="dropdownContainer" class="relative">
    <button
      class="dropdown__button bg-white border border-white hover:border-gray text-gray-medium
       rounded-md p-1 pr-20 w-48 overflow-x-auto whitespace-nowrap py-2 shadow-sm"
      :class="{ 'border-blue-500 hover:border-blue-500': isDropdownVisible }"
      @click="toggleDropdown"
    >
      <p v-if="modelValue.length === 0">Select occupation</p>
      <div v-else>
        <div
          v-for="model in modelValue" :key="model"
          class="inline-flex items-center mr-1 bg-gray-light px-2 py-1 rounded-md h-[25px]"
        >
          <span class="mr-1">{{ model }}</span>
          <span
            class="inline-flex items-center justify-center w-4 h-4 rounded-full
            transition-colors duration-300 hover:bg-gray hover:text-white ml-1 cursor-pointer"
            @click.stop="handleOptionClick(model)"
          >
            <IconX class="w-3 h-3 text-current" />
          </span>
        </div>
      </div>
    </button>
    <Transition name="slide-fade">
      <div
        v-if="isDropdownVisible"
        class="absolute rounded-sm pt-2 pb-2 bg-white shadow-lg border border-gray-ultra-light
       mt-2 w-48 max-h-60 overflow-y-auto z-50"
      >
        <div class="flex flex-col">
          <div
            v-for="option in props.options" :key="option"
            class="relative hover:bg-gray-light text-gray pl-2 pr-10 cursor-pointer whitespace-nowrap flex items-center"
            :class="{'text-blue-500': modelValue.includes(option)}"
            @click="handleOptionClick(option)"
          >
            <span class="flex-1">{{ option }}</span>
            <div v-if="modelValue.includes(option)" class="absolute inset-y-0 right-2 flex items-center">
              <IconCheckMark class="w-3 h-3 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import IconCheckMark from '@/components/icons/IconCheckMark.vue'
import IconX from '@/components/icons/IconX.vue'

const modelValue = defineModel<string[]>({ required: true })

const props = defineProps<{
  options: string[]
}>()

const isDropdownVisible = ref(false)
const dropdownContainer = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const handleOptionClick = (option: string) => {
  const newValue = modelValue.value.includes(option)
    ? modelValue.value.filter(value => value !== option)
    : [...modelValue.value, option]

  modelValue.value = newValue
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as HTMLElement)) {
    isDropdownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
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

.dropdown__button::-webkit-scrollbar {
  height: 2px;
}
</style>

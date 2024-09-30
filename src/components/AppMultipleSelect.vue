<template>
  <div
    ref="dropdownContainer"
    class="relative flex flex-col my-1 bg-white py-2 px-2 rounded-md h-[40px] w-full border-2
     border-gray-ultra-light justify-center hover:border-blue-500"
    :class="isDropdownVisible ? 'border-blue-500' : 'border-gray-ultra-light'"
    @click="isDropdownVisible = true; inputRef?.focus()"
  >
    <div class="flex gap-2 items-center">
      <div v-if="modelValue.length" class="flex items-center gap-2 justify-center text-center">
        <div class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-nowrap">
          {{ selectedItems[0][displayField] }}
          <span
            class="inline-flex items-center justify-center w-4 h-4 rounded-full
            transition-colors duration-300 hover:bg-white hover:text-gray ml-1 cursor-pointer"
            @click.stop="removeItem(modelValue[0])"
          >
            <IconX class="w-[10px] h-[10px] text-gray" />
          </span>
        </div>
        <div v-if="selectedItems.length > 1" class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-nowrap">
          +{{ selectedItems.length - 1 }}
        </div>
      </div>
      <input
        ref="inputRef"
        v-model="searchQuery"
        class="block w-full border border-white h-full"
        type="search"
        :placeholder="placeholder"
        @focus="isDropdownVisible = true"
        @input="isDropdownVisible = true"
      >
      <span
        class="cursor-pointer"
        :class="{
          'rotate-180 transition-transform duration-300 ease-in-out': isDropdownVisible,
          'rotate-0 transition-transform duration-300 ease-in-out': !isDropdownVisible
        }"
        @click.stop="toggleDropdown"
      >
        <IconDropdown />
      </span>
    </div>
    <Transition name="slide-fade">
      <div
        v-if="isDropdownVisible"
        class="absolute left-0 top-full z-50 bg-white w-full rounded shadow-lg mt-3"
      >
        <ul class="cursor-pointer w-full justify-center max-h-[200px] overflow-y-auto scroll-auto">
          <li v-if="!filteredOptions.length" class="p-2">
            <span class="text-red-500">*</span> No results found
          </li>
          <li
            v-for="item in filteredOptions"
            :key="item[valueField]"
            :class="modelValue.includes(item[valueField]) ? 'bg-blue-100 text-blue-900 font-medium'
              : 'hover:bg-gray-ultra-light'"
            class="px-2 py-2 truncate transition-colors duration-150"
            @click="selectDropdownItem(item)"
          >
            <div class="flex justify-between items-center">
              <p>{{ item[displayField] }}</p>
              <span v-if="modelValue.includes(item[valueField])">
                <IconCheckMark class="w-3 h-3 text-blue-500" />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  options: any[]
  displayField: string
  valueField: string
  placeholder?: string
}>()

const inputRef = ref<HTMLInputElement>()
const modelValue = defineModel<string[]>('selected', { required: true })

const dropdownContainer = ref<HTMLElement | null>(null)
const isDropdownVisible = ref(false)
const searchQuery = ref('')

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
  if (isDropdownVisible.value) inputRef.value?.focus()
}

const selectedItems = computed(() => {
  return props.options.filter(option => modelValue.value.includes(option[props.valueField]))
})

function selectDropdownItem (item: any) {
  if (modelValue.value.includes(item[props.valueField])) {
    modelValue.value = modelValue.value.filter(selected => selected !== item[props.valueField])
  } else {
    modelValue.value.push(item[props.valueField])
  }
  searchQuery.value = ''
}

const filteredOptions = computed(() => {
  return props.options.filter(option =>
    option[props.displayField].toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const removeItem = (value: string) => {
  modelValue.value = modelValue.value.filter(selected => selected !== value)
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as HTMLElement)) {
    isDropdownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

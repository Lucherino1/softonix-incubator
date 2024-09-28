<template>
  <div class="list-container relative text-base group overflow-hidden">
    <div class="flex items-center gap-2 ml-1 mt-1">
      <button class="w-5 h-5 bg-gray-ultra-light flex items-center justify-center z-40"><IconKeyboardUp /></button>
      <a href="/" class="text-lg font-bold text-gray-dark flex gap-2 items-center">
        {{ department.name }} ({{ department.jobs.length }})
        <span class="hidden group-hover:block"><IconArrowRight /></span>
      </a>
    </div>
    <ul class="flex flex-col gap-3 ml-10">
      <li v-for="job in visibleJobs" :key="job.id" class="relative">
        <a class="text-blue-400 hover:underline max-w-[415px] text-nowrap" :href="job.url">
          <span class="ml-2">{{ job.title }}</span>
        </a>
      </li>
      <li v-if="showSeeMoreButton" class="relative">
        <button
          class="text-blue-400 font-semibold hover:underline"
          @click="toggleShowJobs"
        >
          See more
        </button>
      </li>
      <li v-if="showAllJobs" class="relative">
        <button
          class="text-blue-400 font-semibold hover:underline"
          @click="toggleShowJobs"
        >
          Show less
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  department: IDepartmentsWithJobOpenings
}>()

const showAllJobs = ref(false)

const visibleJobs = computed(() => {
  return showAllJobs.value ? props.department.jobs : props.department.jobs.slice(0, 5)
})

const showSeeMoreButton = computed(() => props.department.jobs.length > 5 && !showAllJobs.value)

const toggleShowJobs = () => {
  showAllJobs.value = !showAllJobs.value
}
</script>

<style lang="scss" scoped>
  li::before {
    content: '';
    @apply absolute bottom-[10px] left-[-28px] w-5 h-0.5 bg-gray-ultra-light z-10
  }
  li > a::before {
    content: '';
    @apply inline-block w-2.5 h-2.5 bg-green-500 rounded-full
  }
  .list-container::before {
    content: '';
    @apply absolute top-4 left-3 h-full w-0.5 bg-gray-ultra-light text-gray-ultra-light
  }
</style>

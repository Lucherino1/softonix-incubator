<template>
  <div class="w-full pt-16 bg-white">
    <div class="w-full border-y-2 border-gray-ultra-light bg-gray-light">
      <div class="px-3 h-screen overflow-y-auto w-2/5 bg-white">
        <div class="border-2 border-t-0 mb-7 p-2 border-gray-ultra-light text-gray text-sm">
          <div class="flex justify-between items-center mb-3 text-base">
            <div class="flex justify-start items-center gap-3">
              <p class="uppercase font-medium justify-center text-wrap">Job Openings</p>
              <IconInfo class="w-5 h-5" />
            </div>
            <AppButton class="w-9 h-9">
              <template #icon>
                <IconArrowForward class="text-white w-5 h-5" />
              </template>
            </AppButton>
          </div>
          <div class="mb-6">
            <p class="capitalize">Departments:</p>
            <AppMultipleSelect v-model:selected="selectedDepartments" :options="filteredDepartments" />
            <p>Showing {{ countJobOpenings }} job openings</p>
          </div>
          <div class="border-t-2 border-gray-ultra-light">
            <DepartmentJobs
              v-for="dep in departmentsWithJobOpenings"
              :key="dep.name"
              :department="dep"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DepartmentJobs from './components/DepartmentJobs.vue'

const countJobOpenings = computed(() => {
  return jobOpenings.length === filteredJobOpenings.value.length
    ? jobOpenings.length
    : `${filteredJobOpenings.value.length} of ${jobOpenings.length}`
})

const jobOpeningsStore = useJobOpeningsStore()
const { jobOpenings, departments } = jobOpeningsStore

const selectedDepartments = ref<string[]>([])

const filteredJobOpenings = computed(() => {
  if (selectedDepartments.value.length === 0) {
    return [...new Set(Object.values(groupedJobs).flat())]
  }

  const filteredJobs: IJobOpening[] = []

  selectedDepartments.value.forEach(department => {
    if (groupedJobs[department]) {
      filteredJobs.push(...groupedJobs[department])
    }
  })

  return [...new Set(filteredJobs)]
})

const filteredDepartments = computed(() => {
  const usedDepartments = new Set<string>()

  jobOpenings.forEach(job => {
    if (job.departments.length === 0) {
      usedDepartments.add('Other')
    } else {
      job.departments.forEach(dep => usedDepartments.add(dep))
    }
  })
  const sortedDepartments = departments.slice().sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })

  const filtered = sortedDepartments.filter(dep => usedDepartments.has(dep.value))

  if (usedDepartments.has('Other')) {
    filtered.push({ name: 'Other', value: 'other' })
  }

  return filtered
})

function groupBy<T, K extends keyof any> (
  array: T[],
  getKey: (item: T) => K | K[]
): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const keys = getKey(item)
    const keyArray = Array.isArray(keys) ? keys : [keys]

    keyArray.forEach((key) => {
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(item)
    })

    return acc
  }, {} as Record<K, T[]>)
}

const groupedJobs = groupBy(jobOpenings, job => job.departments.length ? job.departments : ['other'])

const departmentsWithJobOpenings = computed(() => {
  const result: IDepartmentsWithJobOpenings[] = []

  if (selectedDepartments.value.length === 0) {
    filteredDepartments.value.forEach(dep => {
      result.push({
        name: dep.name,
        jobs: groupedJobs[dep.value] || []
      })
    })
  } else {
    selectedDepartments.value.forEach(depValue => {
      const dep = filteredDepartments.value.find(d => d.value === depValue)
      if (dep) {
        result.push({
          name: dep.name,
          jobs: groupedJobs[depValue] || []
        })
      }
    })
  }

  return result
})
</script>

<style lang="scss" scoped>
</style>

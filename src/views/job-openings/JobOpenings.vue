<template>
  <div class="w-full pt-16 bg-white">
    <div class="w-full border-y-2 border-gray-ultra-light bg-gray-light">
      <div class="px-3 h-screen overflow-y-auto w-[45%] bg-white">
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
            <AppMultipleSelect v-model:selected="selectedDepartments" :options="validDepartments" />
            <p>Showing {{ shownJobOpeningsQuantity }} job openings</p>
          </div>
          <div class="border-t-2 border-gray-ultra-light">
            <template v-for="dep in departmentsWithJobOpenings" :key="dep.name">
              <Observer :removeIfInvisible="false">
                <DepartmentJobs v-if="dep.jobs.length" :department="dep" />
              </Observer>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { groupBy } from '../../core/helpers'
const jobOpeningsStore = useJobOpeningsStore()
const { jobOpenings, departments } = jobOpeningsStore

const selectedDepartments = ref<string[]>([])

const shownJobOpeningsQuantity = computed(() => {
  if (selectedDepartments.value.length === 0) {
    return jobOpenings.length
  }

  const uniqueJobOpenings = new Set()

  selectedDepartments.value.forEach(depValue => {
    if (groupedJobs[depValue]) {
      groupedJobs[depValue].forEach(job => {
        uniqueJobOpenings.add(job)
      })
    }
  })

  return `${uniqueJobOpenings.size} of ${jobOpenings.length}`
})

const validDepartments = computed(() => {
  const jobDepartments = new Set(jobOpenings.flatMap(job => job.departments))

  const validDepartments = departments.filter(dep => jobDepartments.has(dep.value))
  validDepartments.sort((a, b) => a.name.localeCompare(b.name)).push({ name: 'Other', value: 'other' })

  return validDepartments
})

console.log(validDepartments)
console.log(validDepartments.value.sort())

const groupedJobs = groupBy(jobOpenings, job => job.departments.length ? job.departments : ['other'])
console.log(groupedJobs)

const departmentsWithJobOpenings = computed(() => {
  const result: IDepartmentsWithJobOpenings[] = []

  if (selectedDepartments.value.length === 0) {
    validDepartments.value.forEach(department => {
      result.push({
        name: department.name,
        jobs: groupedJobs[department.value]
      })
    })
  } else {
    selectedDepartments.value.forEach(selectetValue => {
      const dep = validDepartments.value.find(d => d.value === selectetValue)
      if (dep) {
        result.push({
          name: dep.name,
          jobs: groupedJobs[selectetValue]
        })
      }
    })
  }
  return result
})

</script>

<style lang="scss" scoped>
</style>

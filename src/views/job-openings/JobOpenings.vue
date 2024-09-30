<template>
  <div class="w-full pt-16 bg-white">
    <div class="w-full border-y-2 border-gray-ultra-light bg-gray-light">
      <div class="p-3 h-screen overflow-y-auto w-[100%] lg:w-[50%] xl:w-[40%] bg-white">
        <div class="border-2 mb-7 mt-3 p-2 rounded-md border-gray-ultra-light text-gray text-sm">
          <div class="flex justify-between items-center mb-3 text-base">
            <div class="flex justify-start items-center gap-3">
              <p class="uppercase font-medium text-sm justify-center text-wrap">Job Openings</p>
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
            <MultipleSelect
              v-model:selected="selectedDepartments"
              :options="validDepartments"
              displayField="name"
              valueField="value"
              placeholder="Select departments"
            />
            <p>Showing <span class=" font-medium">{{ shownJobOpeningsQuantity }}</span> job openings</p>
          </div>
          <div class="border-t-2 border-gray-ultra-light">
            <template v-for="dep in departmentsWithJobOpenings" :key="dep.id">
              <ItemObserver :removeIfInvisible="false">
                <DepartmentJobs v-if="dep.jobs.length" :department="dep" />
              </ItemObserver>
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

  return `${uniqueJobOpenings.size} out of ${jobOpenings.length}`
})

const validDepartments = computed(() => {
  const jobDepartments = new Set(jobOpenings.flatMap(job => job.departments))

  const validDepartments = departments.filter(dep => jobDepartments.has(dep.value))
  validDepartments.sort((a, b) => a.name.localeCompare(b.name)).push({ name: 'Other', value: 'other' })

  return validDepartments
})

const groupedJobs = groupBy(jobOpenings, job => job.departments.length ? job.departments : ['other'])

const allDepartmentsWithJobOpenings = computed(() =>
  validDepartments.value.map(department => ({
    name: department.name,
    jobs: groupedJobs[department.value]
  }))
)

const departmentsWithJobOpenings = computed(() => {
  const selectedDepartmentsWithJobs: IDepartmentsWithJobOpenings[] = []

  if (selectedDepartments.value.length === 0) {
    return allDepartmentsWithJobOpenings.value
  } else {
    selectedDepartments.value.forEach(selectetValue => {
      const dep = validDepartments.value.find(d => d.value === selectetValue)
      if (dep) {
        selectedDepartmentsWithJobs.push({
          name: dep.name,
          jobs: groupedJobs[selectetValue]
        })
      }
    })
  }
  return selectedDepartmentsWithJobs
})

</script>

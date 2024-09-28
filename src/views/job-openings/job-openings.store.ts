export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const departments = jobOpeningsService.fetchDepartments()
  const jobOpenings = jobOpeningsService.fetchJobOpenings()

  return {
    departments,
    jobOpenings
  }
})

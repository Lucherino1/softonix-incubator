interface IDepartment {
  name: string
  value: string
}

interface IJobOpening {
  title: string
  id: string
  departments: string[]
  isClosed: boolean
  url: string
}

interface IDepartmentsWithJobOpenings {
  name: string
  jobs: IJobOpening[]
}

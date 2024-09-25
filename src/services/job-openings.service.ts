import { departments } from '@/_homework/departments'
import { jobOpenings } from '@/_homework/job-openings'

class JobServices {
  fetchJobOpenings () {
    return [...jobOpenings]
  }

  fetchDepartments () {
    return [...departments]
  }
}

export const jobOpeningsService = new JobServices()

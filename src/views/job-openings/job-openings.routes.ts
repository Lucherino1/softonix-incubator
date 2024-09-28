import type { RouteRecordRaw } from 'vue-router'

export const jobOpeningsRouteNames = {
  jobOpenings: 'jobOpenings'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/job-openings',
    name: jobOpeningsRouteNames.jobOpenings,
    component: () => import ('@/views/job-openings/JobOpenings.vue')
  }
]

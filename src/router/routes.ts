import type { RouteRecordRaw } from 'vue-router'

import { contactRouteNames, contactsRoutes } from '@/views/contacts/contacts.routes'
import { jobOpeningsRoutes } from '@/views/job-openings/job-openings.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { routeNames } from './route-names'

export const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: contactRouteNames.contacts },
  component: DefaultLayout,
  children: [
    ...contactsRoutes,
    ...jobOpeningsRoutes
  ]
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: contactRouteNames.contacts }
  },
  defaultLayoutRoutes
]

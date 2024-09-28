import type { RouteRecordRaw } from 'vue-router'

export const contactRouteNames = {
  contacts: 'contacts',
  upsertContact: 'upsertContact'
}

export const contactsRoutes: RouteRecordRaw[] = [
  {
    path: '/contacts',
    name: contactRouteNames.contacts,
    component: () => import ('@/views/contacts/Contacts.vue')
  },
  {
    path: '/contacts/:contactId',
    name: contactRouteNames.upsertContact,
    component: () => import ('@/views/contacts/UpsertContact.vue'),
    beforeEnter (to, from, next) {
      const contactsStore = useContactsStore()
      const { contacts } = storeToRefs(contactsStore)
      if (to.params.contactId === 'new' || contacts.value.find(c => c.id === +to.params.contactId)) {
        next()
      } else {
        next({ name: 'contacts' })
      }
    }
  }
]

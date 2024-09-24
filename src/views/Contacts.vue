<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppSortSelection v-model="selectedSortOption" />
    <AppSearchInput v-model="searchQuery" :search-results="searchResults" />
    <AppMultiSelect v-model="selectedFilterOptions" :options="rolesList" />
    <AppButton class=" self-center" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in filteredContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import AppSearchInput from '@/components/AppSearchInput.vue'
import { computed, ref } from 'vue'
import type { IContact } from '@/types'
import AppMultiSelect from '@/components/AppMultiSelect.vue'
import AppSortSelection from '@/components/AppSortSelection.vue'

const router = useRouter()
const contactsStore = useContactsStore()
const { contacts, rolesList } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const searchQuery = ref('')
const searchResults = ref<string[]>([])
const selectedFilterOptions = ref<string[]>([])
const selectedSortOption = ref('Default')

function searchContacts () {
  searchResults.value = []
  return contacts.value.filter(contact => {
    const nameMatches = contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const descriptionMatches = contact.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    if (nameMatches) searchResults.value.push(contact.name)
    if (descriptionMatches) searchResults.value.push(contact.description)

    return nameMatches || descriptionMatches
  })
}

function filterByRoles (searchedContacts: IContact[]) {
  return searchedContacts.filter(contact => {
    return selectedFilterOptions.value.length === 0 || selectedFilterOptions.value.includes(contact.role)
  })
}

function sortContacts (contacts: IContact[]) {
  if (selectedSortOption.value === 'Ascending') {
    return contacts.sort((a, b) => a.name.localeCompare(b.name))
  } else if (selectedSortOption.value === 'Descending') {
    return contacts.sort((a, b) => b.name.localeCompare(a.name))
  }
  return contacts
}

const filteredContacts = computed<IContact[]>(() => {
  const searchedContacts = searchContacts()
  const matchesRoles = filterByRoles(searchedContacts)
  return sortContacts(matchesRoles)
})

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>

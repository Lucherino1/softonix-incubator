<template>
  <div class="max-w-[1440px] p-6">
    <div class="flex gap-5 items-center">
      <h3 class="font-medium m-0">Contact list</h3>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium
         rounded p-2 inline-flex items-center justify-center"
        @click="createNewContact"
      >
        <IconPlus class="w-5 h-5 mr-2" />
        Add Contact
      </button>
    </div>

    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-for="(newContact, index) in newContacts"
        :key="newContact.id"
        is-creation-mode
        :contact="newContact"
        @delete="deleteNewContact(index)"
        @save="saveNewContact($event, index)"
      />
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact(index)"
        @save="onContactSave($event, index)"
        @removeAllNewContacts="removeAllNewContacts"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

function deleteContact (index: number) {
  const isConfirmed = confirm('Are you sure you want to delete this contact?')
  if (isConfirmed) {
    contacts.value.splice(index, 1)
  }
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}

const newContacts = ref<IContact[]>([])

function createNewContact () {
  const newContactId = Date.now() + Math.floor(Math.random() * 1000)
  newContacts.value.unshift({
    id: newContactId,
    name: '',
    description: '',
    image: ''
  })
}

function deleteNewContact (index: number) {
  newContacts.value.splice(index, 1)
}

function saveNewContact (contact: IContact, index: number) {
  contacts.value.unshift({
    ...newContacts.value[index],
    ...contact
  })
  newContacts.value.splice(index, 1)
}

function removeAllNewContacts () {
  newContacts.value = []
}
</script>

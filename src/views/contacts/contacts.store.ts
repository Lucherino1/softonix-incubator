export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = async () => {
    if (contacts.value.length) return

    await contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  async function addContact (contact: IContact) {
    try {
      await contactsService.createContact(contact)
      const contactsData = await contactsService.getContacts()
      contacts.value = contactsData
    } catch (error) {
      alert(error.message)
    }
  }

  async function updateContact (contact: IContact) {
    try {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.updateContact(contact)
      contacts.value[currentIndex] = { ...contact }
    } catch (error) {
      alert(error.message)
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.deleteContact(contact)
      contacts.value.splice(currentIndex, 1)
    } catch (error) {
      alert(error.message || 'An error occurred while deleting the contact')
    }
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})

class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact ({ name, description }: IContact) {
    return useHttp.post('rest/v1/contacts', { name, description })
  }

  updateContact ({ id, name, description }: IContact) {
    return useHttp.patch(`rest/v1/contacts?id=eq.${id}`, { id, name, description })
  }

  deleteContact (contact: IContact) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${contact.id}`)
  }
}

export const contactsService = new ContactsService()

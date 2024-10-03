<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>
  </div>
  <el-tabs v-model="activeTabName">
    <el-tab-pane label="Card" name="card">
      <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
        <ContactItem
          v-for="contact in contacts"
          :key="contact.id"
          class="cursor-pointer"
          :contact="contact"
          @click="editContact(contact.id)"
          @delete="deleteContact"
          @save="updateContact"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Table" name="table">
      <ContactTable
        @save="updateContact"
        @delete="deleteContact"
        @edit="editContact"
      />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const activeTabName = ref('card')

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}
</script>

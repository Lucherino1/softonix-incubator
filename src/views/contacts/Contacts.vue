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
      @click="logout"
    >
      Logout
    </el-button>
  </div>

  <AsyncExample v-if="!loading" />

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

  <p class="font-medium text-lg">Example of LazyImg component (scroll down):</p>
  <div class="w-full max-h-[500px] overflow-y-scroll rounded-lg">
    <div class="flex flex-col justify-between items-center w-full h-[4000px] bg-white p-7">
      <div class="w-[400px] h-[200px] mt-[800px]">
        <LazyImg
          :img-src="'https://images.ctfassets.net/2vu6tcanchej/6rDTPbySjEVfhuqppgYc5h/7e0707c6ca35fd55ab5f770e0cfb601a/Softonix_Incubator_3.png'"
          :img-alt="'lazy-img-test-1'"
        />
      </div>
      <div class="flex flex-col justify-center items-center">
        <p>Error example:</p>
        <div class="w-[100px] h-[100px]">
          <LazyImg
            :img-src="'https://images.ctfassets.net/2vchej/2iFQbopLMoNhU3XaqqJHUx/d90c48f4427c0dbfb7b7d1dbdf44ec8b/-tech_savvy__2_.png'"
            :img-alt="'lazy-img-test-3'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const AsyncExample = defineAsyncComponent(() => import('./components/AsyncExample.vue'))

const { $routeNames } = useGlobalProperties()

const { logout } = useAuthStore()
const contactsStore = useContactsStore()
const { getContacts, updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)
const loading = ref(true)

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

onMounted(() => {
  // get data for the page
  getContacts()
    .finally(() => (loading.value = false))
})
</script>

<template>
  <div class="flex justify-center">
    <el-card :title="cardTitle" class="w-[350px]">
      <template #header>
        <p class="font-semibold">{{ cardTitle }}</p>
      </template>
      <div class="space-y-4 pb-6">
        <el-input v-model="contactForm.name" placeholder="Name" />
        <el-input v-model="contactForm.description" placeholder="Description" />
        <el-input v-model="contactForm.image" placeholder="Image link" />
      </div>
      <div class="flex justify-between">
        <el-button
          :type="$elComponentType.info"
          :size="$elComponentSize.large"
          class="flex-1"
          @click="$router.back"
        >
          Cancel
        </el-button>
        <el-button
          v-if="currentContact"
          :type="$elComponentType.danger"
          :size="$elComponentSize.large" class="flex-1"
          @click="onDelete"
        >
          Delete
        </el-button>

        <el-button
          :type="$elComponentType.primary"
          :size="$elComponentSize.large"
          class="flex-1"
          @click="onSave"
        >
          <template #icon>
            <IconPlus />
          </template>
          Save
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()

const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = ref<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm.value)
  } else {
    addContact(contactForm.value)
  }
  router.push({ name: $routeNames.contacts })
}
</script>

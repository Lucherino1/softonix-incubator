<template>
  <div class="flex justify-center">
    <el-card :title="cardTitle" class="w-[350px]">
      <template #header>
        <p class="font-semibold">New Contact</p>
      </template>

      <el-form>
        <el-form
          ref="formRef"
          label-position="top"
          :rules="formRules"
          :model="contactForm"
          @submit.prevent="onSave"
        >
          <el-form-item label="Name" prop="name">
            <el-input v-model="contactForm.name" />
          </el-form-item>

          <el-form-item label="Description" prop="description">
            <el-input v-model="contactForm.description" type="description" />
          </el-form-item>

          <el-form-item label="Image Link" prop="image">
            <el-input v-model="contactForm.image" type="url" />
          </el-form-item>

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
              native-type="submit"
            >
              <template #icon>
                <IconPlus />
              </template>
              Save
            </el-button>
          </div>
        </el-form>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
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

const formRef = useElFormRef()

const contactForm = useElFormModel<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const formRules = useElFormRules({
  name: [useRequiredRule(), useMinLenRule(5)],
  description: [useRequiredRule(), useMinLenRule(10)],
  image: []
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  formRef.value.validate(isValid => {
    if (isValid) {
      if (currentContact.value) {
        updateContact(contactForm)
      } else {
        addContact(contactForm)
      }
      router.push({ name: $routeNames.contacts })
    }
  })
}
</script>

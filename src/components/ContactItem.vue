<template>
  <div class="flex-col">
    <div class="rounded-lg bg-white shadow relative">
      <div class="p-6 pb-2">
        <div class="flex">
          <div class="flex-grow text-sm truncate">
            <template v-if="editMode || isCreationMode">
              <input
                ref="inputRef"
                v-model="localContact.name"
                required
                type="text"
                placeholder="Name"
                class="contact-card__input font-medium"
                @keyup.enter="onSave()"
              >
              <input
                v-model="localContact.description"
                required
                type="text"
                placeholder="Description"
                class="contact-card__input mt-1"
                @keyup.enter="onSave()"
              >
            </template>

            <template v-else>
              <p class="font-medium">{{ contact.name }}</p>
              <p class="text-gray mt-1 truncate">
                {{ contact.description }}
              </p>
            </template>
          </div>
          <template v-if="!isCreationMode">
            <img
              class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
              :src="contact.image"
              alt="contact-logo"
              @error="setDefaultImage"
            >
          </template>
        </div>
        <div class="flex justify-end mt-2 gap-2">
          <template v-if="isCreationMode">
            <input
              v-model="localContact.image"
              type="text"
              placeholder="Image link"
              class="contact-card__input text-sm mt-[-4px]"
              @keyup.enter="onSave()"
            >
          </template>

          <template v-if="editMode || isCreationMode">
            <button
              class="text-blue-500 font-medium text-xs hover:underline"
              @click="cancelEditMode"
            >
              Cancel
            </button>

            <button
              class="text-blue-500 font-medium text-xs hover:underline"
              :class="'disabled:text-gray disabled:cursor-not-allowed disabled:hover:no-underline'"
              :disabled="!isContactDataValid"
              @click="onSave"
            >
              Save
            </button>
          </template>

          <template v-else>
            <button
              class="text-blue-500 font-medium text-xs hover:underline"
              @click="triggerEditMode"
            >
              Edit
            </button>

            <button
              class="text-red-500 font-medium text-xs hover:underline"
              @click="$emit('delete')"
            >
              Delete
            </button>
          </template>
        </div>
      </div>

      <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
        <button class="flex items-center justify-center flex-1 py-4 hover:text-gray">
          <IconEnvelope />
          <span class="ml-3">Email</span>
        </button>
        <button
          class="flex items-center justify-center flex-1 py-4 border-l border-gray-ultra-light hover:text-gray"
        >
          <IconPhone />
          <span class="ml-3">Call</span>
        </button>
      </div>
    </div>
    <p v-if="!isValidName && localContact.name" class="text-red-500 text-xs mt-2">
      * Name must be at least 5 characters long and include at least one uppercase letter
    </p>
    <p v-if="!isValidDescription && localContact.description" class="text-red-500 text-xs mt-2">
      * Description must be at least 20 characters long and contain at least two words
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed, onMounted } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
  isCreationMode?: boolean
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function cancelEditMode () {
  if (props.isCreationMode) {
    emit('delete')
  } else {
    editMode.value = false
    localContact.value = { ...props.contact }
  }
}

const isValidName = computed(() => {
  const name = localContact.value.name.trim()
  const hasUppercase = /[A-Z]/.test(name)
  return name.length >= 5 && hasUppercase
})

const isValidDescription = computed(() => {
  const description = localContact.value.description.trim()
  const wordsCount = description.split(/\s+/).length
  return description.length >= 20 && wordsCount >= 2
})

const isContactDataValid = computed(() => isValidName.value && isValidDescription.value)

const defaultImageLink = 'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png'

function setDefaultImage (event: Event) {
  (event.target as HTMLImageElement).src = defaultImageLink
}

function onSave () {
  if (isContactDataValid.value) {
    emit('save', localContact.value)
    editMode.value = false
  }
}

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<style lang="scss" scoped>
.contact-card__input {
  @apply block w-full border-b border-b-gray-light box-border max-h-[20px] invalid:required:border-blue-400
}
</style>

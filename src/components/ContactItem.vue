<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || isCreationMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              placeholder="Name"
              class="contact-card__input font-medium"
            >
            <input
              v-model="localContact.description"
              type="text"
              placeholder="Description"
              class="contact-card__input"
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
            :src="contact.image" alt="contact-logo"
          >
        </template>
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="isCreationMode">
          <input
            v-model="localContact.image"
            type="text"
            placeholder="Image URL"
            class="contact-card__input text-sm"
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
            :class="'disabled:text-gray disabled:pointer-events-none'"
            :disabled="!validateContactData"
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
      <div class="flex items-center justify-center flex-1 py-4 hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
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
  }
}

const validateContactData = computed(() => {
  const name = localContact.value.name
  const description = localContact.value.description

  const hasUppercase = /[A-Z]/
  const nameIsValid = !!name.trim() && hasUppercase.test(name) && name.length >= 5

  const countWords = description.trim().split(/\s+/).length
  const descriptionIsValid = !!description.trim() && countWords >= 2 && description.length >= 20

  return nameIsValid && descriptionIsValid
})

function onSave () {
  if (validateContactData.value) {
    emit('save', localContact.value)
    editMode.value = false
  }
}
</script>

<style lang="scss" scoped>
.contact-card__input {
  @apply block w-full
}
</style>

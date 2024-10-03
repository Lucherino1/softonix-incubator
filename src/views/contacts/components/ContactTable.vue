<template>
  <el-table
    :size="$elComponentSize.large"
    class="cursor-pointer w-full font-semibold"
    :data="tableInfo"
    @row-click="$emit( 'edit', $event.id)"
  >
    <el-table-column label="Image" prop="image" width="100px" align="center">
      <template #default="{ row }">
        <div
          class="flex mx-auto justify-center items-center w-20 h-20 border
          border-gray-medium bg-gray-ultra-light rounded-full overflow-hidden"
        >
          <el-image :src="row.image" fit="cover" alt="Contact Image">
            <template #error>
              <IconDefaultContact />
            </template>
          </el-image>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Name" prop="name" width="150px">
      <template #default="{ row }">
        <div v-if="row.editMode">
          <el-input v-model="row.name" type="text" @click.stop />
        </div>
        <div v-else class="truncate">
          {{ row.name }}
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Description" prop="description">
      <template #default="{ row }">
        <div v-if="row.editMode">
          <el-input v-model="row.description" type="text" @click.stop />
        </div>
        <div v-else class="truncate">
          {{ row.description }}
        </div>
      </template>
    </el-table-column>

    <el-table-column width="200px" align="right">
      <template #default="{ row }">
        <div>
          <div v-if="row.editMode" class="flex">
            <el-button class="flex-1" @click.stop="cancelEditMode(row)">
              Cancel
            </el-button>
            <el-button :type="$elComponentType.primary" class="flex-1" @click.stop="saveEdit(row)">
              Save
            </el-button>
          </div>
          <div v-else class="flex">
            <el-button class="flex-1 truncate" @click.stop="triggerEditMode(row)">
              Edit
            </el-button>
            <el-button :type="$elComponentType.danger" class="flex-1" @click.stop="deleteContact(row)">
              Delete
            </el-button>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)

const emit = defineEmits(['delete', 'save', 'edit'])

const tableInfo = computed(() => {
  return contacts.value.map(contact => ({
    ...contact,
    editMode: false,
    localCopy: { ...contact }
  }))
})

function triggerEditMode (row: ITableContact) {
  row.editMode = true
}

function cancelEditMode (row: ITableContact) {
  const { name, description } = row.localCopy
  Object.assign(row, { name, description, editMode: false })
}

function saveEdit (row: ITableContact) {
  emit('save', row)
  const { name, description } = row
  Object.assign(row.localCopy, { name, description, editMode: false })
}

function deleteContact (row: ITableContact) {
  emit('delete', row)
}
</script>

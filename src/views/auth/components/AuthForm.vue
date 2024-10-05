<template>
  <el-form
    ref="formRef"
    label-position="top"
    :rules="formRules"
    :model="formModel"
    @submit.prevent="submit"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="formModel.email" type="email" />
    </el-form-item>

    <el-form-item label="Password" prop="password">
      <el-input v-model="formModel.password" type="password" />
    </el-form-item>

    <el-form-item
      v-if="isRegistration"
      label="Confirm Password"
      prop="confirmPassword"
    >
      <el-input v-model="formModel.confirmPassword" type="password" />
    </el-form-item>

    <div class="flex w-2/4 mx-auto pt-5">
      <el-button plain class="flex-1" :type="$elComponentType.primary" @click="toggleAuthPage">
        {{ submitBtnText }}
      </el-button>
      <el-button native-type="submit" class="flex-1" :type="$elComponentType.primary">
        {{ toggleAuthPageBtnText }}
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'submit', formModel: { email: string; password: string; confirmPassword?: string }): void
}>()

const router = useRouter()
const route = useRoute()
const { $routeNames } = useGlobalProperties()

const isRegistration = computed(() => {
  return route.name === $routeNames.register
})

const toggleAuthPageBtnText = computed(() => {
  return isRegistration.value ? 'Sing in' : 'Sing up'
})
const submitBtnText = computed(() => {
  return isRegistration.value ? 'Sing up' : 'Sing in'
})

const formRef = ref()
const formModel = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const formRules = reactive({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)],
  confirmPassword: isRegistration.value ? [useRequiredRule(), useConfirmPasswordRule(formModel)] : []
})

function submit () {
  formRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      const { email, password } = formModel
      emit('submit', { email, password })
    }
  })
}
function toggleAuthPage () {
  if (route.name === $routeNames.login) {
    router.push({ name: $routeNames.register })
  }
  router.push({ name: $routeNames.login })
}
</script>

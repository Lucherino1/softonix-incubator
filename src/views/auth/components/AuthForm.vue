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

    <div class="flex flex-col w-2/4 mx-auto pt-5">
      <el-button native-type="submit" :type="$elComponentType.primary">
        {{ toggleAuthPageBtnText }}
      </el-button>
      <div class="flex flex-col gap-2 justify-center content-center text-center pt-7">
        <p class="text-gray-medium">Already have an account?</p>
        <el-button link class="underline" :type="$elComponentType.primary" @click="toggleAuthPage">
          {{ submitBtnText }}
        </el-button>
      </div>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'submit', formModel: { email: string; password: string })
}>()

const router = useRouter()
const route = useRoute()
const { $routeNames } = useGlobalProperties()

const isRegistration = computed(() => {
  return route.name === $routeNames.register
})

const toggleAuthPageBtnText = computed(() => {
  return isRegistration.value ? 'Create an account' : 'Sing in'
})
const submitBtnText = computed(() => {
  return isRegistration.value ? 'Sing In' : 'Sing up'
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

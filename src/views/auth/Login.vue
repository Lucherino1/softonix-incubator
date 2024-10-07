<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Login</p>
      </template>
      <AuthForm @submit="submit">
        <template #loginError>
          <p v-if="loginError" class="text-red-500 text-center mt-4 text-sm">
            {{ loginError }}
          </p>
        </template>
      </AuthForm>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
const { login } = useAuthStore()

const loading = ref(false)
const loginError = ref<string | null>(null)

function submit (formModel) {
  loading.value = true
  loginError.value = null
  login(formModel)
    .then(() => router.push({ name: $routeNames.contacts }))
    .catch(error => {
      console.error(error)
      loginError.value = 'Invalid email or password'
    })
    .finally(() => (loading.value = false))
}
</script>

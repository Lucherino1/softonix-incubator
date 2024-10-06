<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Login</p>
      </template>
      <AuthForm @submit="submit" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
const { login } = useAuthStore()

const loading = ref(false)

function submit (formModel) {
  loading.value = true
  login(formModel)
    .then(() => router.push({ name: $routeNames.contacts }))
    .finally(() => (loading.value = false))
}
</script>

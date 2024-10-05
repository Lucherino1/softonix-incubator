<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Register</p>
      </template>
      <AuthForm @submit="submit" />
    </el-card>
  </div>
</template>

<script setup>
const { register } = useAuthStore()
const { router } = useRouter()

const loading = ref(false)

function submit (formModel) {
  loading.value = true
  register(formModel)
    .then(() => router.push({ name: $routeNames.login }))
    .finally(() => (loading.value = false))
}
</script>

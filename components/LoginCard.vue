<template>
    <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-black dark:border-neutral-700" >
  <div class="p-4 sm:p-7">
    <div class="text-center">
      <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
      <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Don't have an account yet? Join us, and let’s make the world a smaller, more connected place for Indians everywhere.
        <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signup.html" >
          Sign up here
        </a>
      </p>
    </div>

    <FirebaseLogin />
  </div>
</div>
</template>

<script setup>


let islogin = ref(false)

onMounted(() => {
  if (process.client) {
    const storedToken = localStorage.getItem('auth-token')
    if (storedToken) {
      islogin.value = true
    }
  }
})


</script>
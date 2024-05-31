
import { Loader } from '#build/components';
<template>
  
  <div class="dark:bg-black h-screen">
   
   <div v-if="loading" class="h-full">
    <Loader  class="my-auto"/>
   </div>
   <NuxtLayout  >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true); // Start with loading set to true

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  console.log('w')
  loading.value = false;
});
</script>

<style>
@import url('~/assets/base.css');

@import 'primeicons/primeicons.css';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

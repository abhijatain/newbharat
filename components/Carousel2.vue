<template>
  <UCarousel v-slot="{ item }" :items="items" indicators>
    <div class="antialiased text-gray-900 relative" style="width: 300px; height: 400px;">
      <div class="flex items-center justify-center">
        <div class="bg-white rounded-lg overflow-hidden dark:bg-black dark:text-white relative">
          <img class="h-[400px] object-cover object-end" :src="item" width="300" alt="Image" />
          <div class="absolute inset-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:bg-gradient-to-t dark:from-black/70 dark:via-black/40 dark:to-transparent text-white flex flex-col justify-between">
            <div>
              <div class="flex items-baseline p-2">
                <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                <div class="ml-2 text-white text-xs uppercase font-semibold tracking-wide">
                  The Hindu 
                </div>
              </div>
            </div>
            <div>
              <p class="mt-2 font-semibold text-lg">Rahul Gandhi Criticizes Modi’s Recent Financial Reforms</p>
              <div class="flex gap-3 flex-col">
                <div class="flex gap-2 p-2 flex-col mb-6">
                  <ProgressBar :value="85" color="#E8630A" lean="Right" text="" height="6"/>
                  <ProgressBar :value="65" color="#399918" lean="Center" text="" height="6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCarousel>


</template>

<style scoped>
.bg-gradient-to-t {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), transparent);
}
.dark .bg-gradient-to-t {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), transparent);
}
</style>


<script setup >
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});


</script>
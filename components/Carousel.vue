<script setup >
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items" ref="carouselRef">
    

    <div class="antialiased text-gray-900 " style="width: 280;height: 400;">
  <div class=" flex items-center justify-center">
    <div class="bg-white rounded-lg overflow-hidden dark:bg-black dark:text-white">
      <!--E11-->
      <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
      <img class="h-48 w-full object-cover object-end" :src="item" width="300" height="400" alt="Home in Countryside" />
      <div class="p-3 border dark:border-blue-800/50">
        <div class="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide dark:text-white">
            The Hindu 
          </div>
        </div>
        <p class="mt-2 font-semibold text-lg w-[280px]">Rahul Gandhi Criticizes Modi’s Recent Financial Reforms</p>

        <div class="flex gap-3 flex-col">

  
<div class="flex gap-2 p-2 flex-col w-[280px]">
 <ProgressBar :value="85" color="#E8630A" lean="Right" text="" height="6"/>
 <ProgressBar :value="65" color="#399918" lean="Center" text="" height="6"/>
</div>

</div>
      </div>
    </div>
  </div>
</div>
  </UCarousel>
</template>
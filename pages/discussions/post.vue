<template>
    <div class=" flex flex-col container mx-auto gap-3">
   
        <div class=" md:m-2 ">
            <DiscussionsCard3 />

            <UTabs :items="items" class="w-full">
    <template #item="{ item }">
      <UCard >
        <template #header>
          <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </template>

        <div v-if="item.key === 'account'" class="space-y-1">
            <ul role="list" class="space-y-8 p-3 text-gray-600 dark:text-gray-200">
  <li class="flex gap-x-3">
    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
    </svg>
    <span><strong class="font-semibold text-gray-900 dark:text-white">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
  </li>
  <li class="flex gap-x-3">
    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
    </svg>
    <span><strong class="font-semibold text-gray-900 dark:text-white">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
  </li>
  <li class="flex gap-x-3">
    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
      <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
    </svg>
    <span><strong class="font-semibold text-gray-900 dark:text-white">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
  </li>
</ul>

        </div>
        <div v-else-if="item.key === 'password'" class="space-y-3">
            <ul role="list" class="space-y-8 p-3 text-gray-600 dark:text-gray-200">
  <li class="flex gap-x-3">
    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
    </svg>
    <span><strong class="font-semibold text-gray-900 dark:text-white">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
  </li>
  <li class="flex gap-x-3">
    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
    </svg>
    <span><strong class="font-semibold text-gray-900 dark:text-white">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
  </li>
  <li class="flex gap-x-3">
    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
      <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
    </svg>
    <span><strong class="font-semibold text-gray-900 dark:text-white">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
  </li>
</ul>

        </div>

        
      </UCard>
    </template>
  </UTabs>
         
           

          <div class="flex flex-row  gap-2 w-full md:w-40 p-3">
            <div class="md:block flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
               <p class="p-1 font-bold text-xs md:text-center">
                   235
               </p><hr class="hidden md:block"><span class="md:hidden">|</span>
               <p class="p-1 text-xs">
                   Replies
               </p>  
           </div>
           <div class="md:block flex flex-row px-1 my-2 border rounded-lg text-xs items-center ">
               <p class="p-1 font-bold text-xs md:text-center">
                   285K
               </p><hr class="hidden md:block"><span class="md:hidden">|</span>
               <p class="p-1 text-xs" >
                   Views
               </p>  
           </div>
           
           
        </div>
          
        </div>
      
        <UDivider label="Similar Stories" />
        <Carousel :items="items2"/>
        <UDivider label="Latest" />
        <Carousel :items="items3"/>
        <UDivider label="Popular" />
        <Carousel :items="items2"/>
    </div>
</template>

<script setup>
const items2 = [
  'https://picsum.photos/600/800?random=6',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=1'
];

const items3 = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
];

const ingredient = ref('');

const items = [{
  key: 'account',
  label: 'Summary',
  description: 'This summary contains top four points we considered important'
}, {
  key: 'password',
  label: 'History',
  description: 'History is AI generated and can have errors.'
}]


</script>
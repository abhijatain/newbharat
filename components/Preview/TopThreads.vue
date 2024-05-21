<template>
     <div class="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-black dark:border-gray-700">
    <h5 class="mb-3 text-base font-bold text-gray-900 md:text-xl dark:text-white">
        <slot></slot> 
    </h5>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
    <ThreadsCard />
    <ThreadsCard />
    <ThreadsCard />
    <ThreadsCard />
    <ThreadsCard />
 
  
    <div class="flex justify-center mt-4">
        <Button label="View More" severity="success" text raised class="h-8 " />
    </div>
    </div>
</template>
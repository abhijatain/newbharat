<template>
    <div class=" container mx-auto flex flex-col gap-4 lg:gap-8 md:p-6 ">
        <TopHeader />
        <div v-for="article in articles" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:mx-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:hover:bg-gray-700 ">

        <iframe class="object-cover w-full rounded-lg h-60 lg:h-full lg:w-[30%]"  :src="article.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{article.title}}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 p-2">{{article.summary}}</p>
        </div>
        </div>
        
    </div>
</template>

<script setup>
const { data: articles } = await useLazyFetch('https://test-am3oxfhvvq-em.a.run.app/api/article/all')
</script>
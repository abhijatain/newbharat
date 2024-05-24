<template>
    <div class=" container mx-auto flex flex-col gap-4 lg:gap-8 md:p-6 ">

        <div v-for="article in articles" class="flex flex-col border-b bg-white    lg:flex-row lg:mx-3  dark:border-gray-700 dark:bg-black  ">
        <img class="object-cover w-full rounded-lg h-40 md:h-60 lg:h-full lg:w-[30%]" v-if="isImageLink(article.youtube)" :src="article.youtube" >
        <iframe v-else class="object-cover w-full rounded-lg h-40 md:h-60 lg:h-full lg:w-[30%]"  :src="article.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="flex flex-col gap-4 p-2 leading-normal">
            
            <h5 class=" text-xl items-center font-bold tracking-tight text-gray-900 dark:text-white">
                {{article.title}}.{{ article.title }}
            </h5>
        <div>

        <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Canada</span>
        <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Sports</span>
        <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Football</span>
        <span class="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>

        </div>
            <!--
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 p-2">{{article.summary}}</p>
            -->
            <div class="flex flex-row justify-between text-sm dark:text-white">
                <div class="my-auto">
                    <p >Tribune . 14 hrs</p>
                </div>
                <div>
                    <Button icon="pi pi-heart" severity="secondary" text rounded aria-label="Like" />
                    <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
                    <Button icon="pi pi-share-alt" severity="secondary" text rounded aria-label="Favorite" />
                </div>
            </div>
        </div>
        
    </div>
        
    </div>
</template>

<script setup>

function isImageLink(url) {
    return /\.(jpeg|jpg|gif|png)$/.test(url)
}

const { data: articles } = await useLazyFetch('https://test-am3oxfhvvq-em.a.run.app/api/article/all')
</script>
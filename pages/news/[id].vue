<template>
        <div class=" container mx-auto flex flex-col gap-4 lg:gap-8 md:p-6 ">
            <TopHeader />
           <NewsCard />
           {{ articles }}
        </div>

</template>


<script setup>
const route = useRoute()

const { data: articles } = await useLazyFetch(`https://test-am3oxfhvvq-em.a.run.app/api/article/${route.params.id}`)

useSeoMeta({
  title: articles.value[0].title,
  ogTitle: 'My Amazing Site',
  description: articles.value[0].summary,
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
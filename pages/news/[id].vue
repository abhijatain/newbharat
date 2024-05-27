<template>
        <div class=" container mx-auto flex flex-col gap-4 lg:gap-8 md:p-6 ">
            <TopHeader />
           <NewsCard />
           {{ articles }}
        </div>

</template>


<script setup>
const route = useRoute()

const { data: articles } = await useFetch(`https://test-am3oxfhvvq-em.a.run.app/api/article/${route.params.id}`)

useSeoMeta({
  title: articles.value[2].title,
  ogTitle: articles.value[2].title,
  description: articles.value[2].summary,
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: articles.value[2].youtube,

  twitterCard: 'summary_large_image',
})
</script>
<template>
        <div class=" container mx-auto flex flex-col gap-4 lg:gap-8 md:p-6 ">
            <TopHeader />
           <NewsCard v-for="(art,index) in articles" 
                :key="index" 
                :title="art.title" 
                :content="art.summary" 
                :source="art.source"
                :image="art.youtube"
                :id="art.id"
                :has_liked="art.has_liked"
                :has_saved="art.has_saved"
                :category="art.category"
                :country="art.country"/>
        </div>

</template>


<script setup>
const route = useRoute()

const { data: articles } = await useFetch(`https://test-am3oxfhvvq-em.a.run.app/api/article/${route.params.id}`)

useSeoMeta({
  title: articles.value[0].title,
  ogUrl:`https://bharatguild.netlify.app/news/${route.params.id}`,
  ogTitle: articles.value[0].title,
  description: articles.value[0].summary,
  ogDescription: articles.value[0].summary,
  ogVideo: articles.value[0].youtube,
  ogImage: articles.value[0].youtube,
  twitterCard: 'summary_large_image',
})
</script>
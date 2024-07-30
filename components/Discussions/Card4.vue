<template>
    <div class="bg-white p-3 dark:bg-black dark:text-white rounded-lg flex flex-col gap-3 max-w-[500px]">
      <!-- Header -->
      <div class="flex flex-row gap-4 rounded-xl my-auto w-full text-start justify-between">
        <div class="flex flex-row gap-4 my-auto text-start">
          <img class="rounded-xl h-8 md:h-12" src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="Article logo">
          <p class="justify-start text-xs w-full">
            <span class="font-bold">{{ article.source }}</span>
            <br> {{ article.date }}
          </p>
        </div>
        <div class="flex flex-row gap-4">
          <Button icon="pi pi-share-alt" severity="secondary" text rounded aria-label="Share" />
          <ButtonLike class="my-auto"/>
          <ButtonSave class="my-auto"/>
        </div>
      </div>
  
      <!-- Title -->
      <div>
        <h1 class="mb-1 merriweather-bold text-xl">
          {{ article.title }}
        </h1>
      </div>
  
      <!-- Progress Bars and Icons -->
      <div class="flex w-full gap-2">
        <ProgressBar :value="article.topicLean" :color="article.topicColor" lean="Left" :text="article.topicLeanText"/>
        <div class="card flex justify-center">
          <i class="pi pi-question-circle" @click="visible = true"></i>
          <Dialog v-model:visible="visible" modal header="Topic Lean Reason" :style="{ width: '25rem' }">
            <div class="flex items-center gap-4 mb-2 mt-1">
              {{ article.topicLeanReason }}
            </div>
          </Dialog>
        </div>
      </div>
  
      <div class="flex w-full gap-2">
        <ProgressBar :value="article.authorLean" :color="article.authorColor" lean="Right" :text="article.authorLeanText"/>
        <div class="card flex justify-center">
          <i class="pi pi-question-circle" @click="visible2 = true"></i>
          <Dialog v-model:visible="visible2" modal header="Editor Lean Reason" :style="{ width: '25rem' }">
            <div class="flex items-center gap-4 mb-4">
              {{ article.authorLeanReason }}
            </div>
          </Dialog>
        </div>
      </div>
  
      <!-- Replies and Views -->
      <div class="flex flex-row gap-2 w-full">
        <div class="flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
          <p class="p-1 font-bold text-xs">
            {{ article.replies }}
          </p><span class="px-1">|</span>
          <p class="p-1 text-xs">
            Replies
          </p>
        </div>
        <div class="flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
          <p class="p-1 font-bold text-xs">
            {{ article.views }}
          </p><span class="px-1">|</span>
          <p class="p-1 text-xs">
            Views
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    article: Object
  });
  
  const visible = ref(false);
  const visible2 = ref(false);
  </script>
  
  <style scoped>
  /* Scoped styles if needed */
  </style>
  
  
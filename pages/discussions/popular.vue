<template>
    <div class="bg-black text-white min-h-screeen flex items-center justify-center">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <div class="text-white text-8xl font-bold opacity-25 transform -rotate-90 origin-bottom-left">
          Most Popular
        </div>
      </div>
      <div class="bg-[#5333ed] p-6 rounded-lg ml-32">
        <h2 class="text-lg font-semibold mb-4 tracking-wide">MOST POPULAR</h2>
        <div class="space-y-6">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="flex items-start space-x-4"
          >
            <span class="text-2xl font-bold text-[#dacbff]">{{ index + 1 }}</span>
            <div>
              <h3 class="text-base font-semibold">{{ article.title }}</h3>
              <p class="text-sm text-gray-200">
                {{ article.author }} | {{ article.date }} | {{ article.comments }} comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const articles = ref([
    {
      title: 'Elon Musk posts deepfake of Kamala Harris that violates X policy',
      author: 'LAUREN FEINER',
      date: 'JUL 29',
      comments: 222,
    },
    {
      title: 'Logitech CEO Hanneke Faber wants your next mouse to last forever',
      author: 'NILAY PATEL',
      date: 'JUL 29',
      comments: 92,
    },
    {
      title:
        'Arc’teryx’s new powered pants could make hikers feel 30 pounds lighter',
      author: 'ANDREW LISZEWSKI',
      date: 'JUL 29',
      comments: 13,
    },
    {
      title:
        'Google’s new Nest Learning Thermostat has an improved UI and ‘borderless’ display',
      author: 'TOM WARREN',
      date: 'JUL 29',
      comments: 33,
    },
    {
      title: 'This $56 Casio watch is a retro step tracking dream',
      author: 'VICTORIA SONG',
      date: 'JUL 28',
      comments: 62,
    },
  ])
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>

   
   
   
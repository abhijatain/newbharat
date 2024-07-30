<template>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-[16px]">
      <div
        :class="[
          'text-xs font-medium text-center p-0.5 leading-none rounded-full h-[16px]',
          darkColor ? `dark:bg-[${color}]` : ''
        ]"
        :style="progressStyle"
      >
        <template v-if="animationCompleted">
          <span :style="{ color: textColor }">{{ displayText }}</span>
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const props = defineProps({
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: '#035397', // Default color if none is provided
    },
    lean: {
      type: String,
      default: 'center', // Default text alignment
    },
    text: {
      type: String,
      default: 'Completed',
    },
  });
  
  const progressWidth = ref('0%');
  const animationCompleted = ref(false);
  
  const progressStyle = computed(() => ({
    width: progressWidth.value,
    transition: 'width 2s ease',
    backgroundColor: props.color, // Set the background color dynamically
  }));
  
  const textColor = computed(() => {
    // Ensure the text color contrasts with the background
    return '#fff'; // Black color for text, adjust as needed
  });
  
  const displayText = computed(() => props.text);
  
  const animateProgress = () => {
    setTimeout(() => {
      progressWidth.value = `${props.value}%`;
      setTimeout(() => {
        animationCompleted.value = true;
      }, 2000); // Delay to match the animation duration
    }, 100); // Delay to allow the component to render before starting the animation
  };
  
  onMounted(() => {
    animateProgress();
  });
  </script>
  
  <style scoped>
  /* Scoped styles if needed */
  </style>
  
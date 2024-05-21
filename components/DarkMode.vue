<template>
    <button type="button"
        class="h-8 p-2 w-8 rounded-full inline-flex justify-center items-center bg-gray-100 dark:bg-surface-800 hover:bg-gray-200 dark:hover:bg-surface-700 text-surface-700 hover:text-surface-900 dark:text-surface-500 dark:hover:text-surface-300 transition-colors duration-200"
        @click="toggleDarkMode">
        D/N
        <!--
        <i class="pi toggle-icon" />
        -->
    </button>
</template>

<script setup>
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
}
</script>

<style>
.toggle-icon:before {
    content: "\e9c8";
}

:root[class="dark"] .toggle-icon:before {
    content: "\e9c7";
}
</style>
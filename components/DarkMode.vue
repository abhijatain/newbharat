<template>
    <button type="button"
        class="h-8 p-2 w-8 rounded-full inline-flex justify-center items-center bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-surface-700 text-surface-700 hover:text-surface-900 dark:text-surface-500 dark:hover:text-surface-300 transition-colors duration-200"
        @click="toggleDarkMode">
        <i class="pi pi-moon" v-if="isDark"></i>
        <i class="pi pi-sun" v-else></i>
    </button>
</template>

<script setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    isDark = !isDark
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
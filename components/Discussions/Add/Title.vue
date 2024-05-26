<template>
    <div class="card flex flex-col justify-center mt-2 w-80 md:w-full md:p-5 gap-4">
       
        <Textarea id="title" v-model="value" autoResize rows="5" cols="30" placeholder="Add a Title" class="text-3xl font-bold" />
        <h1 class="text-3xl font-bold" >Tags</h1>
        <div class="flex flex-col gap-4">
            <SelectCountry class="w-full md:w-[30rem]"/>
            <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-[20rem]" />
        </div>

    </div>
</template>

<script setup>
const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const value = ref('');
</script>
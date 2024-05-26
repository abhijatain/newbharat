
<template>
    <div class="card flex justify-center w-full">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-none inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center', { 'bg-primaryborder-primary*500 dark:border-primary-400': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-user dark:text-white" />
                        </span>
                    </button>
                </template>
                <template #content="{ nextCallback }">
                    <DiscussionsAddTitle />
                    <div class="flex pt-4 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-none inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center', { 'bg-primaryborder-primary*500 dark:border-primary-400': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-star dark:text-white" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <DiscussionsAddContent class="mb-3" />
                    <div class="flex pt-4 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-none inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center', { 'bg-primaryborder-primary*500 dark:border-primary-400': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-id-card dark:text-white" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback }">
                    <div class="shadow-lg md:m-2 rounded-lg">
            <DiscussionsCard />
            <div class="flex flex-col gap-2 p-3 md:flex-row">
                <p class="dark:text-white ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div class="flex flex-row md:flex-col w-full md:w-20 rounded-lg p-2 justify-center gap-3 bg-gray-100 md:gap-1 dark:bg-gray-800 dark:text-white" >
            <p class="text-center text-2xl">+</p>
            <div class="p-1 border  rounded-lg text-xs text-center ">
                <p class="p-1 font-bold">
                    0
                </p><hr>
                <p class="p-1 hidden md:block">
                    Likes
                </p>  
            </div>
            <p class="text-center text-2xl">-</p>
        </div>
            </div>
        </div>
                    <div class="flex pt-4 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Publish"  icon="pi pi-check" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>

<script setup>


const active = ref(0);
const completed = ref(false);
const products = ref();
const name = ref();
const email = ref();
const password = ref();
const option1 = ref(false);
const option2 = ref(false);
const option3 = ref(false);
const option4 = ref(false);
const option5 = ref(false);
const option6 = ref(false);
const option7 = ref(false);
const option8 = ref(false);
const option9 = ref(false);
const option10 = ref(false);

</script>

<style scoped>
.p-stepper {
    flex-basis: 40rem;
}
</style>
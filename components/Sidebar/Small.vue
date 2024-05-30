<template>
    <div class="card flex justify-center">
        <Sidebar v-model:visible="visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-between px-4 pt-4 shrink-0">
                        <span class="inline-flex items-center gap-2">
                            <img src="~/assets/logo.jpg" class="h-12 rounded-full border-2"/>
                            <span class="font-bold text-2xl text-black dark:text-white ">Bharat Guild</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined ></Button>
                        </span>
                    </div>
         <NavItems />
                    <div class="mt-auto" v-if="nameData">
                        <hr class="mb-3 mx-3 border-t-1 border-none border-surface-200 dark:border-surface-700" />
                        <a v-ripple class="m-3 flex items-center cursor-pointer p-3 gap-2 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                            <Avatar :image="imageData" shape="circle" />
                            <span class="font-bold">{{nameData}}</span>
                        </a>
                    </div>
                </div>
            </template>
        </Sidebar>
        <Button icon="pi pi-bars" @click="visible = true" severity="secondary" text rounded aria-label="Sidebar"/>
    </div>
</template>

<script setup>
const visible = ref(false);

const imageData = ref(null)
const nameData = ref(null)

onMounted(() => {
  if (process.client) {
    const storedImage = localStorage.getItem('image')
    const storedName = localStorage.getItem('name')
    if (storedImage) {
      imageData.value = storedImage
      nameData.value = storedName
    }
  }
})
</script>
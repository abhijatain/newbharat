<template>
    <div class="bg-white p-3 dark:bg-black dark:text-white rounded-lg flex flex-col items-center justify-between md:flex-row gap-3  ">
        <div class="flex flex-row gap-4 rounded-xl md:hidden  my-auto w-full text-start justify-between" >
                <div class="flex flex-row gap-4   my-auto text-start">
                    <img class="rounded-xl h-8 md:h-12 " src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="Jese image">
                <p class="justify-start text-xs md:hidden w-full "><span class="font-bold">The Hindu</span> <br> May 12, 2024</p>
                </div>
                <div class="flex flex-row gap-4">
                    
                    <Button icon="pi pi-share-alt" severity="secondary" text rounded aria-label="Share" />
                    <ButtonLike class="my-auto"/>
                    <ButtonSave class="my-auto"/>
                </div>

        </div>
        
           <div class="block md:hidden">
               <h1 class=" mb-1 ">
                The real-time translations are provided by the Parliament secretariat’s dedicated cadre of simultaneous interpreters. Streamed translations will be available starting July 29 on YouTube
               </h1>
               
           </div>
     
        <div class="md:flex flex-row gap-3 hidden " >
            <img class="rounded-xl h-8 md:h-12 " src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="Jese image">
            <div class="">
                <div class="flex flex-col gap-1 p-2">
                   
                    <div class="flex flex-row justify-between">
                        <p class=" text-xs mb-2"><span class="font-bold">The Hindu</span> | May 12, 2024</p>
                        
                    </div>
                    
                    

                </div>
                
                <h5 class=" font-bold mb-2 ">
                    The real-time translations are provided by the Parliament secretariat’s dedicated cadre of simultaneous interpreters. Streamed translations will be available starting July 29 on YouTube
                </h5>
        
            </div>
        </div>
        <!--
       <div class="md:flex -space-x-1 overflow-hidden hidden w-40">
           <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
           <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
           <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
           <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
       </div>
    -->
  
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 md:hidden">
    <div class="bg-[#E8630A] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full dark:bg-[#E8630A]" style="width: 70%">Article content is Right 70%</div>
  </div>

  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 md:hidden">
    <div class="bg-[#035397] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full dark:bg-[#035397]" style="width: 90%">Author tone is Left 90%</div>
  </div>

  <div class="card md:flex justify-around gap-4 items-center hidden ">
    <Knob v-model="value1" valueTemplate="{value}%" :size="70"/>
    <Knob v-model="value2" valueTemplate="{value}%" :size="70" rangeColor="MediumTurquoise"/>
    
    </div>
    
  


       
      
        <div class="flex flex-row  gap-2 w-full md:w-40">
            <div class="md:block flex flex-row my-2 px-1 border rounded-lg text-xs items-center">
               <p class="p-1 font-bold text-xs md:text-center">
                   235
               </p><hr class="hidden md:block"><span class="md:hidden">|</span>
               <p class="p-1 text-xs">
                   Replies
               </p>  
           </div>
           <div class="md:block flex flex-row px-1 my-2 border rounded-lg text-xs items-center ">
               <p class="p-1 font-bold text-xs md:text-center">
                   285K
               </p><hr class="hidden md:block"><span class="md:hidden">|</span>
               <p class="p-1 text-xs" >
                   Views
               </p>  
           </div>
           
           
       </div>
     
     </div>
</template>

<script setup>

const value1 = ref(70);
const value2 = ref(80);
</script>
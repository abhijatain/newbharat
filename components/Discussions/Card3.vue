<template>
  <div class="flex gap-3 flex-col">

  
   <div class="flex w-full gap-2">
    <ProgressBar :value="85" color="#035397" lean="Left" text="Topic covers left views" height="20"/>
    <div class="card flex justify-center">
         <i class="pi pi-question-circle"  @click="visible = true"></i>
        
        <Dialog v-model:visible="visible" modal header="Topic Lean Reason" :style="{ width: '25rem' }">

            <div class="flex items-center gap-4 mb-2 mt-1">
                The article reports on a political development and an interview with a BJP MP, presenting his views and demands in a neutral and factual manner
            </div>
            
        </Dialog>
    </div>
  </div>
  <div class="flex w-full gap-2">
  <ProgressBar :value="65" color="#E8630A" lean="Right" text="Author view's are Right" height="20"/>
  
    <div class="card flex justify-center">
         <i class="pi pi-question-circle"  @click="visible2 = true"></i>
        
        <Dialog v-model:visible="visible2" modal header="Editor Lean Reason" :style="{ width: '25rem' }">
            
            <div class="flex items-center gap-4 mb-4">
                The article does not appear to support or criticize any political party or ideology, but presents the views of a BJP MP and the reaction of the BSP chief, providing a balanced perspective.
            </div>
            
        </Dialog>
    </div>
</div>
</div>
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
               <h1 class=" mb-1  text-xl">
                People will break Modi's 'chakravyuh': Rahul Gandhi on PSBs collecting crores as penalty

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
                
                <h5 class=" mb-2  text-xl ">
                    People will break Modi's 'chakravyuh': Rahul Gandhi on PSBs collecting crores as penalty
                </h5>
        
            </div>
        </div>
        

    
  <!-- 
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 md:hidden">
    <div class="bg-[#E8630A] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full dark:bg-[#E8630A]" style="width: 70%">Article content is Right 70%</div>
  </div>

  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 md:hidden">
    <div class="bg-[#035397] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full dark:bg-[#035397]" style="width: 90%">Author tone is Left 90%</div>
  </div>
  -->
  
  
  


       
      <!-- 
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
           
           
       </div>-->
     
     </div>
</template>

<script setup>

const visible = ref(false);
const visible2 = ref(false);
</script>

<style scoped>
.merriweather-light {
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: normal;
}

.merriweather-regular {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
}

.merriweather-bold {
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: normal;
}

.merriweather-black {
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-style: normal;
}

.merriweather-light-italic {
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: italic;
}

.merriweather-regular-italic {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: italic;
}

.merriweather-bold-italic {
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: italic;
}

.merriweather-black-italic {
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-style: italic;
}


</style>
<template>
    <div class="bg-white md:mx-auto rounded  w-full  overflow-hidden mt-5 dark:bg-black dark:text-white">
      <div class="h-[140px]  bg-gradient-to-b from-cyan-500 to-blue-500"></div>
      <div class="px-5 py-2 flex flex-col gap-3 pb-6">
        <div class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="w-[500px]  rounded-full object-center object-cover">
        </div>
        <div class="">
          <h3 class="text-xl text-slate-900 relative font-bold leading-6 dark:text-white">Abhijeet SIngh</h3>
          <p class="text-sm text-gray-600">@abhijatain</p>
        </div>
       <ProfileTabView />
      </div>
    </div>
    </template>
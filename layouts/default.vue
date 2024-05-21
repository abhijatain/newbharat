<template>
    <NavBar2 class="fixed w-full top-0 left-0 z-50 "/>
    
    <div class="flex flex-row p-5  mx-auto max-w-[1720px] ">
        <div class="w-[25%] hidden lg:block  order-first">
            <SidebarLeft />
        </div>
        
        <slot />
        <div class="w-[40%]  hidden md:flex gap-3 md:flex-col order-last">
            <SidebarRight />
        </div>
    </div>
    <FooterSection />
</template>
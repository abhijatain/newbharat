<template>
    <div class=" flex flex-col container mx-auto gap-3">
        <TopHeader />
    
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
                    235
                </p><hr>
                <p class="p-1 hidden md:block">
                    Likes
                </p>  
            </div>
            <p class="text-center text-2xl">-</p>
        </div>
            </div>
        </div>
       <hr class="m-2">
        <div class="m-3 flex flex-row justify-between align-center">
            <h1 class="text-lg font-bold dark:text-white">Replies</h1>
            <div class="flex flex-row gap-3">
                <Button label="Sort by Date" severity="info" outlined />
                <Button label="Sort by Votes" severity="secondary" outlined />
            </div>
        </div>

    <DiscussionsReply />
    <DiscussionsReply />
    <DiscussionsReply />
    <DiscussionsReply />
    <DiscussionsReply />
    <DiscussionsReply />
    <DiscussionsReply />
   

</div>
</template>
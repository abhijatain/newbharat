
import { PostCard } from '#build/components';
<template>
     <div class="card">
        <TabView class="dark:bg-black">
            <TabPanel header="About">
                <ProfileAbout />
            </TabPanel>
            <TabPanel header="Activity">
                <ProfileStats />
                <h1 class="text-3xl font-bold mb-2">Posts</h1>
                <div class="flex flex-col gap-3">
                <DiscussionsCard2 class="shadow-lg dark:shadow-blue-800/50"/>
                <DiscussionsCard2 class="shadow-lg dark:shadow-blue-800/50"/>
                <DiscussionsCard2 class="shadow-lg dark:shadow-blue-800/50"/>
                <DiscussionsCard2 class="shadow-lg dark:shadow-blue-800/50"/>
            </div>
            </TabPanel>
            
            <TabPanel header="Edit Profile">
                <ProfileForm />
            </TabPanel>
        </TabView>
    </div>
</template>
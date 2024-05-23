
import { PostCard } from '#build/components';
<template>
     <div class="card">
        <TabView class="dark:bg-black">
            <TabPanel header="About">
                <ProfileAbout />
            </TabPanel>
            <TabPanel header="Activity">
                <ProfileStats />
                <h3>Posts</h3>
                <div class="flex flex-col gap-3">
                <PostCard class="shadow-lg"/>
                <PostCard class="shadow-lg"/>
                <PostCard class="shadow-lg"/>
                <PostCard class="shadow-lg"/>
            </div>
            </TabPanel>
            <TabPanel header="Badges">
                <ProfileStats2 />>
            </TabPanel>
            <TabPanel header="Edit Profile">
                <ProfileForm />
            </TabPanel>
        </TabView>
    </div>
</template>
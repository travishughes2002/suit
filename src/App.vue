<template>
    <div>
        <app-header logo-url="trscloud-lite.png" app-title="TRS Toolkit SDK">
            <template #end>
                <anchor-array>
                    <router-link to="/dashboard">Dashboard</router-link>
                    <router-link to="/roadmap">Roadmap</router-link>
                    <router-link to="/ui-test">UI Test</router-link>
                </anchor-array>
            </template>
        </app-header>
        <router-view />
    </div>
</template>
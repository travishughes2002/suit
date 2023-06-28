<template>
    <div>
        <app-header logo-url="trscloud-lite.png" app-title="Slick UI SDK">
            <template #end>
                <anchor-array>
                    <router-link to="/dashboard">Dashboard</router-link>
                    <router-link to="/ui-test">UI Test</router-link>
                </anchor-array>
            </template>
        </app-header>
        <router-view></router-view>
    </div>
</template>
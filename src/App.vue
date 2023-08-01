<template>
    <div>
        <Header logoUrl="trscloud-lite.png" appTitle="Suit SDK">
            <template #end>
                <AnchorArray>
                    <RouterLink to="/dashboard">Dashboard</RouterLink>
                    <RouterLink to="/roadmap">Roadmap</RouterLink>
                    <RouterLink to="/ui-test">UI Test</RouterLink>
                    <RouterLink to="/demo">Demo</RouterLink>
                </AnchorArray>
            </template>
        </Header>
        <RouterView />
    </div>
</template>
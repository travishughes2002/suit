<template>
    <ComponentDemoCard title="Header">
        <div class="header-example-wrapper">
            <Header logoUrl="trscloud-lite.png" appTitle="App title here">
                <template #start>
                    start
                </template>
                <template #middle>
                    middle
                </template>
                <template #end>
                    end
                </template>
            </Header>
        </div>

        <div class="header-example-wrapper">
            <strong>Example 1:</strong>
            <Header logoUrl="trscloud-lite.png" appTitle="App Title Here">
                <template #start>
                    <AnchorArray>
                        <a href="">Hello World</a>
                        <a href="">Hello World</a>
                        <a href="">Hello World</a>
                        <a href="">Hello World</a>
                    </AnchorArray>
                </template>
                <template #end>
                    <ButtonArray>
                        <Button size="sm">Login</Button>
                        <Button size="sm" varient="secondary">Register</Button>
                    </ButtonArray>
                </template>
            </Header>
        </div>

        <div class="header-example-wrapper">
            <strong>Example 2:</strong>
            <Header logoUrl="trscloud-lite.png" appTitle="App Title Here">
                <template #end>
                    <ButtonArray>
                        <Button size="sm">Login</Button>
                        <Button size="sm" varient="secondary">Register</Button>
                    </ButtonArray>
                </template>
            </Header>
        </div>

        <div class="header-example-wrapper">
            <strong>Example 3:</strong>
            <Header logoUrl="trscloud-lite.png" appTitle="Slick UI SDK">
                <template #end>
                    <anchor-array>
                        <a href="">Hello World</a>
                        <a href="">Hello World</a>
                        <a href="">Hello World</a>
                        <a href="">Hello World</a>
                    </anchor-array>
                </template>
            </Header>
        </div>
    </ComponentDemoCard>
</template>

<style lang="scss" scoped>
.header-example-wrapper {
    margin-bottom: 3rem;

    &:nth-last-child(1) {
        margin: 0;
    }
}
</style>
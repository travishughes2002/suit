<template>
    <ComponentDemoCard title="Lists">
        <div class="list-wrapper">
            <strong>Unordered List:</strong>
            <ul>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
            </ul>
        </div>

        <div class="list-wrapper">
            <strong>Ordered List:</strong>
            <ol>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
            </ol>
        </div>
    </ComponentDemoCard>
</template>

<style lang="scss">
    .list-wrapper {
        margin-bottom: 2rem;

        strong {
            margin-bottom: 1rem;
            display: block;
        }
    }
</style>
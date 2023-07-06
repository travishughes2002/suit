<template>
    <div class="anchor-array">
        <slot />
    </div>
</template>

<style lang="scss">
    .anchor-array {
        a {
            margin-right: 1.5rem;

            &:nth-last-child(1) {
                margin-right: 0;
            }
        }
    }
</style>
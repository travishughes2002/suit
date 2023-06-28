<template>
    <div class="vertical-input-group">
        <slot />
    </div>
</template>

<style lang="scss">
.vertical-input-group {
    display: flex;
    width: 100%;

    .input-group {
        margin-right: 1rem;

        &:nth-last-child(1) {
            margin: 0;
        }
    }
}
</style>
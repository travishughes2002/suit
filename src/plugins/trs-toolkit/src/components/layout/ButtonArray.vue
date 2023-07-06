<template>
    <div class="button-array">
        <slot />
    </div>
</template>

<style lang="scss">
.button-array {
    display: flex;
    align-items: center;

    button, .btn {
        margin-right: 1rem;

        &:nth-last-child(1) {
            margin-right: 0;
        }
    }
}
</style>
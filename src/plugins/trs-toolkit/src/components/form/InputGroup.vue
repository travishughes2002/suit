<template>
    <div class="input-group">
        <slot />
    </div>
</template>

<style lang="scss">
.input-group {
    div {
        margin-bottom: 1.5rem;

        &:nth-last-of-child(1) {
            margin-bottom: 0;
        }
    }
}
</style>
<template>
    <div class="vertical-input-group">
        <slot />
    </div>
</template>

<style lang="scss">
.vertical-input-group {
    display: flex;
    width: 100%;

    div {
        // Note: Because VerticalInputGroup is designed to be used with InputGroup we'll need to disable.
        // margin bottom on all inherited components.
        margin: 0 1rem 0 0;

        &:nth-last-child(1) {
            margin-right: 0;
        }
    }
}
</style>
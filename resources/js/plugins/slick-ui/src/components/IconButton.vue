<template>
    <button class="icon-button" @click="clickHandler.toggle()">
        <i :class="faIcon"></i>
    </button>
</template>

<script setup>
import useButtonClickHandler from '../composables/useButtonClickHandler';

const emits = defineEmits(['onClick']);
const clickHandler = useButtonClickHandler(emits, props.href, props.isAnchor);

const props = defineProps({
    faIcon: String,
    href: String,
    isAnchor: Boolean
});
</script>

<style lang="scss">
.icon-button {
    justify-content: center;
    align-items: center;
    display: inline-flex;
    border-radius: var(--icon-button--border-radius);
    background: var(--icon-button--background);
    height: var(--icon-button--size);
    width: var(--icon-button--size);
    border: var(--icon-button--border);

    i {
        color: var(--icon-button--icon-color);
        font-size: var(--icon-button--icon-size);
    }

    &:hover {
        background: var(--icon-button--background-hover);
        cursor: pointer;
    }
}
</style>
<template>
    <button class="dropdown-menu-button" @click="clickHandler.toggle()">
        <i :class="faIcon"></i>
        <slot />
    </button>
</template>

<script setup>
import useButtonClickHandler from '../composables/useButtonClickHandler';

const clickHandler = useButtonClickHandler(emits, props.href, props.isAnchor);
const emits = defineEmits(['onClick']);

const props = defineProps({
    faIcon: String,
    href: String,
    isAnchor: Boolean
});
</script>

<style lang="scss">
.dropdown-menu-button {
    $variable-base: '--dropdown-menu-button--';

    font-size: var(#{$variable-base + 'font-size'});
    color: var(#{$variable-base + 'font-color'});
    padding: var(#{$variable-base + 'padding'});
    border: var(#{$variable-base + 'border'});
    border-radius: var(#{$variable-base + 'border-radius'});
    background: var(#{$variable-base + 'background'});
    text-align: left;
        
    &:hover {
        color: var(#{$variable-base + 'font-color-hover'});;
        background: var(#{$variable-base + 'hover-background'});
        cursor: pointer;
    }

    i {
        color: var(-#{$variable-base + 'font-color'});
        margin-right: 1rem;
    } 
}
</style>
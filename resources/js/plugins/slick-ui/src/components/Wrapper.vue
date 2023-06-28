<template>
    <div class="wrapper" :class="getSizeModifier">
        <slot />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps([
    'size',
]);

const getSizeModifier = computed(() => {
    switch(props.size)
    {
        case 'sm':
            return 'wrapper--size-sm';
        case 'lg':
            return 'wrapper--size-lg';
        default:
            return 'wrapper--size-md';
    }
});
</script>

<style lang="scss">
.wrapper {
    margin: 0 auto;

    @mixin size-base ($size-name) {
        max-width: var(--wrapper--size-#{$size-name});
    }

    &--size-sm {
        @include size-base('sm');
    }

    &--size-md {
        @include size-base('md');
    }

    &--size-lg {
        @include size-base('lg');
    }
}
</style>
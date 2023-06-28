<template>
    <button class="btn" :class="styleModifiers" @click.prevent="clickHandler.toggle()">
        <span>
            <slot />
        </span>
        <i :class="icon"></i>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import useButtonClickHandler from '../composables/useButtonClickHandler';
import UseStrUtil from '../composables/useStrUtil';

const strUtil = UseStrUtil();
const clickHandler = useButtonClickHandler(emits, props.href, props.isAnchor);
const emits = defineEmits(['onClick']);

const props = defineProps({
    varient: String,
    applyFullWidth: Boolean,
    faIcon: String,
    isAnchor: Boolean,
    href: String,
    size: String
});

const styleModifiers = computed(() => {
    let modifierClassArray = [];

    // Varient (e.g the appearance of the button)
    if(props.varient == 'secondary') {
        modifierClassArray.push('btn-secondary');
    } else {
        modifierClassArray.push('btn-primary');
    }

    // Weather or not the button should take up 100% width.
    if(props.applyFullWidth) {
        modifierClassArray.push('btn--full-width');
    }

    // Size (How big or small the button is).
    switch(props.size)
    {
        case 'sm':
            modifierClassArray.push('btn--size-sm');
            break;
        case 'lg':
            modifierClassArray.push('btn--size-lg');
            break;
        default:
            modifierClassArray.push('btn--size-md');
    }

    return modifierClassArray.join(' ');
});

const icon = computed(() => {
    if(!strUtil.isEmpty(props.faIcon)) {
        return props.faIcon;
    }

    return 'fa-solid fa-chevron-right';
});

</script>

<style lang="scss">
@import '../../scss/functions/generate-variable-base';

.btn {
    border-radius: var(--v-button--border-radius);
    height: fit-content;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    i {
        margin-left: 0.5rem;
    }

    /*
        Full width modifier
    */
    &--full-width {
        width: 100%;
    }

    /*
        Size Modifiers
    */
    @mixin button-size-base($size-name) {
        $variable-base: generate-variable-base('v-button', 'size' + '-' + $size-name);
        
        font-size: var(#{$variable-base + 'font-size'});
        padding: var(#{$variable-base + 'padding'});
        min-width: var(#{$variable-base + 'min-width'});
    }

    &--size-lg {
        @include button-size-base('lg');
    }

    &--size-md {
        @include button-size-base('md');
    }

    &--size-sm {
        @include button-size-base('sm');
    }
}

// This mixin allows us to define all our standard button styles at once.
// That way we don't have to write these cursed lines of code twice over.
@mixin button-varient-base($varient-name) {
    $variable-base: generate-variable-base('v-button', 'variation-' + $varient-name);

    background: var(#{$variable-base + 'background'});
    border: var(#{$variable-base + 'border'});

    span {
        color: var(#{$variable-base + 'color'});
    }

    i {
        color: var(#{$variable-base + 'color'});
    }

    &:hover {
        background: var(#{$variable-base + 'background-hover'});
        border: var(#{$variable-base + 'border-hover'});

        span {
            color: var(#{$variable-base + 'color-hover'});
        }

        i {
            color: var(#{$variable-base + 'color-hover'});
        }
    }
}

.btn-primary {
    @include button-varient-base('primary');
}

.btn-secondary {
    @include button-varient-base('secondary');
}
</style>

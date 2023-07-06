<template>
    <div class="message-box" :class="getModifiers" v-show="isShown">
        <div class="message-box__icon">
            <i :class="getIcon"></i>
        </div>
        <div class="message-box__message">
            <p>{{ message }}</p>
        </div>
        <div class="message-box__close-btn" v-show="isClosable == true">
            <button @click="close">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import UseStrUtil from '../composables/useStrUtil';

const strUtil = UseStrUtil();

const isShown = ref(true);

const props = defineProps({
    varient: String,
    isCloseable: Boolean,
    faIcon: String,
    message: String,
    transparrent: Boolean,
    isClosable: Boolean
});

/**
 * Construct a list of modifiers to apply to our message box.
 */
const getModifiers = computed(() => {
    let modifiersArray = [];
    let varientConstraints = ['success', 'error', 'warning', 'info'];

    function checkVarient() {
        return !strUtil.isEmpty(props.varient) && strUtil.compareArray(props.varient, varientConstraints);
    }

    if(checkVarient()) {
        modifiersArray.push('message-box-' + props.varient);
    } else {
        modifiersArray.push('message-box-info');
    }

    if(props.transparrent) {
        if(checkVarient()) {
            modifiersArray.push('message-box-' + props.varient + '--transparent');
        } else {
            modifiersArray.push('message-box-info--transparent');
        }
    }

    return modifiersArray.join(' ');
});

/**
 * Either returns the default or custom icon.
 */
const getIcon = computed(() => {
    if(!strUtil.isEmpty(props.faIcon)) {
        return props.faIcon;
    } else {
        return getDefaultIcon();
    }
});

/**
 * Returns the default icon based on variation.
 */
function getDefaultIcon() {
    switch(props.varient) {
        case 'success':
            return 'fa-solid fa-check';
            break;
        case 'error':
            return 'fa-solid fa-xmark';
            break;
        case 'warning':
            return 'fa-solid fa-triangle-exclamation';
            break;
        default:
            return 'fa-solid fa-question';
            break;
    }
}

function close() {
    isShown.value = false;
}
</script>

<style lang="scss">
@import '../../scss/functions/generate-variable-base';

.message-box {
    display: grid;
    grid-template-columns: [first] 50px auto [end] 50px;
    border-radius: var(--message-box--border-radius);

    @mixin flexbox-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__icon {
        @include flexbox-center;

        font-size: var(--message-box--icon-font-size);
        border-radius: var(--message-box--icon-wrapper--radius) 0 0 var(--message-box--icon-wrapper--radius);
    }

    &__message > p {
        margin: 0;
    }

    &__close-btn {
        @include flexbox-center;

        button {
            background-color: unset;
            border: none;
            padding: 0;
            font-size: var(--message-box--close-button-color-size);
        }
    }
}

/*
    Variation Modifiers
*/

@mixin variation-base($variable-base) {
    background: var(#{$variable-base + 'background'});
    border: var(#{$variable-base + 'border'});

    .message-box__icon {
        background: var(#{$variable-base + 'icon-wrapper-background'});

        i {
            color: var(#{$variable-base + 'icon-color'});
        }
    }

    .message-box__message > p {
        color: var(#{$variable-base + 'message-font-color'});
    }

    .message-box__close-btn > button {
        color: var(#{$variable-base + 'close-button-color'});

        &:hover {
            cursor: pointer;
            color: var(#{$variable-base + 'close-button-color-hover'});
        }
    }
}

@mixin variation-standard($varient-name) {
    $variable-base: generate-variable-base('message-box', 'varient-' + $varient-name);

    @include variation-base($variable-base);

    // A quick hack so we can override the padding for all transparent varients at once.
    .message-box__message {
        padding: var(--message-box--message-padding);
    }
}

@mixin variation-transparent($varient-name) {
    $variable-base: generate-variable-base('message-box', 'varient-' + $varient-name + '--transparent-override');

    @include variation-base($variable-base);
    
    .message-box__message {
        padding: var(--message-box--transparent-override--message-padding);
    }
}

.message-box-info {
    @include variation-standard('info');

    &--transparent {
        @include variation-transparent('info');
    }
}

.message-box-success {
    @include variation-standard('success');

    &--transparent {
        @include variation-transparent('success');
    }
}

.message-box-warning {
    @include variation-standard('warning');

    &--transparent {
        @include variation-transparent('warning');
    }
}

.message-box-error {
    @include variation-standard('error');

    &--transparent {
        @include variation-transparent('error');
    }
}

</style>
<template>
    <div class="form-checkbox-input">
        <input type="checkbox" :name="name" :value="value" @change="updateModelValue">
        <label :for="name">{{ label }}</label>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const value = computed(() => props.modelValue);

const props = defineProps({
    checked: Boolean,
    modelValue: Boolean,
    label: String,
    name: String
});

function updateModelValue(event) {
    let value = event.target.checked;
    emit('update:modelValue', value);
}
</script>

<style lang="scss">
@import '../../../scss/mixins/input-base';
@import '../../../scss/mixins/fa-pesudo-icon-base';

.form-checkbox-input {
    display: flex;

    $base-name: '--form--checkbox--';

    input {
        margin: 0 0.8rem 0 0;
        appearance: none;
        position: relative;
        background: var(#{$base-name + 'background'});
        border-radius: var(#{$base-name + 'border-radius'});
        border: var(#{$base-name + 'border'});
        font-size: var(#{$base-name + 'font-size'});
        color: var(#{$base-name + 'font-color'});

        width: var(#{$base-name + 'box-size'});
        height: var(#{$base-name + 'box-size'});

        &:hover {
            cursor: pointer;
            border: var(#{$base-name + 'border-hover'});
            background-color: var(#{$base-name + 'background-hover'});
        }
        
        &:checked {
            background: var(#{$base-name + 'background-checked'});
            border: var(#{$base-name + 'border-checked'});

            &::before {
                @include fa-pesudo-icon-base;
                color: var(#{$base-name + 'icon-color'});
                content: var(#{$base-name + 'fa-icon-unicode'});
                font-size: var(#{$base-name + 'icon-size'});

                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    label {
        margin: auto 0;
    }
}
</style>
<template>
    <textarea class="v-text-area" v-model="value"></textarea>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps([
    'modelValue',
]);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    }
})
</script>

<style lang="scss">
.v-text-area {
    display: block;
    width: 100%;
    resize: vertical;
    min-height: 20rem;
    outline: unset;
    background-color: var(--v-textarea--background);
    color: var(--v-textarea--font-color);
    border: var(--v-textarea--border);
    border-radius: var(--v-textarea--border-radius);
    padding: var(--v-textarea--padding);
    font-size: var(--v-textarea--font-size);
    font-family: var(--v-textarea--font-family);
    font-weight: 100;
}
</style>
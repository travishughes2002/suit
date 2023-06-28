<template>
    <input class="v-input" :placeholder="placeholder" :type="getType" v-model="value">
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps([
    'modelValue',
    'type',
    'placeholder',
]);

const getType = computed(() => {
    if(props.type == null || undefined || '') {
        return 'text';
    }

    return props.type;
});

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
.v-input {
    width: 100%;
    display: block;
    outline: none;
    background-color: var(--v-input--background-color);
    border-radius: var(--v-input--border-radius);
    border: var(--v-input--border);
    padding: var(--v-input--padding);

    font-size: var(--v-input--font-size);
    color: var(--v-input--font-color);
    font-family: var(--v-input--font-family);

    &:hover {
        border: var(--v-input--border-hover);
        background-color: var(--v-input--background-color-hover);
    }
}
</style>
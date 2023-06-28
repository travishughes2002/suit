<template>
    <input class="dialog-input" :placeholder="placeholder" :type="getType" v-model="value">
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
.dialog-input {
    font-size: 1.2rem;
}
</style>
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
@import '../../../scss/mixins/input-base';

.v-text-area {
    @include input-base('v-textarea');
    resize: vertical;
    min-height: 20rem;
}
</style>
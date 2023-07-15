<template>
    <div class="text-area">
        <label v-show="label" :for="name">{{ label }}</label>
        <textarea v-model="value" :name="name"></textarea>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: String,
    label: String,
    name: String
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
@import '../../../scss/mixins/input-base';

.text-area {
    textarea {
        @include input-base('form--textarea');
        resize: vertical;
        min-height: 20rem;
    }
}
</style>
<template>
    <div class="text-input">
        <label v-show="label">{{ label }}</label>
        <input :placeholder="placeholder" :type="getType" v-model="value">
    </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    label: String,
    modelValue: String,
    type: String,
    placeholder: String,
    name: String
});

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
@import '../../../scss/mixins/input-base';

.text-input {
    width: 100%;
    
    input {
        @include input-base('form--text-input');
    }
}
</style>
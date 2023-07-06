<template>
    <div class="toolkit-element-container">
        <strong>{{ title }}</strong>
        <div class="toolkit-element-container__element-area">
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
});
</script>

<style lang="scss">
    .toolkit-element-container {
        margin-bottom: 2rem;

        strong {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }

        &__element-area {
            padding: 2rem;
            background-color: #212224;
            // border: 1px solid #212424;
            border-radius: 10px;
        }
    }
</style>
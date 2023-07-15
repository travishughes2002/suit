<template>
    <div class="toolkit-test-card">
        <strong class="toolkit-test-card__title">{{ title }}</strong>
        <div class="toolkit-test-card__element-area">
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
.toolkit-test-card {
    margin-bottom: 2rem;

    &__title {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        display: block;
    }

    &__element-area {
        padding: 2rem;
        background-color: rgba(22, 22, 22, 0.646);
        border-radius: 10px;
    }
}
</style>
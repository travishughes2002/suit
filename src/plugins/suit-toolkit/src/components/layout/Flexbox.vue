<template>
    <div class="flexbox">
        <slot />
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    height: String,
    width: String,
    justifyContent: String,
    alignItems: String,
    flexDirection: String
});
</script>

<style lang="scss">
.flexbox {
    display: flex;
    height: v-bind('height');
    width: v-bind('width');
    justify-content: v-bind('justifyContent');
    align-items: v-bind('alignItems');
    flex-direction: v-bind('flexDirection');
}
</style>
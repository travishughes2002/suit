<template>
    <div class="scroll-area" :style="getHeight">
        <slot />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    maxHeight: Number
});

const getHeight = computed(() => {
    if(props.maxHeight == null || undefined) {
        return 'height: ' + 800 + 'px;';
    } else {
        return this.maxHeight;
    }
})
</script>

<style lang="scss">
.scroll-area {
    overflow-y: scroll;
    overflow: auto;
}
</style>
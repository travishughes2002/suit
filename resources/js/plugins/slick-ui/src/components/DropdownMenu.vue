<template>
    <div class="dropdown-menu">
        <div class="dropdown-menu__trigger">
            <icon-button :faIcon="faIcon" @onClick="toggle" />
        </div>
        <span v-show="isOpen == true">
            <div class="dropdown-menu__content" :class="getAnchorPosition">
                <slot />
            </div>
        </span>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const isOpen = ref(false);

const props = defineProps({
    faIcon: String,
    anchorPosition: String
});

const getAnchorPosition = computed(() => {
    if(props.anchorPosition == 'right') {
        return 'dropdown-menu__content--anchor-right';
    }
});

function toggle() {
    isOpen.value = !isOpen.value;
}
</script>

<style lang="scss">
.dropdown-menu {
    position: relative;
    width: fit-content;

    &__content {
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column;
        margin: var(--dropdown-menu--margin);
        background-color: var(--dropdown-menu--background);
        padding: var(--dropdown-menu--padding);
        min-width: var(--dropdown-menu--min-width);
        box-shadow: var(--dropdown-menu--box-shadow);
        border: var(--dropdown-menu--border);
        border-radius: var(--dropdown-menu--border-radius);

        .dropdown-menu-button {
            margin-bottom: 0.5rem;

            &:nth-last-child(1) {
                margin-bottom: 0;
            }
        }
    }

    &__content--anchor-right {
        right: 0;
    }
}
</style>
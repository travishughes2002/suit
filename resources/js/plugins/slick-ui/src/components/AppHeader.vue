<template>
    <div class="header">
        <!-- Header Start -->
        <div class="header__start">
            <div class="header__start-logo">
                <img :src="logoUrl" alt="">
                <span class="header__start-seperator"></span>
                <span class="header__start-sub-header">{{ appTitle }}</span>
            </div>
            <div class="header__start-content">
                <slot name="start" />
            </div>
        </div>
        <!-- /Header Start -->

        <!-- Header Middle -->
        <div class="header__middle">
            <slot name="middle" />
        </div>
        <!-- /Header Middle -->

        <!-- Header End -->
        <div class="header__end">
            <slot name="end" />
        </div>
        <!-- /Header End -->
    </div>
</template>

<script setup>
const props = defineProps({
    logoUrl: String,
    appTitle: String,
});
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--header--background);
    border: var(--header--border);
    padding: var(--header--padding);

    &__start {
        display: flex;
        align-items: center;
    }

    &__start-seperator {
        height: 30px;
        margin: 0 1.2rem;
        display: block;
        width: 1px;
        background-color: white;
    }

    &__start-logo {
        display: flex;
        align-items: center;
        margin-right: 2rem;

        img {
            width: var(--header--logo-width);
            height: auto;
        }
    }

    &__start-sub-header {
        font-family: 'Roboto', Arial;
        // text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 200;
    }
}
</style>
<template>
    <div class="dialog-window" :class="getModifiers">
        <div class="dialog-window__inner">
            <div class="dialog-window__header">
                <slot name="header" />
            </div>
            <div class="dialog-window__body">
                <slot name="body" />
            </div>
            <div class="dialog-window__footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    props: {
        size: String
    },

    setup(props) {
        const isOpen = ref(false);

        const getModifiers = computed(() => {
            let modifiersArray = [];

            // Get size modifier
            switch(props.size)
            {
                case 'sm':
                modifiersArray.push('dialog-window--size-sm')
                    break;
                case 'lg':  
                modifiersArray.push('dialog-window--size-lg')
                    break;
                default:
                modifiersArray.push('dialog-window--size-md')
                    break;
            }

            if(isOpen.value == true) {
                modifiersArray.push('dialog-window--is-open');
            }

            return modifiersArray.join(' ');
        });

        /**
         * Toggle the dialog on/off.
         */
        function toggle() {
            isOpen.value = !isOpen.value;
        }

        /**
         * Open the dialog.
         */
        function open() {
            isOpen.value = true;
        }

        /**
         * Close the dialog.
         */
        function close() {
            isOpen.value = false;
        }

        return { toggle, open, close, getModifiers }
    }
}
</script>

<style lang="scss">
@import '../../scss/mixins/model-window';

.dialog-window {
    @include model-window('dialog-window');

    &__inner {
        padding: 2rem;
        background-color: #26292c;
        width: 600px;
        border: none;
        border-radius: 13px;
    }

    &__header {
        margin-bottom: 2rem;
            
        * {
            text-align: center;
        }
    }

    &__footer {
        margin-top: 2rem;
    }

    &--is-open {
        display: flex;
    }
}
</style>
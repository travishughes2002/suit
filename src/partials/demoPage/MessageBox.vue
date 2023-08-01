<template>
    <div class="message-box-demo">
        <ComponentDemoCard class="message-box-demo__card" title="MessageBox">
            <MessageBox :message="exampleText" />
            <MessageBox varient="success" :message="exampleText" />
            <MessageBox varient="warning" :message="exampleText" />
            <MessageBox varient="error" :message="exampleText" />

            <strong>Different varients with transparent enabled:</strong>
            <MessageBox :transparrent="true" :message="exampleText" />
            <MessageBox varient="success" :transparrent="true" :message="exampleText" />
            <MessageBox varient="warning" :transparrent="true" :message="exampleText" />
            <MessageBox varient="error" :transparrent="true" :message="exampleText" />

            <strong>Closeable Message Box:</strong>
            <MessageBox varient="warning" :transparrent="true" :isClosable="true" :message="exampleText" />

            <strong>Custom Icon:</strong>
            <MessageBox varient="error" :isClosable="true" faIcon="fa-solid fa-cheese" :message="exampleText" />
            <MessageBox varient="error" :transparrent="true" :isClosable="true" faIcon="fa-solid fa-cheese" :message="exampleText" />
        </ComponentDemoCard>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const exampleText = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam');
</script>

<style lang="scss" scoped>
.message-box-demo {
    &__card {
        .message-box {
            margin-bottom: 1rem;
        }

        strong {
            margin: 2rem 0 1rem 0;
        }
    }
}
</style>
<template>
    <ComponentDemoCard title="Form.TextArea">
        <form>
            <Form.InputGroup>
                <Form.TextArea v-model="textArea" label="Text Area" name="textarea"/>
            </Form.InputGroup>
        </form>
        <p>Result: {{ textArea }}</p>
    </ComponentDemoCard>
</template>

<script setup>
import { ref } from 'vue';

const textArea = ref("Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id, ipsa dicta aut architecto ipsum fuga ea odio expedita laborum veritatis temporibus? Officia labore laudantium molestiae perferendis nam qui a.");
</script>
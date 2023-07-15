<template>
    <ComponentDemoCard title="Form.TextInput">
        <form>
            <Form.InputGroup>
                <Form.TextInput v-model="textInput" label="Text Input" name="testInput" />

                    <Form.VerticalInputGroup>
                        <Form.TextInput v-model="textInput" label="Email Input" type="email" name="testEmailInput" />
                        <Form.TextInput v-model="textInput" label="Password Input" type="password" name="testPasswordInput" />
                    </Form.VerticalInputGroup>
            </Form.InputGroup>
            <p>Result: {{ textInput }}</p>
        </form>
    </ComponentDemoCard>
</template>

<script setup>
import { ref } from 'vue';

const textInput = ref("Change me!");
</script>
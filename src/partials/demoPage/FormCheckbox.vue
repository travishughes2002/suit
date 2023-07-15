<template>
    <ComponentDemoCard title="Form.Checkbox">
        <form>
            <Form.InputGroup>
                <Form.Checkbox v-model="checkbox" label="Tick Me!" name="checkboxTest"/>
            </Form.InputGroup>
            <p>Result: {{ checkbox }}</p>
        </form>
    </ComponentDemoCard>
</template>

<script setup>
import { ref } from 'vue';

const checkbox = ref(false);
</script>
<template>
    <div class="demo-page">
        <ScrollArea>
            <Wrapper size="lg">
                <h1>Demo</h1>

                <DemoPartials.Headings />
                <DemoPartials.Paragragh />
                <DemoPartials.Lists />
                <DemoPartials.Table />
                <DemoPartials.Buttons />
                <DemoPartials.Header />
                <DemoPartials.ButtonArray />
                <DemoPartials.AnchorArray />
                <DemoPartials.DropdownMenu />
                <DemoPartials.Flexbox />
                <DemoPartials.FormTextInput />
                <DemoPartials.FormTextArea />
                <DemoPartials.FormCheckbox />
                <DemoPartials.MessageBox />
            </Wrapper>
        </ScrollArea>
    </div>
</template>

<script setup>
import * as DemoPartials from '../partials/demoPage/componentDemoPartials.js';
import { ScrollArea } from '../plugins/trs-toolkit/src/components/layout/layoutComponents';
</script>
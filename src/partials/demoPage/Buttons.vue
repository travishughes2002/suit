<template>
    <div class="buttons-demo-partial">
        <ComponentDemoCard class="buttons-demo-partial__card" title="Buttons">
            <div class="button-example-wrapper">
                <ButtonArray>
                    <Button>Hello World</Button>
                    <Button varient="secondary">Hello World</Button>
                </ButtonArray>
            </div>

            <div class="button-example-wrapper">
                <strong>Size variation</strong>
                <ButtonArray>
                    <Button size="sm">Hello World</Button>
                    <Button>Medium (Default)</Button>
                    <Button size="lg">Large</Button>
                </ButtonArray>
            </div>

            <div class="button-example-wrapper">
                <strong>Custom icon</strong>
                <ButtonArray>
                    <Button faIcon="fa-solid fa-cheese">Hello World</Button>
                    <Button faIcon="fa-solid fa-cookie">Medium (Default)</Button>
                    <Button faIcon="fa-solid fa-bowl-food" varient="secondary">Large</Button>
                </ButtonArray>
            </div>

            <div class="button-example-wrapper">
                <strong>Full width applied</strong>
                <Button :applyFullWidth="true">Hello World</Button>

                <br>
                <br>

                <strong>Full width applied (Example 2)</strong>
                <ButtonArray>
                    <Button :applyFullWidth="true">Hello World</Button>
                    <Button :applyFullWidth="true" varient="secondary">Hello World</Button>
                </Buttonarray>
            </div>

            <div class="button-example-wrapper">
                <strong>Icon Button</strong>
                <IconButton faIcon="fa-solid fa-user" />
            </div>

        </ComponentDemoCard>
    </div>
</template>

<style lang="scss" scoped>
.buttons-demo-partial {
    &__card {
        .button-example-wrapper {
            padding: 3rem 0;
            border-bottom: 2px solid #a0a0a0;

            strong {
                margin-top: 0;
            }

            &:nth-child(1) {
                padding-top: 0;
            }

            &:nth-last-child(1) {
                border: none;
                padding-bottom: 0;
            }
        }
    }
}
</style>
<template>
    <div class="flexbox-demo">
        <ComponentDemoCard title="Flexbox">
            <strong>Useage Example:</strong>
            <Flexbox justifyContent="space-between">
                <div class="flexbox-demo__card">
                    <strong>Example col 1:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas corporis, ratione esse blanditiis ullam molestiae sed reprehenderit quisquam illum id cupiditate minus tempore, eligendi nisi culpa et non nemo corrupti!</p>
                </div>
                <div class="flexbox-demo__card">
                    <strong>Example col 2:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas corporis, ratione esse blanditiis ullam molestiae sed reprehenderit quisquam illum id cupiditate minus tempore, eligendi nisi culpa et non nemo corrupti!</p>
                </div>
                <div class="flexbox-demo__card">
                    <strong>Example col 3:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas corporis, ratione esse blanditiis ullam molestiae sed reprehenderit quisquam illum id cupiditate minus tempore, eligendi nisi culpa et non nemo corrupti!</p>
                </div>
            </Flexbox>
        </ComponentDemoCard>
    </div>
</template>

<style lang="scss" scoped>
.flexbox-demo {
    &__card {
        text-align: center;
        margin-right: 1rem;
        padding: 1rem;
        background-color: rgba(116, 116, 116, 0.275);
        border-radius: 10px;

        &:nth-last-child(1) {
            margin-right: 0;
        }
    }
}
</style>
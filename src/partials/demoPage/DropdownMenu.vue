<template>
    <ComponentDemoCard title="Dropdown Menu">
        <Flexbox justifyContent="space-between">
            <div>
                <strong>Anchor position left:</strong>
                <DropdownMenu faIcon="fa-solid fa-chevron-down">
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <dropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                </DropdownMenu>
            </div>

            <div>
                <strong>Anchor position right:</strong>
                <DropdownMenu faIcon="fa-solid fa-chevron-down" anchorPosition="right">
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <dropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                </DropdownMenu>
            </div>

            <div>
                <strong>Custom Icon:</strong>
                <DropdownMenu faIcon="fa-solid fa-user">
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user" :isAnchor="true" href="/">I'm an anchor</DropdownMenuButton>
                    <DropdownMenuButton faIcon="fa-solid fa-user">Hello World</DropdownMenuButton>
                </DropdownMenu>
            </div>
        </Flexbox>
    </ComponentDemoCard>
</template>
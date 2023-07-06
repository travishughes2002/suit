<template>
    <div class="toolkit-test">
        <wrapper size="lg">
            <br>
            <br>
            <h1>Typography and UI Component test</h1>
            <p>This is a test component used for testing Slick UI.</p>
            <br>
            <br>
            <br>

            <toolkit-element-container title="Headings">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
            </toolkit-element-container>

            <toolkit-element-container title="Paragragh">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellat vero, cum ipsam animi ducimus, adipisci aspernatur debitis eaque corrupti magnam voluptatibus doloribus est molestias quibusdam cupiditate nemo vel! Aut.</p>
            </toolkit-element-container>

            <toolkit-element-container title="Lists">
                <p>Unordered List</p>
                <ul>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                </ul>
                <br>
                <p>Ordered List</p>
                <br>
                <ol>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                </ol>
            </toolkit-element-container>

            <toolkit-element-container title="Table">
                <table>
                    <thead>
                        <tr>
                            <th>table heading col</th>
                            <th>table heading col</th>
                            <th>table heading col</th>
                            <th>table heading col</th>
                            <th>table heading col</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                        <tr>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                            <td>row content</td>
                        </tr>
                    </tbody>
                </table>
            </toolkit-element-container>

            <toolkit-element-container title="hr">
                <hr>
            </toolkit-element-container>

            <toolkit-element-container title="Buttons">
                <button-array>
                    <v-button>Hello World</v-button>
                    <v-button varient="secondary">Hello World</v-button>
                </button-array>

                <hr>

                <p>Anchor Route & Event Emit</p>
                <button-array>
                    <v-button :isAnchor="true" href="/dashboard">I am set to anchor</v-button>
                    <v-button varient="secondary">I am set to emit</v-button>
                </button-array>

                <hr>

                <p>Different size variations</p>
                <button-array>
                    <v-button size="sm">Hello World</v-button>
                    <v-button>Medium (Default)</v-button>
                    <v-button size="lg">Large</v-button>
                </button-array>

                <hr>

                <p>Custom icon</p>
                <button-array>
                    <v-button faIcon="fa-solid fa-cheese">Hello World</v-button>
                    <v-button faIcon="fa-solid fa-cookie">Medium (Default)</v-button>
                    <v-button faIcon="fa-solid fa-bowl-food" varient="secondary">Large</v-button>
                </button-array>

                <hr>

                <p>Full width applied</p>
                <v-button :applyFullWidth="true">Hello World</v-button>
                
                <br>
                <br>
                <p>Full width applied (Example 2)</p>

                <button-array>
                    <v-button :applyFullWidth="true">Hello World</v-button>
                    <v-button :applyFullWidth="true" varient="secondary">Hello World</v-button>
                </button-array>

                <br>
                <br>
                <p>Icon Button</p>
                <icon-button faIcon="fa-duotone fa-gear"/>

            </toolkit-element-container>

            <toolkit-element-container title="Header">
                <app-header logo-url="trscloud-lite.png" app-title="Slick UI SDK">
                    <template #start>
                        start
                    </template>
                    <template #middle>
                        middle
                    </template>
                    <template #end>
                        end
                    </template>
                </app-header>

                <br>
                <br>
                <p>Example 1:</p>

                <app-header logo-url="trscloud-lite.png" app-title="Slick UI SDK">
                    <template #start>
                        <anchor-array>
                            <a href="">Hello World</a>
                            <a href="">Hello World</a>
                            <a href="">Hello World</a>
                            <a href="">Hello World</a>
                        </anchor-array>
                    </template>
                    <template #end>
                        <button-array>
                            <v-button size="sm">Login</v-button>
                            <v-button size="sm" varient="secondary">Register</v-button>
                        </button-array>
                    </template>
                </app-header>

                <br>
                <br>
                <p>Example 2:</p>

                <app-header logo-url="trscloud-lite.png" app-title="Slick UI SDK">
                    <template #end>
                        <button-array>
                            <v-button size="sm">Login</v-button>
                            <v-button size="sm" varient="secondary">Register</v-button>
                        </button-array>
                    </template>
                </app-header>

                <br>
                <br>
                <p>Example 3:</p>

                <app-header logo-url="trscloud-lite.png" app-title="Slick UI SDK">
                    <template #end>
                        <anchor-array>
                            <a href="">Hello World</a>
                            <a href="">Hello World</a>
                            <a href="">Hello World</a>
                            <a href="">Hello World</a>
                        </anchor-array>
                    </template>
                </app-header>
            </toolkit-element-container>

            <toolkit-element-container title="Button Array">
                <button-array>
                    <v-button>Login</v-button>
                    <v-button varient="secondary">Register</v-button>
                </button-array>
            </toolkit-element-container>

            <toolkit-element-container title="Anchor Array">
                <anchor-array>
                    <a href="">Hello World</a>
                    <a href="">Hello World</a>
                    <a href="">Hello World</a>
                    <a href="">Hello World</a>
                </anchor-array>
            </toolkit-element-container>

            <toolkit-element-container title="Dropdown Menu">
                <p>Anchor position left:</p>
                <dropdown-menu faIcon="fa-solid fa-chevron-down">
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                </dropdown-menu>

                <br>
                <br>
                <br>

                <p>Anchor position right:</p>
                <dropdown-menu faIcon="fa-solid fa-chevron-down" anchorPosition="right">
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                </dropdown-menu>

                <br>
                <br>
                <br>

                <p>Custom Icon:</p>
                <dropdown-menu faIcon="fa-solid fa-user">
                    <dropdown-menu-button faIcon="fa-solid fa-user">Hello World</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user" :isAnchor="true" href="/">I'm an anchor</dropdown-menu-button>
                    <dropdown-menu-button faIcon="fa-solid fa-user" @onClick="alert">I'm a button.</dropdown-menu-button>
                </dropdown-menu>
            </toolkit-element-container>

            <toolkit-element-container title="Dialog Window">
                <v-button @onClick="openDialog">Click Me!</v-button>

                <dialog-window ref="dialogWindow" size="md">
                    <template #header>
                        <strong>Hello World!</strong>
                    </template>
                    <template #body>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores non minus reprehenderit dicta itaque quisquam omnis suscipit consectetur officiis aut. Aliquam, quas alias. Consequatur dolor explicabo sit doloribus ex neque?</p>
                        <p>{{ dialogInputValue }}</p>
                        <dialog-input v-model="dialogInputValue" placeholder="Write some text in me ;)"/>
                    </template>
                    <template #footer>
                        <button-array>
                            <v-button :applyFullWidth="true" @onClick="alert(dialogInputValue)">Send Alert</v-button>
                            <v-button :applyFullWidth="true" varient="secondary" @onClick="closeDialog">Cancel</v-button>
                        </button-array>
                    </template>
                </dialog-window>
            </toolkit-element-container>

            <toolkit-element-container title="Forms">
                <strong>Inputs:</strong>
                <br>
                <field-group>
                    <label for="">Text Input</label>
                    <v-input v-model="textInput"/>
                </field-group>
                <p>{{ textInput }}</p>

                <hr>
                
                <strong>Input (with vertical group):</strong>
                <br>

                <form action="">
                    <vertical-input-group>
                        <field-group>
                            <label for="">Text Input</label>
                            <v-input />
                        </field-group>

                        <field-group>
                            <label for="">Text Input</label>
                            <v-input />
                        </field-group>
                    </vertical-input-group>

                    <br>
                    <hr>
                    <strong>Text Area:</strong>
                    <br>

                    <field-group>
                        <label for="">Text Area</label>
                        <v-text-area v-model="textArea" />
                    </field-group>
                    <p>{{ textArea }}</p>

                    <br>
                    <hr>
                    <strong>Text Area:</strong>
                    <br>
                </form>
            </toolkit-element-container>

            <toolkit-element-container title="Tab Menu">
                
            </toolkit-element-container>

            <toolkit-element-container title="Message Box's">
                <message-box message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="success" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="warning" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="error" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <p>Different varients with transparent enabled:</p>
                <br>
                <message-box :transparrent="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="success" :transparrent="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="warning" :transparrent="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="error" :transparrent="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <p>Closeable Message Box:</p>
                <br>
                <message-box varient="warning" :transparrent="true" :isClosable="true" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <b></b>
                <p>Custom Icon:</p>
                <br>
                <message-box varient="error" :isClosable="true" faIcon="fa-solid fa-cheese" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
                <br>
                <br>
                <message-box varient="error" :transparrent="true" :isClosable="true" faIcon="fa-solid fa-cheese" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsam laboriosam nisi iste provident ratione magnam vitae voluptatem ullam" />
            </toolkit-element-container>

            <!-- <board-list-panel /> -->
        </wrapper>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// const dialog = reactive(null);
const dialogInputValue = ref('hello world!');

function alert() {
    alert('hello world');
}
</script>

<script>
export default {
    data: function() {
        return {
            textInput: 'Change me!',
            textArea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed mi lectus. Donec egestas massa malesuada risus malesuada sodales ac quis erat. Sed consequat lectus condimentum elit fringilla, vitae vehicula odio viverra. Cras ultricies mi quis orci volutpat auctor. Pellentesque a erat pharetra, dictum dolor non, consequat lacus. Suspendisse potenti. Nullam in turpis sit amet enim fermentum cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',

            form: {
                
            }
        }
    },

    methods: {
        closeDialog: function() {
            this.$refs.dialogWindow.close();
        },

        openDialog: function() {
            this.$refs.dialogWindow.open();
        }
    }
}
</script>

<style lang="scss">
    .toolkit-test {
        hr {
            border: unset;
            border-bottom: 1px solid #090909;
            margin: 3rem 0;
        }
    }
</style>
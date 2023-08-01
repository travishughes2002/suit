import ToolkitElementContainer from './components/dev/ToolkitElementContainer.vue';
import ToolkitTest from './components/dev/ToolkitTest.vue';

import * as Form from './components/form/formComponents.js';
import * as Layout from './components/layout/layoutComponents.js';

import Header from './components/Header.vue';
import DialogWindow from './components/DialogWindow.vue';
import DialogInput from './components/DialogInput.vue';
import DropdownMenu from './components/DropdownMenu.vue';
import DropdownMenuButton from './components/DropdownMenuButton.vue';
import IconButton from './components/IconButton.vue';
import MessageBox from './components/MessageBox.vue';
import Button from './components/Button.vue';
import Wrapper from './components/Wrapper.vue';

/**
* Create our plugin object instance.
*/
export default function(app) {
    /**
    * Import our components here.
    * 
    * TODO: Research automatic component importing.
    */
    app.component('ToolkitElementContainer', ToolkitElementContainer);
    app.component('ToolkitTest', ToolkitTest);

    app.component('Form.TextInput', Form.TextInput);
    app.component('Form.TextArea', Form.TextArea);
    app.component('Form.InputGroup', Form.InputGroup);
    app.component('Form.VerticalInputGroup', Form.VerticalInputGroup);
    app.component('Form.Checkbox', Form.Checkbox);

    app.component('AnchorArray', Layout.AnchorArray);
    app.component('ButtonArray', Layout.ButtonArray);
    app.component('ScrollArea', Layout.ScrollArea);
    app.component('Flexbox', Layout.Flexbox);

    app.component('Header', Header);
    app.component('DialogWindow', DialogWindow);
    app.component('DialogInput', DialogInput);
    app.component('DropdownMenu', DropdownMenu);
    app.component('DropdownMenuButton', DropdownMenuButton);
    app.component('IconButton', IconButton);
    app.component('MessageBox', MessageBox);
    app.component('Button', Button);
    app.component('Wrapper', Wrapper);
}
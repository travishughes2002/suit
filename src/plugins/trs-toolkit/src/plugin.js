import ToolkitElementContainer from './components/dev/ToolkitElementContainer';
import ToolkitTest from './components/dev/ToolkitTest';

import FieldGroup from './components/form/FieldGroup';
import VerticalInputGroup from './components/form/VerticalInputGroup';
import VInput from './components/form/VInput';
import VTextarea from './components/form/VTextArea';

import AnchorArray from './components/layout/AnchorArray';
import ButtonArray from './components/layout/ButtonArray';

import AppHeader from './components/AppHeader';
import DialogWindow from './components/DialogWindow';
import DialogInput from './components/DialogInput';
import DropdownMenu from './components/DropdownMenu';
import DropdownMenuButton from './components/DropdownMenuButton';
import IconButton from './components/IconButton';
import MessageBox from './components/MessageBox';
import VButton from './components/VButton';
import Wrapper from './components/Wrapper';

/**
* Create our plugin object instance.
*/
export default function(app) {
    /**
    * Import our components here.
    * 
    * TODO: Research automatic component importing.
    */
    app.component('toolkit-element-container', ToolkitElementContainer);
    app.component('toolkit-test', ToolkitTest);

    app.component('field-group', FieldGroup);
    app.component('vertical-input-group', VerticalInputGroup);
    app.component('v-input', VInput);
    app.component('v-text-area', VTextarea);

    app.component('anchor-array', AnchorArray);
    app.component('button-array', ButtonArray);

    app.component('app-header', AppHeader);
    app.component('dialog-window', DialogWindow);
    app.component('dialog-input', DialogInput);
    app.component('dropdown-menu', DropdownMenu);
    app.component('dropdown-menu-button', DropdownMenuButton);
    app.component('icon-button', IconButton);
    app.component('message-box', MessageBox);
    app.component('v-button', VButton);
    app.component('wrapper', Wrapper);
}
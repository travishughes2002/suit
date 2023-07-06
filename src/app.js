import { createApp } from 'vue';
import Router from './router/router';
import App from './App.vue';

import TRSToolkit from './plugins/trs-toolkit/src/plugin';
import './plugins/trs-toolkit/scss/_default-theme.scss';
import './plugins/trs-toolkit/scss/_prefixes.scss';

/**
 * We will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp(App);

app.use(Router);
app.use(TRSToolkit);

/**
 * We'll dynamically import our components, since manual importing is for pussies. The
 * below code will register components with the component name being a formatted version
 * of the file name. For exampple: 
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./components/**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');

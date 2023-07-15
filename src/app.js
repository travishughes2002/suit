import { createApp } from 'vue';
import Router from './router/router.js';
import App from './App.vue';

import ComponentDemoCard from './components/ComponentDemoCard.vue';

import TRSToolkit from './plugins/trs-toolkit/src/plugin.js';
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
 * We'll import our components here.
 */

app.component('ComponentDemoCard', ComponentDemoCard)

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');

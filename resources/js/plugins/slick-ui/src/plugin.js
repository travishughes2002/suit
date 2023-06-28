/**
* Create our plugin object instance.
*/
let slickUI = {
    install(Vue) {

        /**
         * Import all components.
         */
        Object.entries(import.meta.glob('./components/**/*.vue', { eager: true })).forEach(([path, definition]) => {
            Vue.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
        });
    }
};

export default slickUI;
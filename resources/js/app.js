require("./bootstrap");
require("moment");

import Vue from "vue";
import Vuex from "vuex";
import { InertiaApp } from "@inertiajs/inertia-vue";
import { InertiaForm } from "laravel-jetstream";
import { InertiaProgress } from "@inertiajs/progress";
import PortalVue from "portal-vue";

InertiaProgress.init({
    delay: 0,
    color: "#424242",
    includeCSS: true,
    showSpinner: false
});

Vue.use(Vuex);
Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {}
});

store.commit("increment");

window.Vue = require("vue");
import vuetify from "@/Plugins/vuetify";

const app = document.getElementById("app");

new Vue({
    store,
    vuetify,
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);

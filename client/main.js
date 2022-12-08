import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '../imports/ui/plugins';

import App from '../imports/ui/App.vue';
import router from '../imports/ui/routes';
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Meteor.startup(() => {
	new Vue({
		router,
		el: '#app',
		...App,
	});
});

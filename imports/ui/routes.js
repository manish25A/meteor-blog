import Vue from 'vue';
import VueRouter, { createWebHistory } from 'vue-router';

Vue.use(VueRouter);

const routes = [
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: About,
	// },
	// {
	// 	path: '/hobbies',
	// 	name: 'Hobbies',
	// 	component: Hobbies,
	// },
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;

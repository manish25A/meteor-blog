import Vue from 'vue';
import VueRouter, { createWebHistory } from 'vue-router';

Vue.use(VueRouter);
import Home from './components/Home.vue';
import BlogsList from './components/Dashboard/BlogsList.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
import AddBlog from './components/Dashboard/AddBlog.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/blogs',
		name: 'Blogs',
		component: () => import('./components/Blogs.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('./components/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('./components/Register.vue'),
	},
	{
		path: '/dashboard',
		component: Dashboard,
		children: [
			{
				path: '/',
				name: 'Your Blog',
				component: BlogsList,
			},
			{
				path: '/add-blog',
				name: 'Add Blogs',
				component: AddBlog,
			},
		],
	},
];

const router = new VueRouter({
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active',
	routes,
	mode: 'history',
});

export default router;

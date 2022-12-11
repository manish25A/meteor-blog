import Vue from 'vue';
import VueRouter, { createWebHistory } from 'vue-router';
import { Meteor } from 'meteor/meteor';
Vue.use(VueRouter);
import Home from './components/Home.vue';
import BlogsList from './components/Dashboard/BlogsList.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
import AddBlog from './components/Dashboard/AddBlog.vue';

function checkAuthentication() {
	const id = Meteor.userId();
	if (id) {
	}
}

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
		beforeEnter: (to, from, next) => {
			if (!Meteor.userId()) {
				router.push('/login');
			} else {
				next();
			}
		},
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
		name: 'Dashboard',
		component: () => import('./components/Dashboard/Dashboard.vue'),
		beforeEnter: (to, from, next) => {
			if (!Meteor.userId()) {
				router.push('/login');
			} else {
				next();
			}
		},
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import('./components/SingleBlog.vue'),
		beforeEnter: (to, from, next) => {
			if (!Meteor.userId()) {
				router.push('/login');
			} else {
				next();
			}
		},
	},
];

const router = new VueRouter({
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active',
	routes,
	mode: 'history',
});

export default router;

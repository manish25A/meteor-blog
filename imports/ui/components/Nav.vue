<template>
	<div>
		<b-navbar toggleable="lg" type="light" class="nav-bg">
			<b-navbar-brand to="/">Blog</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/blogs" v-if="user">Blogs</b-nav-item>
					<b-nav-item to="/login" v-if="!user">Login</b-nav-item>
					<b-nav-item to="/dashboard" v-if="user">Dashboard</b-nav-item>
					<b-nav-item to="/login" v-if="user">Logout</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import UserService from '../utils/services';

export default {
	data() {
		return {
			user: localStorage.getItem('user'),
		};
	},
};
</script>

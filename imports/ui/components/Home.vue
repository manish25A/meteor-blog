<template>
	<div class="container">
		<h1>Welcome to blog site {{ userName }}</h1>
	</div>
</template>

<script>
import UserService from '../utils/services';

import Vue from 'vue';
export default {
	data() {
		return {
			userName: null,
		};
	},

	beforeMount() {
		this.userName = localStorage.getItem('user');
	},
};
</script>

<style scoped>
p {
	font-family: serif;
}
</style>

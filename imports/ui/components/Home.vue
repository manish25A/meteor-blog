<template>
	<div class="container d-flex justify-content-center">
		<h1>Welcome to Blog site</h1>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
export default {
	data() {
		return {
			user: null,
		};
	},
};
</script>

<style scoped>
p {
	font-family: serif;
}
</style>

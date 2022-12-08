<template>
	<div>
		<h1>Welcome to Meteor!</h1>
		<hello />
	</div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
	components: {
		Hello,
	},
};
</script>

<style>
body {
	font-family: sans-serif;
	padding: 10px;
}
</style>

<template>
	<div class="container">
		<b-button
			type="button"
			block
			@click="handleAddClick($event)"
			variant="outline-primary"
		>
			Toggle Add
		</b-button>

		<div v-if="showForm">
			<AddBlog></AddBlog>
		</div>

		<div>
			<BlogsList></BlogsList>
		</div>
	</div>
</template>

<style></style>

<script>
import AddBlog from './AddBlog.vue';
import BlogsList from './BlogsList.vue';
export default {
	components: {
		BlogsList,
		AddBlog,
	},
	data() {
		return {
			showForm: false,
		};
	},

	methods: {
		handleAddClick(event) {
			this.showForm = !this.showForm;
		},
	},
};
</script>

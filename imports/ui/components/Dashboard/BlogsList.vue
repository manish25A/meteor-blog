<template>
	<div class="mt-2">
		<h1>Your Blogs</h1>
		<b-table
			:items="adminBlogs"
			:fields="fields"
			striped
			responsive="sm"
			v-if="adminBlogs"
		>
			<template #cell(update_details)="row">
				<b-button size="sm" @click="row.toggleDetails" class="mr-2">
					{{ row.detailsShowing ? 'Hide' : 'Show' }} Update Details
				</b-button>

				<!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
			</template>

			<template #row-details="row">
				<AddBlog :data="row"></AddBlog>
			</template>
		</b-table>
		<p v-if="adminBlogs && !adminBlogs.length">No Blogs Found</p>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { BlogsCollection } from '../../../api/collections/Blogs';
import AddBlog from './AddBlog.vue';
export default {
	components: {
		AddBlog,
	},

	data() {
		return {
			user: null,
			fields: ['name', 'description', 'update_details'],
		};
	},

	meteor: {
		$subscribe: {
			adminBlogs: [],
		},
		adminBlogs() {
			const newBlogs = BlogsCollection.find({}).fetch();
			newBlogs.map(
				(x) =>
					(x.description =
						x.description.length > 10
							? x.description.substr(0, 20) + '...'
							: x.description)
			);
			return newBlogs;
		},
	},
};
</script>

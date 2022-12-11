<template>
	<div class="container d-flex">
		<div v-if="blogs && !blogs.length">
			<h1>No blogs found</h1>
		</div>
		<div
			v-for="{ name, description, slug } in blogs"
			v-if="blogs && blogs.length"
		>
			<b-card
				:title="name ? name : 'N/A'"
				tag="article"
				style="max-width: 20rem"
				class="mb-2 me-2"
			>
				<b-card-text>
					{{ description ? description : 'N/A' }}
				</b-card-text>

				<b-button @click="goToDetail(slug)" variant="primary" class="ml-0">
					Full Blog
				</b-button>
			</b-card>
		</div>
	</div>
</template>

<script>
import { BlogsCollection } from '../../api/collections/Blogs';
import router from '../routes';
import SingleBlog from './SingleBlog.vue';
export default {
	components: {
		SingleBlog,
	},
	methods: {
		goToDetail(slug) {
			router.push({ path: 'blog', query: { slug: slug } });
		},
	},
	meteor: {
		$subscribe: {
			blogs: [],
		},
		blogs() {
			const newBlogs = BlogsCollection.find().fetch();
			newBlogs.map((x) => {
				x.description =
					x.description.length > 10
						? x.description.substr(1, 10) + '...'
						: x.description;
				return x;
			});
			return newBlogs;
		},
	},
};
</script>

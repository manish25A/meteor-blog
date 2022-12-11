<template>
	<div class="container">
		<h1>
			{{ blog && blog.name ? blog.name : 'N/A' }}
		</h1>
		<div>
			<p>
				{{ blog && blog.description ? blog.description : 'N/A' }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			blog: null,
			slug: this.$route.query.slug,
		};
	},
	created: function () {
		Meteor.call('fetchSingleBlog', this.slug, (error, result) => {
			if (error) {
				ToastContainer(result.reason, 'error');
			} else {
				if (result) {
					this.blog = result;
				}
			}
		});
	},
};
</script>

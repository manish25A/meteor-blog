<template>
	<div>
		<b-form @submit="onSubmit" @reset="onReset" v-if="show">
			<b-form-group id="input-group-1" label="Blog Name:" label-for="input-1">
				<b-form-input
					id="input-1"
					v-model="form.name"
					type="text"
					placeholder="Enter blog name"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label="Description:" label-for="input-2">
				<b-form-textarea
					id="textarea"
					v-model="form.description"
					placeholder="Enter description"
					rows="3"
					max-rows="6"
				></b-form-textarea>
			</b-form-group>
			<div class="mt-3">
				<b-button type="submit" variant="primary">Submit</b-button>
				<b-button type="reset" variant="danger">Reset</b-button>
			</div>
		</b-form>
	</div>
</template>

<script>
import { ToastContainer } from '../../utils/toast-constant';
export default {
	name: 'AddBlog',
	props: ['data'],
	data() {
		return {
			form: {
				name: '',
				description: '',
				userId: null,
			},

			show: true,
		};
	},
	created: function () {
		this.user = localStorage.getItem('Meteor.userId');
		if (this.data?.item) {
			const { name, description, _id, userId } = this.data.item;
			this.form.name = name;
			this.form.description = description;
			this.form._id = _id;
			this.form.userId = userId;
		}
	},
	methods: {
		onSubmit(event) {
			event.preventDefault();
			this.form.userId = this.user._id;
			this.form.slug = this.createSlug(this.form.name);
			if (!this.form._id) {
				Meteor.call('uploadBlog', this.form, (error, result) => {
					if (error) {
						ToastContainer(result.reason, 'error');
					} else {
						ToastContainer('Blog posted Successfully ', 'success');
						this.form.name = '';
						this.form.description = '';
					}
				});
			} else {
				Meteor.call('updateBlog', this.form, (error, result) => {
					if (error) {
						ToastContainer(result.reason, 'error');
					} else {
						ToastContainer('Blog updated Successfully ', 'success');
						this.form.name = '';
						this.form.description = '';
						this.form._id = '';
					}
				});
			}
		},

		createSlug(Text) {
			return Text.toLowerCase()
				.replace(/ /g, '-')
				.replace(/[^\w-]+/g, '');
		},
		onReset(event) {
			event.preventDefault();
			this.form.name = '';
			this.form.description = '';
			this.form._id = null;
		},
	},
};
</script>

<template>
	<div id="app">
		<div class="login-page">
			<div class="wallpaper-register"></div>

			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
						<div class="card login" v-bind:class="{ error: emptyFields }">
							<h1>Register</h1>
							<form class="form-group">
								<input
									v-model="username"
									type="text"
									class="form-control"
									placeholder="Username"
									required
								/>
								<input
									v-model="password"
									type="password"
									class="form-control"
									placeholder="Password"
									required
								/>
								<input
									type="submit"
									class="btn btn-primary"
									@click="register($event)"
								/>
								<p>
									Already have an Account?
									<router-link to="/login">Login Here </router-link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import router from '../routes.js';
import toast_constants, { ToastContainer } from '../utils/toast-constant.js';
export default {
	data() {
		return {
			username: '',
			password: '',
			emptyFields: false,
		};
	},

	methods: {
		register(event) {
			event.preventDefault();
			const data = {
				username: this.username,
				password: this.password,
			};
			if (this.username === '' || this.password === '') {
				this.emptyFields = true;
			} else {
				Meteor.call('createUserLink', data, (error, result) => {
					if (error) {
						ToastContainer(result.reason, 'error');
					} else {
						if (result) {
							ToastContainer(
								result.warning ? result.warning : 'Registered Successfully ',
								result.warning ? 'warning' : 'success'
							);
						} else {
							ToastContainer('Registered Successfully ', 'success');
							router.push({
								path: '/login',
								params: { username: this.username },
							});
							this.username = '';
							this.password = '';
						}
					}
				});
			}
		},
	},
};
</script>

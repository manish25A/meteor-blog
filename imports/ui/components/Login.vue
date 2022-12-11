<template>
	<div id="app">
		<div class="login-page">
			<div class="wallpaper-register"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
						<div class="card login" v-bind:class="{ error: emptyFields }">
							<h1>Sign In</h1>
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
								<button
									type="submit"
									class="btn btn-primary"
									@click="doLogin($event)"
								>
									Login
								</button>
								<p>
									Don't have an account?
									<router-link to="/register">Sign up here</router-link>
								</p>
								<p><a href="#">Forgot your password?</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import router from '../routes';
import { ToastContainer, toast_constants } from '../utils/toast-constant';
export default {
	data() {
		return {
			username: '',
			password: '',
			emptyFields: false,
		};
	},
	methods: {
		doLogin(event) {
			event.preventDefault();
			if (this.username === '' || this.password === '') {
				this.emptyFields = true;
			} else {
				const login = this.username;
				const password = this.password;
				Meteor.loginWithPassword(login, password, (error) => {
					if (error) {
						console.log(error);
						ToastContainer(error.reason, 'warning');
					} else {
						router.push('/');
					}
				});
			}
		},
	},
};
</script>

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
	createUserLink(data) {
		console.log(data);
		const SEED_USERNAME = data.username;
		const SEED_PASSWORD = data.password;
		if (!Accounts.findUserByUsername(SEED_USERNAME)) {
			const user = Accounts.createUser({
				username: SEED_USERNAME,
				password: SEED_PASSWORD,
			});
			return user;
		} else {
			return { warning: 'Accounts already exists' };
		}
	},
});

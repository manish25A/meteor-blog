import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { BlogsCollection } from '../collections/Blogs';

Meteor.methods({
	createUserLink(data) {
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
	uploadBlog(data) {
		const blog = BlogsCollection.insert({
			name: data.name,
			description: data.description,
			slug: data.slug,
			userId: data.userId,
		});
		const newBlog = BlogsCollection.findOne(blog);
		return newBlog;
	},
	updateBlog(data) {
		const blog = BlogsCollection.update(
			{ _id: data._id },
			{
				$set: {
					name: data.name,
					description: data.description,
					userId: data.userId,
					slug: data.slug,
				},
			}
		);
		const newBlog = BlogsCollection.findOne(blog);
		return newBlog;
	},
	fetchSingleBlog(slug) {
		const blogData = BlogsCollection.findOne({ slug: slug });

		return blogData;
	},
});

import { Meteor } from 'meteor/meteor';
import { BlogsCollection } from '../collections/Blogs';
import Users from '../collections/Users';
if (Meteor.isServer) {
	Meteor.publish('adminBlogs', function () {
		return BlogsCollection.find({ userId: this.userId });
	});
	Meteor.publish('blogs', function () {
		return BlogsCollection.find();
	});
}

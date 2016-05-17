import Backbone from 'backbone';

const UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		createdAt: null,
		updatedAt: null
	},
	idAttribute: 'id',
	urlRoot: '/api/v1/user'
});

export default new UserModel(window.user);
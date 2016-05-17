require('./User');

module.exports = bookshelf.model('Product', {
	tableName: 'products',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});

//this is backend model
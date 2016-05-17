exports.up = function(knex, Promise) {
	return knex.schema.createTable('products', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('productName').nullable();
		t.string('productPrice').nullable();
		t.string('category').nullable();
		t.string('quantity').nullable();
		t.string('description').nullable();

		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('products');
};

//down means delete changes
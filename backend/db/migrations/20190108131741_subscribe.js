
exports.up = function(knex, Promise) {
        return knex.schema.createTable("subscribe", (table) => {
        table.increments();
        table
          .integer("subscriber")
          .references('id')
          .inTable('authors')
          .notNullable()
          .onDelete('cascade');
        table
          .integer("subscribee")
          .references('id')
          .inTable('authors')
          .notNullable()
          .onDelete('cascade'); 
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("subscribe");
};

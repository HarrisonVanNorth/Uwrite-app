
exports.up = function(knex, Promise) {
      return knex.schema.createTable("comments", (table) => {
        table.increments();
        table.string("user_name");
        table.text("comment");
        table.integer("fact_rating");
        table
          .integer("story_id")
          .references('id')
          .inTable('stories')
          .notNullable()
          .onDelete('cascade');
        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("comments");
};


exports.up = function(knex, Promise) {
      return knex.schema.createTable("stories", (table) => {
        table.increments();
        table.text("story_img");
        table.string("title");
        table.text("content")
        table.string("category");
        table
        .integer("author_id")
        .references('id')
        .inTable('authors')
        .notNullable()
        .onDelete('cascade');
;

        table.timestamps(true, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("stories");

};

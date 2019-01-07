
exports.up = function(knex, Promise) {
    return knex.schema.createTable("authors", (table) => {
      table.increments(); 
      table.string("author_name"); 
      table.text("author_img"); 
      table.timestamps(true, true); 
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("authors");
};

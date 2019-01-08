
exports.up = function(knex, Promise) {
    return knex.schema.createTable("authors", (table) => {
      table.increments(); 
      table.string("user_name"); 
      table.text("user_img");
      table.string("user_email");
      table.string("user_password")
      table.text("bio")
      table.timestamps(true, true); 
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("authors");
};

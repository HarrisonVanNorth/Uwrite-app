
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_name: 'Jeff Jiggly', comment: 'I found this very informative.', fact_rating: 3 , story_id: 1},
        {user_name: 'Bick Diggleson', comment: 'DMC rocks!', fact_rating:2 , story_id: 2},
        {user_name: 'Trump Troy', comment: 'I like turtles.', fact_rating: 4, story_id: 3}
      ]);
    });
};

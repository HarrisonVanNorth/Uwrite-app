
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subscribe').del()
    .then(function () {
      // Inserts seed entries
      return knex('subscribe').insert([
        {id: 1, subscriber: 1 , subscribee: 2 },
        {id: 2, subscriber: 1 , subscribee: 3 },
        {id: 3, subscriber: 2 , subscribee: 1 }
      ]);
    });
};

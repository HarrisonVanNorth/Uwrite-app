
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {
          id: 1, 
          user_name: 'James Patterson', 
          user_img: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/08/screen_shot_2015-08-02_at_9.11.14_am.jpg', 
          user_email: 'g@gmail.com', 
          user_password: 'value',
          bio: "Dont for get to put a bio"
        },
        {
          id: 2, 
          user_name: 'David Baldacci', 
          user_img: 'https://i.dailymail.co.uk/i/newpix/2018/04/13/15/4B09C2EF00000578-0-Will_Ferrell_was_involved_in_a_serious_car_accident_on_Thursday_-a-26_1523631203616.jpg', 
          user_email: 'some@email.com', 
          user_password: 'value',
          bio: "Dont for get to put a bio"
        },
        {
          id: 3, 
          user_name: 'Nora Roberts', 
          user_img: 'https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg', 
          user_email: 'some@email.com', 
          user_password: 'value',
          bio: "Dont for get to put a bio"
        }
      ]);
    });
};

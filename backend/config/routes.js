const authors = require('../controllers/authors.js')
const stories = require('../controllers/stories.js')
const comments = require('../controllers/comments.js')
const subscribe = require('../controllers/subscribe.js')

module.exports = function(app){
  app.get('/authors', authors.index);

  app.get('/stories', stories.index);
  app.post('/stories', stories.create);
  app.patch('/stories', stories.edit);
  app.delete('/stories', stories.delete);

  app.get('/comments', comments.index);
  app.get('/subscribe', subscribe.index);

}

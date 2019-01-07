const authors = require('../controllers/authors.js')

module.exports = function(app){
  app.get('/', authors.index);

}

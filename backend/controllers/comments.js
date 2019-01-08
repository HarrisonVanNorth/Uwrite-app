const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('comments').then((results) => {
      res.json(results)
    });
  }
}
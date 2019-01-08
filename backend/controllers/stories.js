const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('stories').then((results) => {
      res.json(results)
    });
  }
}
const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('subscribe').then((results) => {
      res.json(results)
    });
  }
}
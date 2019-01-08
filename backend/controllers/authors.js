const knex = require("../db/knex.js");

module.exports = {
    index: function (req, res) {
        knex('authors').then((results) => {
            res.json(results)
        });
    }
}
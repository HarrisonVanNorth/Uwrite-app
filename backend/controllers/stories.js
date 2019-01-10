const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('stories').then((results) => {
      res.json(results)
    });
  },

  create: (req, res) => {
    console.log("backend")
    knex('stories').insert({
      story_img: req.body.story_img,
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author_id: req.body.author_id
    }).returning('*').then(story => res.json(story))
  },

  edit: (req, res) => {
    console.log("backend")
    knex('stories').where('id', req.params.id)
      .update({
        story_img: req.body.img_url,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author_id: req.body.author_id
    }).returning('*').then(story => res.json(story))
  },

  delete: (req, res) => {
    console.log("backend")
    knex('stories').del().where('id', req.params.id).then(story => {
      knex('stories').returning('*').then(results => res.json(results))
    })
  }
}
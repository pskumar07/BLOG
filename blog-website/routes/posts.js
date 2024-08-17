const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  await post.save();
  res.redirect('/');
});

module.exports = router;

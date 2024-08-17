const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: 'desc' });
  res.render('index', { posts: posts });
});

module.exports = router;

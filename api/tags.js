const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName, } = require('../db');

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next(); 
});

tagsRouter.get('/', async(req, res) => {
    const tags = await getAllTags();
    res.send({
        tags
      });
});
tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  const { tagName } = req.params;
  try {
    const postWithTag = await getPostsByTagName(tagName);
    res.send({posts: postWithTag})
  } catch ({ name, message }) {
  }
});

module.exports = tagsRouter;
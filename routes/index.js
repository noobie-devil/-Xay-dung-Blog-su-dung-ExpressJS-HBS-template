const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')

router.route('/')
	.get(postController.getAllPosts);

router.route('/post')
	.post(postController.createNewPost);

module.exports = router;
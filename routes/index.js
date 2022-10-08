const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')
const commentController = require('../controllers/CommentController')

router.route('/')
	.get(postController.getAllPosts);

router.route('/post')
	.post(postController.createNewPost)
	.delete(postController.deletePost);

router.route('/comment')
	.post(commentController.postComment);


module.exports = router;
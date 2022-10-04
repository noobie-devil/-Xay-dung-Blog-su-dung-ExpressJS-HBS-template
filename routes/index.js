const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')

router.route('/')
	.get(postController.getAllPosts);

// router.route('/:id')
// 	.get(studentsController.getMessage);

module.exports = router;
const data = require('../models/posts')



const postComment = (req, res) => {
	const comment = req.body.comment;
	const postId = req.body.postId;
	data.data[postId].comments.unshift(comment);
	res.status(200).json(data);
}

module.exports = {
	postComment
}

const data = require('../models/posts')


// const getMessage = (req, res) => {
// 	const id = req.params.id;
// 	const text = "";
// 	const students = [];

// 	if(id !== undefined) {
// 		let student = data.mygroup.find(std => std.id === parseInt(id));
// 		if(student !== undefined) {
// 			students.push(student);
			
// 		}
// 		res.render("message", {
// 			students: students,
// 		})
// 	}
// 	res.render("message", {
// 		students: data.mygroup
// 	})

	
// }

const getAllPosts = (req, res) => {
	res.render('main', { posts: data.data});
}

const createNewPost = (req, res) => {
	const post = {
		content: req.body.content,
		comments: []
	}
	data.data.unshift(post);
	
	res.status(200).json(data);
}

module.exports = {
	getAllPosts,
	createNewPost
}

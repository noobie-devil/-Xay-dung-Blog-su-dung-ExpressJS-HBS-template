// const data = require('../models/students')


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
	res.render('main');
}

module.exports = {
	getAllPosts
}

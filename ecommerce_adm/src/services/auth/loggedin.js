module.exports = (req, res, next) => {

	console.log('service >>>>>>>>>>>>>>>>>>> auth.loggedin.js')
	//console.log(req);

	// if (req.user) {
	// 	return next()
	// }

	// return res.redirect('/auth')

	return next()
}
module.exports = (req, res, next) => {

	console.log('service >>>>>>>>>>>>>>>>>>> auth.loggedin.js')

	if (req.user) {
		return next()
	}

	return res.redirect('/auth')
}
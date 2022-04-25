const User = require('./../../schemas/user')

module.exports = (req, res) => {
	User.authenticate()(req.body.email, req.body.password, (error, user, opts) => {
		if (error || user == false) {
			console.log(error)
			return res.redirect('/auth')
		}

		return req.login(user, (error) => {
			if (error) {
				console.log(error)
				return res.redirect('/auth')
				
			}

			console.log('>>>>>> login com sucesso, redirecionando...');

			return res.redirect('/')
		})
	})	
}
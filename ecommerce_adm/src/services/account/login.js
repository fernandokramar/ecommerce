const Customer = require('./../../schemas/customer')

module.exports = (req, res) => {
    Customer.authenticate()(req.body.email, req.body.password, (erro, user, opts) =>{
        if(erro || user == false){
            return res.redirect('/account')
        }

        return req.login(user, (error) =>{
            if(erro) {
                return res.redirect('/account')
            }

            return res.redirect('/')
        })
    })

}
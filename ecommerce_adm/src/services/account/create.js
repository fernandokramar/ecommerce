const Customer = require('./../../schemas/customer')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
    let birthday = req.body.birthday.toString().split('/')
    let slug = slugfy(req.body.name)

    let data = {
        name: req.body.name,
        email: req.body.email,
        slug: slug,
        birthday: {
            day: birthday[0],
            month: birthday[1],
            year:birthday[2]
        },
        
        id: req.body.cpf,
        celphone: req.body.celphone,
        address: {
            street: req.body.street,
            number: req.body.number_delivery,
            city:req.body.city,
            neighborhood:req.body.neighborhood
        },
    }
    Customer.register(data, req.body.password, (erro, account) => {
        if(erro){
            console.log(erro)
            return res.redirect('/')
        }

        return res.redirect('/account')
    })
}
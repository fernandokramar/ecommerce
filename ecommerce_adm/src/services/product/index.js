const Product = require('./../../schemas/product')

module.exports = (req,res) => {
    Product
    .find({})
    .populate('category')
    .then((product) => {
       if (!product) {
            return res.redirect('/product')
        }

        return res.render('product/index', {
            title: 'Admin Ecommerce',
            layout: 'layouts/main',
            user: req.user || undefined,
            product
        })
    })
    .catch((error) => {
        return res.redirect('/product')
    })
}
module.exports = (req, res) => {

    console.log('>>>>>>>>>>>>>>> USER');
    console.log(req.user);

    // dashboard
    return res.render('main/index', {
        title: 'Admin Ecommerce',
        layout: 'layouts/main',
        user: req.user || undefined
    })
}

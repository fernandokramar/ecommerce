const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const expressEjsLayouts = require('express-ejs-layouts')
const passport = require('passport')
const User = require('./../../schemas/user')
const LocalStrategy = require('passport-local').Strategy 
const mongoose = require('mongoose')
const expressSession = require('express-session')

module.exports= (app) =>{
    app.set('port', 9001)
    app.set('views', path.join(__dirname, './../../../build/views'))
    app.set('view engine', 'ejs')
    app.set('layout extractStcripts ,true')
    app.set('layout extractStyles, true')

    app.use(express.static(path.join(__dirname, './../../../build')))
    app.use(express.static(path.join(__dirname, './../../../bower_components')))
    
    app.use(expressEjsLayouts)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(morgan('dev'))
    app.use(methodOverride('_method'))
    app.use(expressSession({
        secret: '#*!#&*!#@HADHAKJDKA',
        resave:false,
        saveUninitialized:true

    }))
    app.use(passport.initialize())
    app.use(passport.session())

    passport.use(new LocalStrategy(User.authenticate()))
	passport.serializeUser(User.serializeUser())
	passport.deserializeUser(User.deserializeUser())
    
    mongoose.connect('mongodb://localhost:27017/ecommerce', {useMongoClient:true})
}
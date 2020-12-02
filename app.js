const express = require('express')
const path = require('path')
const database = require('./src/data/Database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//passport
const passport = require('./src/passport/Passport')
app.use(passport.initialize())

//routes
const userRouter = require('./src/routes/UserRouter')
app.use('/user', userRouter)

const gameRouter = require('./src/routes/GameRouter')
app.use('/game', gameRouter)

const websiteRouter = require('./src/routes/WebsiteRouter')
app.use('/', websiteRouter)

database.connect(app)


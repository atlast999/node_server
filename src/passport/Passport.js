const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../data/models/User')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

const strategy = new JwtStrategy(opts, function(payload, done){
    // User.findOne({username: payload.username})
    //     .then(user => {
    //         if(user){
    //             done(null, user)
    //         } else{
    //             done(null, false)
    //         }
    //     })
    //     .catch(error => {
    //         done(error)
    //     })
    const user = {_id: '5fa9fb9f23cb6852425d7d85'}
    done(null, user)
})

passport.use('auth', strategy)

module.exports = {
    authenticate: () => passport.authenticate('auth', {session: false}),
    initialize: () => passport.initialize()
}
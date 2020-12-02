const Game = require('../data/models/Game')
class GameController {

    //GET
    allGames(req, res, next){
        Game.find({owner: req.user._id})
            .then(games => {
                res.json(games)
            })
            .catch(next)
    }

    //PUT
    addNew(req, res, next){
        const newGame = new Game(req.body)
        newGame.save()
            .then(game => {
                res.json({code: '200', game: game})
            })
            .catch(next)
    }

}

module.exports = new GameController()
const Tracking = require('../data/models/AttendantTracking')
class WebsiteController {

    //GET
    allTrackings(req, res, next){
        Tracking.find()
        .then(trackings => {
            res.json(trackings)
        })
        .catch(next)
    }

}

module.exports = new WebsiteController()
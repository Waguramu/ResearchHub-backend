/**
 * Created by Devgen on 16.06.2017.
 */

module.exports = chairRoutes;

function chairRoutes(passport) {

    var chairController = require('./chairController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET','POST','PUT', 'OPTIONS']}));

    router.route('/').get(chairController.getChairs).post(chairController.createChair);
    router.route('/:chair_id').get(chairController.getChair);

    return router;
}

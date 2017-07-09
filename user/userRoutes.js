module.exports = userRoutes;

function userRoutes(passport) {

    var userController = require('./userController');
    var router = require('express').Router();


    //router.post('/');
    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    router.post('/unregister', passport.authenticate('jwt', {session: false}),userController.unregister)
	router.get('/current', userController.getCurrent);
	router.put('/:_id', userController.update);

    return router;

}
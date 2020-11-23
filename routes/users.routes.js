const router = require('express').Router();
//const {} = require('../controllers/words.controller');

//Définir les routes ci-dessous
router.get('/signup/form',signupForm);
router.post('/signup', signup);

module.exports = router; 
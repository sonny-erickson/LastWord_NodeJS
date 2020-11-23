const router = require('express').Router();
const {signupForm, signup} = require('../controllers/users.controller');

//Définir les routes ci-dessous
router.get('/signup/form',signupForm);
router.post('/signup', signup);

module.exports = router; 
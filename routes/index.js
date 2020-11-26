const router = require('express').Router();
const words = require('./words.routes');
const users = require('./users.routes');
const auth = require('./auth.routes');

router.use('/words', words);
router.use('/users', users);
router.use('/auth', auth);
router.get('/', (req, res) => {
    res.redirect('/words');
})

module.exports = router; //Pour exporter le router
const router = require('express').Router();
const words = require('./words.routes');
const users = require('./users.routes');

router.use('/words', words);
router.use('/users', users);
router.get('/', (req, res) => {
    res.redirect('/words');
})

module.exports = router; //Pour exporter le router
const router = require('express').Router();
const words = require('./words');

router.use('/', words);
router.get('/', (req, res) => {
    res.redirect('/words');
})

module.exports = router; //Pour exporter le router
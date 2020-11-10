const router = require('express').Router();
const words = require('./api.words');

router.use('/words', words);

module.exports = router;
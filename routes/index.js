const router = require('express').Router();
const api = require('./api');
const Word = require('../database/models/word.model');


router.use('/api', api);
//Définir les routes ci-dessous

router.get('/', (req, res) =>{
    Word.find({})
        .exec()
        .then( words => res.render('home', {words}))
})

// router.get('/', (req, res) =>{
// res.render('../views/home')
// })
router.get('/wordForm', (req, res) =>{
    res.render('../views/wordForm')
})


module.exports = router; //Pour exporter le router
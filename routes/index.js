const router = require('express').Router();

//Définir les routes ci-dessous

router.get('/', (req, res) =>{
    res.render('../views/home')
})
router.get('/wordForm', (req, res) =>{
    res.render('../views/wordForm')
})


module.exports = router; //Pour exporter le router
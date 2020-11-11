const router = require('express').Router();
const { wordNew, wordList, wordCreate} = require('../controllers/words.controller');

//Définir les routes ci-dessous
router.get('/',wordList);
router.get('/wordForm',wordNew);
router.post('/', wordNew);

module.exports = router; 
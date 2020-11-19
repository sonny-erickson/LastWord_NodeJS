const router = require('express').Router();
const { wordNew, wordList, wordCreate, wordDelete} = require('../controllers/words.controller');

//Définir les routes ci-dessous
router.get('/',wordList);
router.get('/wordForm',wordNew);
router.post('/', wordCreate);
router.delete('/:wordId',wordDelete);

module.exports = router; 
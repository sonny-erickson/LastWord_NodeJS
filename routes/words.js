const router = require('express').Router();
const { wordNew, wordList, wordCreate, wordDelete, wordEdit, wordUpdate} = require('../controllers/words.controller');

//Définir les routes ci-dessous
router.get('/',wordList);
router.get('/wordForm',wordNew);
router.post('/', wordCreate);
router.get('/edit/:wordId', wordEdit);
router.post('/update/:wordId', wordUpdate)
router.delete('/:wordId',wordDelete);

module.exports = router; 
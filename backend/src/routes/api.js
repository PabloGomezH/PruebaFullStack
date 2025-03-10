const express = require('express');
const router = express.Router();
const setsController = require('../controllers/setsController');
const cardsController = require('../controllers/cardsController');

router.get('/sets', setsController.getAllSets);
router.get('/sets/:id/cards', cardsController.getCardsBySetId);
router.get('/cards/:id', cardsController.getCardById); 

module.exports = router;
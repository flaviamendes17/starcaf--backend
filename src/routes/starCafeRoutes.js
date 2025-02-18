const express = require('express');
const router = express.Router();
const starCafeController = require('../controllers/starCafeController');

router.get('/cafes', starCafeController.listarCafes);
router.post('/cafes', starCafeController.adicionarCafe);
router.get('/cafes/:id', starCafeController.buscarCafePorId);
router.delete('/cafes/:id', starCafeController.removerCafe);

module.exports = router;
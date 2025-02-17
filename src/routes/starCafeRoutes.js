const express = require('express');
const router = express.Router();
const starCafeController = require('../controllers/starCafeController');

router.get('/cafes', starCafeController.listarCafes);
router.get('/cafes/:id', starCafeController.buscarCafePorId);
router.post('/cafes', starCafeController.adicionarCafe);
router.delete('/cafes/:id', starCafeController.removerCafe);

module.exports = router;
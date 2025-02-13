const express = require('express');
const router = express.Router();
const starCafeController = require('../controllers/starCafeController');

router.get('/cafes', starCafeController.getCafes);
router.get('/cafes/:id', starCafeController.getCafeById);
router.post('/cafes', starCafeController.createCafe);
router.delete('/cafes/:id', starCafeController.deleteCafe);
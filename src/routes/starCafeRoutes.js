const { v4: uuidv4 } = require('uuid');
const express = require('express');

const router = express.Router();

const starCafeController = require('../controllers/starCafeController');

router.get("/menu", starCafeController.getAllStarCafes);

router.get("/:id", starCafeController.getStarCafeById);

router.post("/order", starCafeController.createStarCafe);

router.put("/order/:id", starCafeController.updateStarCafe);

router.delete("/order/:id", starCafeController.deleteStarCafe);

module.exports = router;
const express = require('express');

const router = express.Router();

const starCafeController = require('../controllers/starCafeController');

router.get("/", starCafeController.getAllStarCafes);

router.get("/:id", starCafeController.getStarCafeById);

router.post("/", starCafeController.createStarCafe);

router.put("/:id", starCafeController.updateStarCafe);

router.delete("/:id", starCafeController.deleteStarCafe);

module.exports = router;
const express = require("express");
const router = express.Router();
const bfhlController = require("../controllers/bfhlController");

router.get("/", bfhlController.getBfhlData);
router.post("/", bfhlController.processBfhlData);

module.exports = router;

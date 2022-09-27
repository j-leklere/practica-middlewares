const express = require("express");
const router = express.Router();

// Controllers
const mainController = require("../controllers/mainController");
const adminController = require("../controllers/adminController");

// Middlewares
const adminMiddleware = require("../middlewares/adminMiddleware");

// Routes
router.get("/", mainController.index);
router.get("/admin", adminMiddleware, adminController.admin);

module.exports = router;

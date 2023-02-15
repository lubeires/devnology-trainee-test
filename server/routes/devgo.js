const express = require("express");
const { getDevGoArticles } = require("../controllers/devgo");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
// protect routes
router.use(requireAuth);

// GET all devGo articles
router.get("/", getDevGoArticles);

module.exports = router;

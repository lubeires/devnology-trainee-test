const express = require("express");
const {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/article");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
// protect routes
router.use(requireAuth);

// GET all articles
router.get("/", getArticles);

// GET single article
router.get("/:id", getArticle);

// POST new article
router.post("/", createArticle);

// DELETE an article
router.delete("/:id", deleteArticle);

// UPDATE an article
router.patch("/:id", updateArticle);

module.exports = router;

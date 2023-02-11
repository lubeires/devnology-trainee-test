const express = require("express");
const {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/article");

const router = express.Router();

// GET all articles
router.get("/", getArticles);

// GET single article
router.get("/:id", getArticle);

// POST new article
router.post("/", createArticle);

// DELETE a article
router.delete("/:id", deleteArticle);

// UPDATE a article
router.patch("/:id", updateArticle);

module.exports = router;

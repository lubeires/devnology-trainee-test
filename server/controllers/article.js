const Article = require("../models/article");
const mongoose = require("mongoose");

// get all articles
const getArticles = async (req, res) => {
  const userId = req.user._id;
  const articles = await Article.find({ userId }).sort({ updatedAt: -1 });
  res.status(200).json(articles);
};

// get single article
const getArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "ID inválido..." });

  const article = await Article.findById(id);

  if (!article)
    return res.status(404).json({ error: "Artigo não encontrado..." });
  res.status(200).json(article);
};

// create new article
const createArticle = async (req, res) => {
  const { label, url } = req.body;

  if (!label || !url)
    return res.status(400).json({ error: "Preencha todos os campos." });

  // add article to db
  try {
    const userId = req.user._id;
    const article = await Article.create({ label, url, userId });
    res.status(200).json({ article, message: "Novo artigo salvo!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete an article
const deleteArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "ID inválido..." });

  try {
    const article = await Article.findByIdAndDelete(id);

    if (!article)
      return res.status(404).json({ error: "Artigo não encontrado..." });
    res.status(200).json({ article, message: "Artigo removido!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update an article
const updateArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "ID inválido..." });

  try {
    const article = await Article.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!article)
      return res.status(404).json({ error: "Artigo não encontrado..." });
    res.status(200).json({ article, message: "Artigo atualizado!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
};

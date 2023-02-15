const { scrape } = require("../scraper");
const getDevGoArticles = async (req, res) => {
  try {
    const devGoArticles = await scrape();
    res.status(200).json(devGoArticles);
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Erro ao buscar artigos de devGo..." });
  }
};

module.exports = { getDevGoArticles };

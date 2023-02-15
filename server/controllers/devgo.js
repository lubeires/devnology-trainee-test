const { scrape } = require("../scraper");
const getDevGoArticles = async (req, res) => {
  try {
    const devGoArticles = await scrape();
    res.status(200).json(devGoArticles);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

module.exports = { getDevGoArticles };

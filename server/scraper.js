const puppeteer = require("puppeteer");

const scrape = async () => {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
  });

  let page = await browser.newPage();
  await page.goto("https://devgo.com.br/", {
    waitUntil: "domcontentloaded",
  });

  // click load more button while it exists
  const loadMorebutton = ".css-1enwsw4";
  while (true) {
    if ((await page.$(loadMorebutton)) !== null) {
      await page.click(loadMorebutton);
      await page.evaluate(() => {
        window.scrollTo(0, window.document.body.scrollHeight);
      });
      await page.waitForTimeout(1000);
    } else break;
  }

  // set articles array scraped from articles cards
  let articles = [];
  const elements = await page.$$(
    ".blog-articles-container .blog-article-card-title a"
  );
  for (const element of elements) {
    articles.push({
      label: await element.evaluate((node) => node.innerText),
      url: await element.evaluate((node) => node.getAttribute("href")),
    });
  }

  await page.close();
  await browser.close();

  return articles;
};

module.exports = { scrape };

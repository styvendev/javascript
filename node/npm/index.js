const puppeteer = require("puppeteer");
const iphone = puppeteer.devices["iPhone 11"];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.emulate(iphone);
  await page.goto("https://www.npmjs.com/package/puppeteer");
  // browser.close();
})();

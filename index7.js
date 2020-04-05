const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://twitter.com/');
  await page.waitFor('a[href="/login"]');
  await page.click('a[href="/login"]');
  await page.waitFor(500);

  await page.waitFor('input[name="session[username_or_email]"]');
  await page.type('input[name="session[username_or_email]"]', 'username');
  await page.type('input[name="session[password]"]', 'password');
  await page.click('#react-root > div > div > div.css-1dbjc4n.r-1pi2tsx.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(8) > div > div');

  // await browser.close();

})();

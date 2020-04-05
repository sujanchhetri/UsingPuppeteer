const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
headless:false,
devtools:true
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path:'example/example1.png'});

  await browser.close();
})();
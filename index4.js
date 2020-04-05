//getting the url or title of the current page
const puppeteer = require('puppeteer');

(async()=>{
const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://exlskills.com/learn-en/courses/aap-learn-go-golang--learn_golang_asap/aap-learn--asapgo/introduction-kxCbhkEvFHZE/getting-started-with-go-lqXLStPtGTth');
  
  let title = await page.title();
  console.log(`Title of the page is ${title}`);

  let url = await page.url();
  console.log(`URL of the page is ${url}`);

  await browser.close();
})()
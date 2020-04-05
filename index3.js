//scrapes and generates the pdf of the site
const puppeteer = require('puppeteer');

(async()=>{
                    const browser = await puppeteer.launch({headless:true});
                    const page =await browser.newPage();
                    await page.goto('https://exlskills.com/learn-en/courses/aap-learn-go-golang--learn_golang_asap/aap-learn--asapgo/introduction-kxCbhkEvFHZE/getting-started-with-go-lqXLStPtGTth');
                    await page.pdf({
                                        path:'./pdf/1.pdf',
                                        format:'A4'
                    })
                    await browser.close();
})()

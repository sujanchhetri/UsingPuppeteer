//Emulating website in a phone
const puppeteer = require('puppeteer');

(async()=>{
                    const devices = require('puppeteer/DeviceDescriptors');

                    const browser = await puppeteer.launch({ headless: false });
                    const page = await browser.newPage();
                    await page.emulate(devices['iPhone X']);
                  
                    await page.goto('https://exlskills.com/learn-en/courses/aap-learn-go-golang--learn_golang_asap/aap-learn--asapgo/introduction-kxCbhkEvFHZE/getting-started-with-go-lqXLStPtGTth');
                  
                    
                    
})()              
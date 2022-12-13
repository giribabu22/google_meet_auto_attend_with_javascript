const puppeteer = require('puppeteer');

async function loginGoogle() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: `/snap/bin/brave`,
    });
    const page = await browser.newPage();
    await page.goto('https://accounts.google.com/signin')
    await page.type('.whsOnd', 'giribabu22@navgurukul.org')
    await page.keyboard.press("Enter")
    // await page.click('#identifierNext > div > button > span')
    // let write = await page.waitForSelector("input[type='password']")
    // await page.type('input[name="Passwd"]', 'prem@630')
    // await page.type("input[type=password]",'prem@630') 
    // await page.type('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input', 'prem@630')
    // await page.click('#passwordNext > div > button > span')
}
loginGoogle()
// async function run(url) {
//     const page = await browser.newPage();
//     await page.goto('https://meet.google.com/'+url);
// }
// run('kvb-xdjf-pag');

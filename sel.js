const {keyboard} = require("puppeteer");
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin());

(async ()=>{
    const browser = await puppeteer.launch({
        executablePath: "/snap/bin/brave",
        headless: false,
        args: [
            '--no-sandbox',
            '--enable-webgl',
            '--disable-gpu'
        ]
    });
    async function setExt(){
        url = 'https://chrome.google.com/webstore/detail/google-meet-attendance-tr/ldjjokmalaidehbgbifihdfdondjgfha'
        const page = await browser.newPage();
        await page.goto(url)

        await page.waitForTimeout(5000);
        // await page.click('.g-c-wb[aria-label="Add to Chrome"]')
        // await page.waitForTimeout(6000);
        // await page.keyboard.press('ArrowLeft')
        // await page.waitForTimeout(2000);
        // await page.keyboard.press("Enter");
        // await page.waitForTimeout(6000);
        await page.goto('brave://extensions/')
        await page.waitForTimeout(6000);
        await page.click('#devMode')
        await page.waitForTimeout(6000);
        await page.click('#loadUnpacked')
    }
    async function google_login(){
        const page = await browser.newPage();
        await page.goto("https://accounts.google.com/signin", { waitUntil: 'networkidle2' });
        await page.type('.whsOnd', 'giribabu22@navgurukul.org');
        await page.keyboard.press("Enter");
        await page.waitForTimeout(2000);
        await page.type('input[type="password"]', 'prem@630')
        await page.keyboard.press("Enter");
        await page.waitForTimeout(8000);
    }
    // await setExt()
    async function meetingJoin(link){
        const page = await browser.newPage();
        
        await page.goto(link, { waitUntil: 'networkidle2' })
        await page.waitForTimeout(3000);
        await page.keyboard.press("Enter");
        await page.type('input[type="text"]', 'bot_is_comming')
        await page.waitForTimeout(1000);
        await page.click('#yDmH0d > c-wiz > div > div > div:nth-child(13) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div > div.Sla0Yd > div > div.XCoPyb > div:nth-child(1) > button > span')
    }
    // await google_login() 
    
    await meetingJoin('https://meet.google.com/kvb-xdjf-pag')
    
})()


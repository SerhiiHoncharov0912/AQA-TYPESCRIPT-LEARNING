import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

after(async () => {
    if (browser) {
        await browser.close();
    }
});

export const getPage = (): Page => {
    if (!page) {
        throw new Error('Browser is not initialized');
    }
    return page;
};

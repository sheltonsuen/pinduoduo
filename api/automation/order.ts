import puppeteer from 'puppeteer';
import { Accounts, Orders } from '../db';

type SavedData = {
  storage: Record<string, string>;
  cookies: string;
};

export const automationOrder = async (account: Accounts, order: Orders) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
  });

  const data: SavedData = JSON.parse(account.data ?? '');

  // set localstorage
  await page.evaluateOnNewDocument((values: SavedData) => {
    localStorage.clear();

    Object.entries(values.storage).forEach(([k, v]) =>
      localStorage.setItem(k, v as string),
    );

    values.cookies.split(';').forEach((v) => (document.cookie = v));
  }, data);

  await page.goto('https://mobile.pinduoduo.com');

  const search = await page.$('svg + span');

  await search?.click();

  await Promise.all([
    page.waitForNavigation(),
    page.waitForSelector('input[type="search"]', { timeout: 5000 }),
  ]);

  const searchInput = await page.$('input[type="search"]');

  await searchInput?.type(order.product, { delay: 200 });

  await searchInput?.press('Enter');

  await Promise.all([page.waitForNavigation()]);

  for (let i = 0; i < 5; i++) {
    const products = await page.$$(
      'div[data-uniqid]>div>div>div:last-child>div:last-child>div>div:first-child>span',
    );

    const prices = await Promise.all(
      products.map((product) => product.evaluate((node) => node.textContent)),
    );

    const priceNubmers = prices
      .map<string>((v) => v?.substring(v.indexOf('¥') + 1) ?? '')
      .map((v) => Number.parseFloat(v));

    console.log('>>>', priceNubmers);

    const lowPriceIndex = priceNubmers.findIndex((v) => v < order.sales_price);
    console.log('>>>kk:', lowPriceIndex);
    if (lowPriceIndex >= 0) {
      await products[lowPriceIndex].click();
      break;
    }

    await page.evaluate(() => window.scroll(0, 840));
  }

  await Promise.all([page.waitForNavigation()]);

  await new Promise((r) => setTimeout(r, 10000));

  await browser.close();
};

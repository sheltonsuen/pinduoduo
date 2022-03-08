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

  await new Promise((r) => setTimeout(r, 10000));
};

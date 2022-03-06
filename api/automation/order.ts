import puppeteer from "puppeteer";
import { Account, Order } from "../db";

type SavedData = {
  storage: Record<string, string>;
  cookies: string;
};

export const automationOrder = async (account: Account, order: Order) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
  });

  const data: SavedData = JSON.parse(account.data ?? "");

  // set localstorage
  await page.evaluateOnNewDocument((values: SavedData) => {
    localStorage.clear();

    Object.entries(values.storage).forEach(([k, v]) =>
      localStorage.setItem(k, v as string),
    );

    values.cookies.split(";").forEach((v) => (document.cookie = v));
  }, data);

  await page.goto("https://mobile.pinduoduo.com");
};

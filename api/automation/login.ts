import puppeteer from 'puppeteer';

const waitForCode = (phone: string, callback: () => Promise<void>) => {
  return new Promise<void>((resolve) => {
    const func = async () => {
      await callback()
        .then(resolve)
        .catch(() => {
          setTimeout(func, 5000);
        });
    };

    setTimeout(func, 5000);
  });
};

export const login = async (phone: string) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
  });
  await page.goto('https://mobile.pinduoduo.com/login.html');

  const loginButton = await page.$('.phone-login');
  await loginButton?.click();

  const phoneNumberInput = await page.$<HTMLInputElement>('#user-mobile');
  await phoneNumberInput?.type(phone, { delay: 100 });

  await page.waitForSelector('#code-button:not([disabled])');
  const sendCodeButton = await page.$('#code-button');
  await sendCodeButton?.click();

  await waitForCode(phone, async () => {
    const submitButton = await page.$('#submit-button');
    if (!submitButton) {
      return Promise.reject();
    }

    await Promise.all([
      page.waitForNavigation(),
      submitButton?.click(),
      page.waitForSelector('.common-footer-module', { timeout: 5000 }),
    ]).catch(async () => {
      await page.evaluate(() => {
        const codeInput = document.getElementById(
          'input-code',
        ) as HTMLInputElement;
        if (codeInput) {
          codeInput.value = '';
        }
      });
      return Promise.reject();
    });
  });

  console.log('>>>> navigate');

  await waitForCode(phone, async () => {
    await Promise.all([
      page.waitForNavigation(),
      page.waitForSelector('#orders', { timeout: 5000 }),
    ]);
  });

  console.log('>>>>>> in');

  const storage = await page.evaluate(() =>
    Array(localStorage.length)
      .fill(1)
      .map<string>((_, i) => localStorage.key(i) ?? '')
      .filter((v) => v)
      .reduce(
        (acc, cur) => Object.assign(acc, { [cur]: localStorage.getItem(cur) }),
        {},
      ),
  );

  const cookies = await page.evaluate(() => document.cookie);
  await browser.close();

  return { storage, cookies };
};

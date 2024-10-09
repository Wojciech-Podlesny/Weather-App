import { Page, Locator } from "@playwright/test";

export class HelperBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visitWebsite() {
    await this.page.goto("https://weather-app-xs.vercel.app/");
  }

  async parseNumber(locator: Locator): Promise<number | null> {
    try {
      const text = await locator.textContent();
      return Number(text);
    } catch (error) {
      console.error(`Error parsing number for locator ${locator}:`, error);
      return null;
    }
  }
}

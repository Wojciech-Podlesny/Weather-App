import {Locator, Page} from "@playwright/test";

export class HelperBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async parseNumber(locator: Locator): Promise<number | null> {
    try {
      const text = await locator.textContent();
      if (text) {
        const number = text.match(/[\d.]+/);
        return number ? Number(number[0]) : null;
      }
      return null;
    } catch (error) {
      console.error(`Error parsing number for locator ${locator}:`, error);
      return null;
    }
  }

  async getValue(locator: Locator): Promise<number | null> {
    const isVisible = await locator.isVisible();
    return isVisible ? this.parseNumber(locator) : null;
  }
}

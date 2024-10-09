import { Locator, Page } from "@playwright/test";

export class HourlyForecastPage {
  private readonly page: Page;
  private readonly todayTab: Locator;
  private readonly tomorrowTab: Locator;
  private readonly afterTomorrowTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todayTab = page.locator('[data-testid="tab-today"]');
    this.tomorrowTab = page.locator('[data-testid="tab-tomorrow"]');
    this.afterTomorrowTab = page.locator('[data-testid="tab-after-tomorrow"]');
  }

  async clickToday() {
    await this.todayTab.click();
  }

  async clickTomorrow() {
    await this.tomorrowTab.click();
  }

  async clickAfterTomorrow() {
    await this.afterTomorrowTab.click();
  }

  async isTabActive(tab: "Today" | "Tomorrow" | "AfterTomorrow") {
    const activeTab =
      tab === "Today"
        ? this.todayTab
        : tab === "Tomorrow"
        ? this.tomorrowTab
        : this.afterTomorrowTab;
    return await activeTab.evaluate((el) => el.classList.contains("underline"));
  }

  async clickTab(tab: "Today" | "Tomorrow" | "AfterTomorrow") {
    const tabLocator =
      tab === "Today"
        ? this.todayTab
        : tab === "Tomorrow"
        ? this.tomorrowTab
        : this.afterTomorrowTab;
    await tabLocator.click();
  }

  async areAllTabsVisible(): Promise<boolean[]> {
    return await Promise.all([
      this.todayTab.isVisible(),
      this.tomorrowTab.isVisible(),
      this.afterTomorrowTab.isVisible(),
    ]);
  }
}

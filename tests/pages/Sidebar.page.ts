import { Locator, Page } from "@playwright/test";

export class SidebarPage {
  private readonly page: Page;
  private readonly sidebar: Locator;
  private readonly dashboardLink: Locator;
  private readonly mapsLink: Locator;
  private readonly savedLocationLink: Locator;
  private readonly settingsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebar = page.locator('[data-testid="sidebar"]');
    this.dashboardLink = page.locator('[data-testid="dashboard-link"]');
    this.mapsLink = page.locator('[data-testid="maps-link"]');
    this.savedLocationLink = page.locator('[data-testid="saved-location-link"]');
    this.settingsLink = page.locator('[data-testid="settings-link"]');
  }

  async clickDashboard() {
    await this.dashboardLink.click();
  }

  async clickMaps() {
    await this.mapsLink.click();
  }

  async clickSavedLocation() {
    await this.savedLocationLink.click();
  }

  async clickSettings() {
    await this.settingsLink.click();
  }

  async isSidebarVisible() {
    return this.sidebar.isVisible();
  }

  async checkUrl(expectedUrl: string) {
    await this.page.waitForLoadState("networkidle");
  }

  async areAllLinksVisible(): Promise<boolean[]> {
    return Promise.all([
      this.dashboardLink.isVisible(),
      this.mapsLink.isVisible(),
      this.savedLocationLink.isVisible(),
      this.settingsLink.isVisible(),
    ]);
  }
}

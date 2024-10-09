import { Locator, Page } from "@playwright/test";

export class HeaderPage {
  private readonly page: Page;
  private readonly searchInput: Locator;
  private readonly errorToastMessage: Locator;
  readonly darkModeToggle: Locator;
  readonly lightModeToggle: Locator;
  private readonly locationLabel: Locator;
  private readonly errorToastBody: Locator;
  private readonly geolocationIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('[data-testid="input-element"]');
    this.errorToastMessage = page.locator(".Toastify__toast-container");
    this.darkModeToggle = page.locator('[data-testid="dark"]');
    this.lightModeToggle = page.locator('[data-testid="light"]');
    this.geolocationIcon = page.locator('[data-testid="geolocation-icon"]');
    this.locationLabel = page.locator('[data-testid="location-name"]');
    this.errorToastBody = page.locator(".Toastify__toast-body");
  }

  async goToHomePage() {
    await this.page.goto("http://localhost:3000/");
  }

  async searchForLocation(location: string) {
    await this.searchInput.waitFor({ state: "visible" });
    await this.searchInput.click();
    await this.searchInput.fill(location);
    await this.searchInput.press("Enter");
  }

  async getLocationText(): Promise<string | null> {
    await this.locationLabel.waitFor();
    return await this.locationLabel.textContent();
  }

  async getErrorToastMessage(): Promise<string | null> {
    await this.errorToastMessage.first().waitFor();
    const toastBody = await this.errorToastBody.first();
    await toastBody.waitFor();
    return await toastBody.textContent();
  }

  async toggleDarkMode(enableDarkMode: boolean) {
    if (enableDarkMode) {
      await this.darkModeToggle.click();
    } else {
      await this.lightModeToggle.click();
    }
  }

  async isDarkModeToggleVisible(): Promise<boolean> {
    return this.darkModeToggle.isVisible();
  }

  async isLightModeToggleVisible(): Promise<boolean> {
    return this.lightModeToggle.isVisible();
  }

  async setGeolocation() {
    await this.geolocationIcon.click()
  }

  async darkMode() {
    await this.darkModeToggle.click()
  }
}

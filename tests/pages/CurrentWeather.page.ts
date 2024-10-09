import { Locator, Page } from "@playwright/test";

export class CurrentWeatherPage {
  private readonly page: Page;
  private readonly locationName: Locator;
  private readonly temperature: Locator;
  private readonly condition: Locator;
  private readonly dateAndTime: Locator;
  private readonly toggleUnitButton: Locator;
  private readonly celsiusTemp: Locator;
  private readonly fahrenheitTemp: Locator;
  private readonly chartCanvas: Locator;

  constructor(page: Page) {
    this.page = page;
    this.temperature = page.locator('[data-testid="temperature-id"]');
    this.toggleUnitButton = page.locator('[data-testid="button-id"]');
    this.fahrenheitTemp = page.locator('[data-testid="fahrenheit"]');
    this.celsiusTemp = page.locator('[data-testid="celcius-id"]');
    this.chartCanvas = page.locator("canvas");
  }

  async getCelsiusTemperature(): Promise<string | null> {
    return await this.temperature.textContent();
  }

  async getFahrenheitTemperature(): Promise<string | null> {
    return await this.temperature.textContent();
  }

  async clickToggleTemperatureUnit() {
    await this.toggleUnitButton.click();
    return this.toggleUnitButton.textContent();
  }

  async isChartVisible() {
    return await this.chartCanvas.isVisible();
  }

  async weatcherDetailsVisible() {
    return this.temperature.isVisible()

  }



}

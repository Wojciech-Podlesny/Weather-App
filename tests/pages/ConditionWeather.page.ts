import { Locator, Page } from "@playwright/test";

export class ConditionWeatherPage {
  private readonly page: Page;
  private readonly humidity: Locator;
  private readonly visibility: Locator;
  private readonly pressure: Locator;
  private readonly feelsLike: Locator;
  private readonly airQuality: Locator;
  private readonly airQuality2: Locator;
  private readonly uvIndex: Locator;
  private readonly wind: Locator;
  private readonly sunrise: Locator;

  constructor(page: Page) {
    this.page = page;
    this.humidity = page.locator('[data-testid="humidity-id"]');
    this.visibility = page.locator('[data-testid="visibility-id"]');
    this.pressure = page.locator('[data-testid="pressure-id"]');
    this.feelsLike = page.locator('[data-testid="feels-like-id"]');
    this.airQuality = page.locator('[data-testid="air-quality-id"]');
    this.airQuality2 = page.locator('[data-testid="air-quality2-id"]');
    this.uvIndex = page.locator('[data-testid="uv-index-id"]');
    this.wind = page.locator('[data-testid="wind-id"]');
    this.sunrise = page.locator('[data-testid="sunrise-id"]');
  }

  private async parseNumber(locator: Locator): Promise<number | null> {
    try {
      const text = await locator.textContent();
      return Number(text);
    } catch (error) {
      console.error(`Error parsing number for locator ${locator}:`, error);
      return null;
    }
  }

  async getHumidity(): Promise<number | null> {
    return this.parseNumber(this.humidity);
  }

  async getVisibility(): Promise<number | null> {
    return this.parseNumber(this.visibility);
  }

  async getPressure(): Promise<number | null> {
    return this.parseNumber(this.pressure);
  }

  async getFeelsLike(): Promise<number | null> {
    return this.parseNumber(this.feelsLike);
  }

  async getAirQuality(): Promise<number | null> {
    return this.parseNumber(this.airQuality);
  }

  async getAirQuality2(): Promise<number | null> {
    return this.parseNumber(this.airQuality2);
  }

  async getUVIndex(): Promise<number | null> {
    return this.parseNumber(this.uvIndex);
  }

  async getWind(): Promise<number | null> {
    return this.parseNumber(this.wind);
  }

  async getSunrise(): Promise<number | null> {
    return this.parseNumber(this.sunrise);
  }
}

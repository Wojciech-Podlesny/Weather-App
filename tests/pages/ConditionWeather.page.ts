import { Locator, Page } from "@playwright/test";
import {HelperBase} from "../helpers/HelperBase";

export class ConditionWeatherPage extends HelperBase {
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
    super(page)
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

  async getHumidityValue(): Promise<number | null> {
    return this.getValue(this.humidity)
  }


  async getVisibilityValue(): Promise<number | null> {
    return this.parseNumber(this.visibility);
  }

  async getPressureValue(): Promise<number | null> {
    return this.parseNumber(this.pressure);
  }

  async getFeelsLikeValue(): Promise<number | null> {
    return this.parseNumber(this.feelsLike);
  }

  async getAirQualityValue(): Promise<number | null> {
    return this.parseNumber(this.airQuality);
  }

  async getAirQuality2Value(): Promise<number | null> {
    return this.parseNumber(this.airQuality2);
  }

  async getUVIndexValue(): Promise<number | null> {
    return this.parseNumber(this.uvIndex);
  }

  async getWindValue(): Promise<number | null> {
    return this.parseNumber(this.wind);
  }

  async getSunriseValue(): Promise<number | null> {
    return this.parseNumber(this.sunrise);
  }
}

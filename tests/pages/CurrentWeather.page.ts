import { Locator, Page } from "@playwright/test";
import {HelperBase} from "../helpers/HelperBase";

export class CurrentWeatherPage extends HelperBase {
  private readonly temperature: Locator;
  private readonly toggleUnitButton: Locator;
  private readonly celsiusTemp: Locator;
  private readonly fahrenheitTemp: Locator;


  constructor(page: Page) {
    super(page);
    this.temperature = page.locator('[data-testid="temperature-id"]');
    this.toggleUnitButton = page.locator('[data-testid="button-id"]');
    this.fahrenheitTemp = page.locator('[data-testid="fahrenheit"]');
    this.celsiusTemp = page.locator('[data-testid="celcius-id"]');
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

  async getTemperatureValue(): Promise<number | null> {
    return this.getValue(this.temperature)
  }




}

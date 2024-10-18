import { Locator, Page } from "@playwright/test";

export class WeatherOtherCitiesListPage {
  private readonly page: Page;
  private readonly weatherCityContainers: Locator;
  readonly cities: string[] = ['Warsaw', 'Katowice', 'Rzeszów', 'Wroclaw', 'Gdansk', 'Lublin', 'Bydgoszcz'];

  constructor(page: Page) {
    this.page = page;
    this.weatherCityContainers = page.locator('[data-testid="cities"]');
  }

  async getWeatherForAllCities(): Promise<{ city: string; temperature: string | null }[]> {
    const weatherData: { city: string; temperature: string | null }[] = [];

    for (let i = 0; i < this.cities.length; i++) {
      const cityName = this.cities[i];
      const temperature = await this.getTemperatureForCity(cityName);
      if (temperature) {
        weatherData.push({ city: cityName, temperature });
      }
    }

    return weatherData;
  }

  async getTemperatureForCity(cityName: string): Promise<string | null> {
    const cityContainer = this.weatherCityContainers.locator(`h2:has-text("${cityName}")`);
    const temperatureElement = cityContainer.locator('..').locator('h2').nth(1);
    const temperature = await temperatureElement.textContent();
    return temperature?.trim() || null;
  }
}

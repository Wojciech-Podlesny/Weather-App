import { Locator, Page } from "@playwright/test";

export class WeatherOtherCitiesListPage {
  private readonly page: Page;
  readonly weatherCityContainers: Locator;
  readonly cities: string[] = ['Warsaw', 'Katowice', 'Rzeszów', 'Wroclaw', 'Gdansk', 'Lublin', 'Bydgoszcz'];

  constructor(page: Page) {
    this.page = page;
    this.weatherCityContainers = page.locator('[data-testid="cities-container"]');
  }

  async getWeatherForAllCities(): Promise<{ city: string; temperature: string | null }[]> {
    const weatherData: { city: string; temperature: string | null }[] = [];
    const temperaturePromises = this.cities.map(cityName => this.getTemperatureForCity(cityName));
    const temperatures = await Promise.all(temperaturePromises);

    temperatures.forEach((temperature, index) => {
      if (temperature) {
        weatherData.push({ city: this.cities[index], temperature });
      } else {
        console.warn(`Failed to take temperature for the city: ${this.cities[index]}`);
      }
    });

    return weatherData;
  }

  async getTemperatureForCity(cityName: string): Promise<string | null> {
    const cityContainer = this.weatherCityContainers.locator(`h2:has-text("${cityName}")`);

    if (!(await cityContainer.isVisible())) {
      return null;
    }

    const temperatureElement = cityContainer.locator('..').locator('h2').nth(1);
    const temperature = await temperatureElement.textContent();
    return temperature?.trim() || null;
  }

  async areAllCitiesDisplayed(): Promise<boolean> {
    const visibleCities = await this.weatherCityContainers.locator('[data-testid="location-city"]').allTextContents();
    return this.cities.every(city => visibleCities.includes(city));
  }
}

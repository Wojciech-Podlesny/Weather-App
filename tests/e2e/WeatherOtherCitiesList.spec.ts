import { test, expect } from "@playwright/test";
import { WeatherOtherCitiesListPage } from "../pages/WeatherOtherCities.page";

test.describe('Weather Tests for Various Cities', () => {
  let weatherPage: WeatherOtherCitiesListPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('http://twojastrona.com'); // Change to the correct URL
    weatherPage = new WeatherOtherCitiesListPage(page);
  });

  test('Check weather forecast for all cities in the array', async () => {
    const weatherForCities = await weatherPage.getWeatherForAllCities();

    // Verify that we have data for all cities in the array
    expect(weatherForCities.length).toBe(weatherPage.cities.length);
    console.log(`Fetched weather data for ${weatherForCities.length} cities.`);

    weatherForCities.forEach(data => {
      console.log(`City: ${data.city}, Temperature: ${data.temperature}`);
      expect(data.city).toBeTruthy();  // Ensure the city name is not empty
      expect(data.temperature).toMatch(/^\d+(\.\d+)?\s*°C$/); // Ensure temperature matches the expected format
    });
  });

  test('Check weather forecast for a specific city (Warsaw)', async () => {
    const cityName = 'Warsaw';
    const temperature = await weatherPage.getTemperatureForCity(cityName);
    console.log(`Temperature in ${cityName}: ${temperature}`);

    // Check if the temperature is in the correct format
    expect(temperature).toMatch(/^\d+(\.\d+)?\s*°C$/); // Ensure temperature matches the expected format
  });

  // Additional test cases can be added here for more coverage
  test('Check temperatures for additional cities', async () => {
    const additionalCities = ['Katowice', 'Rzeszów', 'Wroclaw', 'Gdansk', 'Lublin', 'Bydgoszcz'];

    for (const cityName of additionalCities) {
      const temperature = await weatherPage.getTemperatureForCity(cityName);
      console.log(`Temperature in ${cityName}: ${temperature}`);
      expect(temperature).toMatch(/^\d+(\.\d+)?\s*°C$/); // Ensure temperature matches the expected format
    }
  });
});

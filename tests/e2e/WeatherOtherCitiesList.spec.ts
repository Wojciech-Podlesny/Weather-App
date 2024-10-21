import { test, expect } from "@playwright/test";
import { WeatherOtherCitiesListPage } from "../pages/WeatherOtherCitiesList.page";
import { HeaderPage } from "../pages/Header.page";

let headerPage: HeaderPage;
let weatherOtherCities: WeatherOtherCitiesListPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  weatherOtherCities = new WeatherOtherCitiesListPage(page);
  await headerPage.goToHomePage();
});

test.describe('Weather forecast for different cities', () => {

  test('Check if all cities are displayed on the page', async () => {
    await headerPage.searchForLocation('Katowice');
    await weatherOtherCities.weatherCityContainers.waitFor();
    const areAllCitiesDisplayed = await weatherOtherCities.areAllCitiesDisplayed();
    expect(areAllCitiesDisplayed).toBe(true);
  });

  test('Check weather forecast for all cities', async () => {
    await headerPage.searchForLocation('Katowice');
    const weatherForCities = await weatherOtherCities.getWeatherForAllCities();
    expect(weatherForCities.length).toBe(weatherOtherCities.cities.length);

    weatherForCities.forEach(data => {
      expect(data.city).toBeTruthy();
      expect(data.temperature).toMatch(/^\d+(\.\d+)?\s*°C$/);
    });
  });

  test('Check weather forecast for a specific city', async () => {
    await headerPage.searchForLocation('Katowice');
    const cityName = 'Warsaw';
    const temperature = await weatherOtherCities.getTemperatureForCity(cityName);
    expect(temperature).toMatch(/^\d+(\.\d+)?\s*°C$/);
  });

  test('Check error handling for non-existent city', async () => {
    await headerPage.searchForLocation('Rybnik');
    const temperature = await weatherOtherCities.getTemperatureForCity('Rybnik');
    expect(temperature).toBeNull();
  });
});

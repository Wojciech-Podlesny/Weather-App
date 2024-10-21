import { test, expect} from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config()

test.describe('Weather API Tests', () => {

  test('Fetch current weather for valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.location.name).toBe(location);
    expect(data.current.temp_c).toBeDefined();
    expect(data.current.condition.text).toBeDefined();
  });

  test('Fetch forecast for valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=5`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.location.name).toBe(location);
    expect(data.forecast.forecastday).toHaveLength(5);
  });

  test('Return error for invalid location', async () => {
    const location = 'InvalidLocation';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error.message).toContain('Invalid location');
  });

  test('Fetch air quality data for valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=yes`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.current.air_quality).toBeDefined();
  });

  test('Fetch geolocation data for valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API_KEY}&q=${location}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].name).toBe(location);
  });

});

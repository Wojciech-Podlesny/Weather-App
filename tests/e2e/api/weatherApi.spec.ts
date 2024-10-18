import { test, expect} from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config()

const API_KEY = process.env.REACT_APP_API_KEY;

test.describe('Weather API Tests', () => {
  
  test('Should fetch current weather for a valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.location.name).toBe(location);
    expect(data.current.temp_c).toBeDefined();
    expect(data.current.condition.text).toBeDefined();
  });

  test('Should fetch forecast for a valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.location.name).toBe(location);
    expect(data.forecast.forecastday).toHaveLength(5);
  });

  test('Should return error for an invalid location', async () => {
    const location = 'InvalidLocation';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error.message).toContain('Invalid location');
  });

  test('Should fetch air quality data for a valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.current.air_quality).toBeDefined();
  });

  test('Should fetch geolocation data for a valid location', async () => {
    const location = 'London';
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].name).toBe(location);
  });

});

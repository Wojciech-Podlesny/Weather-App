// import {faker} from "@faker-js/faker"




// export const mockWeatherData = {
//   location: {
//     name: "Warsaw",
//     region: "Masovian",
//     country: "Poland",
//     lat: 52.2297,
//     lon: 21.0122,
//     tz_id: "Europe/Warsaw",
//     localtime: "2024-10-06 15:00",
//     localtime_epoch: 1696596000,
//   },
//   current: {
//     temp_c: 18,
//     temp_f: 64.4,
//     condition: {
//       text: "Partly cloudy",
//       icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//       code: 1003,
//     },
//     humidity: 60,
//     wind_kph: 15,
//     pressure_mb: 1019.0,
//     precip_mm: 0.0,
//     feelslike_c: 13.6,
//     feelslike_f: 56.4,
//     vis_km: 10.0,
//     uv: 3.0,
//     air_quality: {
//       pm2_5: 4.995,
//       pm10: 8.325,
//     },
//   },

//   forecast: {
//     forecastday: [
//       {
//         date: "2024-10-05",
//         date_epoch: 1728086400,
//         day: {
//           maxtemp_c: 16.7,
//           maxtemp_f: 62.0,
//           mintemp_c: 10.0,
//           mintemp_f: 50.0,
//           avgtemp_c: 13.0,
//           avgtemp_f: 55.4,
//           maxwind_mph: 11.4,
//           maxwind_kph: 18.4,
//           totalprecip_mm: 0.0,
//           totalprecip_in: 0.0,
//           totalsnow_cm: 0.0,
//           avgvis_km: 10.0,
//           avgvis_miles: 6.0,
//           avghumidity: 68,
//           daily_will_it_rain: 0,
//           daily_chance_of_rain: 0,
//           daily_will_it_snow: 0,
//           daily_chance_of_snow: 0,
//           condition: {
//             text: "Sunny",
//             icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
//             code: 1000,
//           },
//           uv: 3.0,
//         },

//         astro: {
//           sunrise: "07:08 AM",
//           sunset: "06:28 PM",
//         },
//       },
//     ],
//   },
// };
import { faker } from "@faker-js/faker";

// Definicja interfejsów dla danych pogodowych
interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
  localtime_epoch: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: Condition;
  humidity: number;
  wind_kph: number;
  pressure_mb: number;
  precip_mm: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  uv: number;
  air_quality: {
    pm2_5: number;
    pm10: number;
  };
}

interface DayForecast {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avgvis_km: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

interface Astro {
  sunrise: string;
  sunset: string;
}

interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayForecast;
  astro: Astro;
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

// Generowanie losowych danych pogodowych przy użyciu Faker
import { faker } from "@faker-js/faker";

// Definicja interfejsów dla danych pogodowych
interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
  localtime_epoch: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: Condition;
  humidity: number;
  wind_kph: number;
  pressure_mb: number;
  precip_mm: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  uv: number;
  air_quality: {
    pm2_5: number;
    pm10: number;
  };
}

interface DayForecast {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avgvis_km: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

interface Astro {
  sunrise: string;
  sunset: string;
}

interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayForecast;
  astro: Astro;
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

// Generowanie losowych danych pogodowych przy użyciu Faker z nowymi funkcjami
export const mockWeatherData: WeatherData = {
  location: {
    name: faker.location.city(), // Zaktualizowana metoda dla miasta
    region: faker.location.state(), // Zaktualizowana metoda dla regionu
    country: faker.location.country(), // Zaktualizowana metoda dla kraju
    lat: parseFloat(faker.location.latitude()), // Losowa szerokość geograficzna
    lon: parseFloat(faker.location.longitude()), // Losowa długość geograficzna
    tz_id: faker.location.timeZone(), // Zaktualizowana metoda dla strefy czasowej
    localtime: faker.date.recent().toISOString(), // Losowy czas lokalny
    localtime_epoch: Math.floor(faker.date.recent().getTime() / 1000),
  },
  current: {
    temp_c: faker.number.float({ min: -10, max: 35 }),
    temp_f: faker.number.float({ min: 14, max: 95 }),
    condition: {
      text: faker.lorem.word(), // Losowy opis pogody
      icon: faker.image.url(), // Losowy URL ikony
      code: faker.number.int({ min: 1000, max: 1030 }),
    },
    humidity: faker.number.int({ min: 20, max: 100 }),
    wind_kph: faker.number.int({ min: 0, max: 100 }),
    pressure_mb: faker.number.int({ min: 980, max: 1050 }),
    precip_mm: faker.number.float({ min: 0, max: 10 }),
    feelslike_c: faker.number.float({ min: -10, max: 35 }),
    feelslike_f: faker.number.float({ min: 14, max: 95 }),
    vis_km: faker.number.float({ min: 0, max: 20 }),
    uv: faker.number.int({ min: 0, max: 11 }),
    air_quality: {
      pm2_5: faker.number.float({ min: 0, max: 100 }),
      pm10: faker.number.float({ min: 0, max: 100 }),
    },
  },

  forecast: {
    forecastday: [
      {
        date: faker.date.future().toISOString().split('T')[0],
        date_epoch: Math.floor(faker.date.future().getTime() / 1000),
        day: {
          maxtemp_c: faker.number.float({ min: -10, max: 35 }),
          mintemp_c: faker.number.float({ min: -20, max: 25 }),
          avgtemp_c: faker.number.float({ min: -15, max: 30 }),
          maxwind_kph: faker.number.int({ min: 0, max: 100 }),
          totalprecip_mm: faker.number.float({ min: 0, max: 100 }),
          avgvis_km: faker.number.float({ min: 0, max: 20 }),
          avghumidity: faker.number.int({ min: 20, max: 100 }),
          daily_will_it_rain: faker.datatype.boolean() ? 1 : 0,
          daily_chance_of_rain: faker.number.int({ min: 0, max: 100 }),
          daily_will_it_snow: faker.datatype.boolean() ? 1 : 0,
          daily_chance_of_snow: faker.number.int({ min: 0, max: 100 }),
          condition: {
            text: faker.lorem.word(), // Losowy opis pogody
            icon: faker.image.url(), // Losowy URL ikony
            code: faker.number.int({ min: 1000, max: 1030 }),
          },
          uv: faker.number.int({ min: 0, max: 11 }),
        },
        astro: {
          sunrise: faker.date.recent().toLocaleTimeString(),
          sunset: faker.date.recent().toLocaleTimeString(),
        },
      },
    ],
  },
};
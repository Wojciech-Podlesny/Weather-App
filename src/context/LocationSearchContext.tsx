import { createContext, useState, useEffect } from "react";
import {
  WeatherContextType,
  WeatherData,
  HourlyForecast,
  Props,
  Location,
} from "../types/WeatherData";
import { ErrorToast } from "../components/ErrorToast/ErrorToast";

const showErrorToast = (message: string) => {
  ErrorToast({ message });
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: Props) => {
  const [location, setLocation] = useState<Location>({
    name: "Warsaw",
    country: "Poland",
  });
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (location.name) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&aqi=yes&q=${location.name},${location.country}&days=5`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })

        .then((data) => {
          if (data.error) {
            setError(data.error.message);
            showErrorToast(`${data.error.message}`);
            return;
          }

          const extractedHourlyData: HourlyForecast[] =
            data.forecast.forecastday[0].hour.map((hour: any) => ({
              time: hour.time,
              temp_c: hour.temp_c,
              condition: hour.condition,
              wind_kph: hour.wind_kph,
              humidity: hour.humidity,
            }));

          const extractedData: WeatherData = {
            lat: data.location.lat,
            lon: data.location.lon,
            precip_mm: data.current.precip_mm,
            temperature: data.current.temp_c,
            wind: data.current.wind_kph,
            humidity: data.current.humidity,
            visibility: data.current.vis_km,
            pressure: data.current.pressure_mb,
            feelsLike: data.current.feelslike_c,
            uvIndex: data.current.uv,
            airQuality: {
              pm2_5: data.current.air_quality.pm2_5,
              pm10: data.current.air_quality.pm10,
            },
            sunset: data.forecast.forecastday[0].astro.sunset,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            cityName: data.location.name,
            country: data.location.country,
            condition: data.current.condition.text,
            code: data.current.condition.code,
            forecast: data.forecast,
            hourlyForecast: extractedHourlyData,
          };

          setWeatherData(extractedData);

          if (
            location.name !== extractedData.cityName ||
            location.country !== extractedData.country
          ) {
            setLocation({
              name: extractedData.cityName,
              country: extractedData.country,
            });
          }

          setError(null);
        })
        .catch((error) => {
          console.error("Błąd fetch:", error);
          setError("Error while downloading weather data");
          showErrorToast("Error while downloading weather data");
        });
    }
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{ weatherData, setLocation, location, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

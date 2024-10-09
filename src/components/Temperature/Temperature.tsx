import { useWeather } from "../../hooks/useWeather";
import { useUnit } from "../../hooks/useUnit";
import { convertTemperature } from "../../utils/ConvertTemperature";

const Temperature = () => {
  const { weatherData } = useWeather();
  const { celcius } = useUnit();

  return (
    <div>
      {weatherData && (
        <div>
          <p data-testid="temperature-id">
            {convertTemperature(weatherData.temperature, celcius).toFixed(1)}{" "}
            {celcius ? "°C" : "°F"}
          </p>
          <p>{weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};

export { Temperature };

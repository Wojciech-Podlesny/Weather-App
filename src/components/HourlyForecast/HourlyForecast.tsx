import { useState } from "react";
import { useWeather } from "../../hooks/useWeather";
import { WeatherIcon } from "../../utils/WeatherIcon";
import { useTheme } from "../../hooks/useTheme";
import { useUnit } from "../../hooks/useUnit";
import { convertTemperature } from "../../utils/ConvertTemperature";
import { ScrollableList } from "../../utils/ScrollableList";

const HourlyForecast = () => {
  const { weatherData } = useWeather();
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const { isDarkMode } = useTheme();
  const { celcius } = useUnit();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { forecast } = weatherData;
  const days = forecast.forecastday;

  const getEveryFourthHour = (hours: any[]) => {
    return hours.filter((_, index) => index % 7 === 0).slice(0, 4);
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.getHours().toString().padStart(2, "0") + ":00";
  };

  const getDayLabel = (index: number) => {
    switch (index) {
      case 0:
        return "Today";
      case 1:
        return "Tomorrow";
      case 2:
        return "After Tomorrow";
      default:
        return `Day ${index}`;
    }
  };
  console.log(days);
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } col-start-1 col-end-6 row-start-8 row-end-9 lg:col-start-4 lg:col-end-6 lg:row-start-2 lg:row-end-6 rounded-xl p-5 lg:p-0 space-y-4 lg:space-y-0`}
    >
      <div
        className="flex lg:flex-row lg:space-x-3  lg:m-5 space-x-2"
      >
        {days.map((day: any, index: number) => (
          <span
		  data-testid={`tab-${getDayLabel(index).toLowerCase().replace(' ', '-')}`}
            key={index}
            className={`font-semibold cursor-pointer py-2 px-2 rounded mb-2 lg:mb-0 lg:mr-2 text-lg   ${
              selectedDay === index
                ? isDarkMode
                  ? "underline decoration-white underline-offset-8"
                  : "underline decoration-black underline-offset-8"
                : ""
            }`}
            onClick={() => setSelectedDay(index)}
          >
            {getDayLabel(index)}
          </span>
        ))}
      </div>
      <ScrollableList>
        {getEveryFourthHour(days[selectedDay].hour).map(
          (hour: any, index: number) => (
            <li className=" min-w-max mb-4 lg:mb-0 lg:ml-0" key={index}>
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start space-y-4 lg:space-y-0 lg:space-x-2 m-2 border-r-2 lg:border-b-2 lg:border-r-0 px-4 lg:px-0">
                <div>
                  <WeatherIcon conditionCode={hour.condition.code} />
                </div>
                <div className="flex flex-col lg:flex-row justify-around lg:flex-grow">
                  <div className="text-lg">
                    <p className="pb-1">{formatTime(hour.time)}</p>
                    <p className="flex-grow">{hour.condition.text}</p>
                    <p className="pt-2 pb-2">
                      {convertTemperature(hour.temp_c, celcius).toFixed(1)}{" "}
                      {celcius ? "°C" : "°F"}
                    </p>
                  </div>

                  <div className="text-lg">
                    <p>Wind: {hour.wind_kph} km/h</p>
                    <p>Humidity: {hour.humidity} %</p>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ScrollableList>
    </div>
  );
};

export { HourlyForecast };

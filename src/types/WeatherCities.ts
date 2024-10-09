export type WeatherCities = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      icon: string;
    };
  };
};

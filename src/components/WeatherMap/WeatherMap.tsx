import { useEffect, useState } from "react";

type dataMap = {
  zoom: number;
  latitude: number;
  longitude: number;
  layer: string
};

const WeatherMap = ({ layer, latitude, longitude, zoom }: dataMap) => {
  const [mapUrl, setMapUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
 
    const displayMap = async () => {
      try {
        const responseMap = await fetch(
          `https://tile.openweathermap.org/map/${layer}/${zoom}/${Math.round(latitude)}/${Math.round(longitude)}?appid=${process.env.REACT_APP_WEATHER_MAP_KEY}`
        );

        if (responseMap.ok) {
          setMapUrl(responseMap.url);
        } else {
          throw new Error("Failed to load map");
        }
      } catch (error: any) {
        setError(`Error loading map, ${error.message}`);
      }
    };

    displayMap();

  }, [layer, zoom,latitude,longitude]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full relative">
      {mapUrl && (
        <img src={mapUrl} alt="Map" className="w-full h-full object-cover" />
      )}
    </div>
  );
};





export { WeatherMap };


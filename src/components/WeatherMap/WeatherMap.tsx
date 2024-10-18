import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useWeather } from '../../hooks/useWeather';

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png',
  iconSize: [85, 85],
});

const Precipitation = ({ weatherData } : any) => {
  const map = useMap();

  useEffect(() => {
    const layer = L.layerGroup();
    const rainData = weatherData.forecast.forecastday[0].day;

    if (rainData && rainData.precip_mm > 0) {
      const rainCircle = L.circleMarker(
        [weatherData.lat, weatherData.lon],
        {
          radius: Math.sqrt(rainData.precip_mm) * 4,
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.5,
        }
      ).bindPopup(`Opady: ${rainData.precip_mm} mm`);

      layer.addLayer(rainCircle);
      layer.addTo(map); 
    }

    return () => {
      layer.remove(); 
    };
  }, [weatherData, map]);

  return null;
};

const WeatherMap = () => {
  const { weatherData, location, error } = useWeather();

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    return <p>Loading</p>;
  }

  const latitude = weatherData.lat;
  const longitude = weatherData.lon;

  return (
    <div className='flex justify-center items-center py-0 px-0 lg:px-12 lg:py-24'>
      <MapContainer
        center={[latitude, longitude]}
        zoom={10}
        style={{ height: '100vh', width: '100%',position: 'relative', zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Precipitation weatherData={weatherData} />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup >
            <div className="items-center w-full h-full">
              <p className="text-2xl text-black">{location.name}, {location.country}</p>
              <p className="text-2xl text-black">Precipitation: {weatherData.precip_mm} mm</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
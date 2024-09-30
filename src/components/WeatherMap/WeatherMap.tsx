import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Typy danych pogodowych
interface WeatherData {
  location: {
    name: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    precip_mm: number; // Opady w milimetrach
    condition: {
      text: string;
      icon: string;
    };
  };
}

// Ikona dla markera (custom marker)
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png', // Przykład ikony opadów
  iconSize: [35, 35],
});

const WeatherMap = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const latitude = 52.2297; // Domyślne współrzędne (np. Warszawa)
  const longitude = 21.0122;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <MapContainer center={[latitude, longitude]} zoom={10} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {weatherData && (
          <Marker position={[weatherData.location.lat, weatherData.location.lon]} icon={customIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <p>Opady: {weatherData.current.precip_mm} mm</p>     
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
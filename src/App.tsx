import React, { useEffect, useState } from "react";
import Navebar from "./Components/Navebar";
import Weather from "./Components/Weather";
import Forcast from "./Components/Forcast";
import cityPromise from "./utils/CurrentCity";
import fetchWeatherData from "./utils/Weather";
import { WeatherData } from "./Components/Types";
import FadeLoader from "react-spinners/FadeLoader";

const App: React.FC = () => {
  // State variables
  const [currentCity, setCurrentCity] = useState<string>("Cairo");
  const [tempUnit, setTempUnit] = useState<string>("F");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator

  // Fetch current city name using cityPromise
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const city = await cityPromise;
        setCurrentCity(city);
      } catch (error) {
        console.error("Error fetching city name:", error);
      }
    };
    fetchCity();
  }, []);

  // Fetch weather data for the current city
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (currentCity) {
          setLoading(true); // Set loading to true before fetching data
          const data = await fetchWeatherData(currentCity);
          setWeather(data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchWeather();
  }, [currentCity]);

  return (
    <div className="background font-sans">
      {/* Navigation bar */}
      <Navebar setTemp={setTempUnit} temp={tempUnit} />

      {/* Main weather section */}
      {loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><FadeLoader color="#36d7b7" /></div> // Show loading indicator while data is being fetched
      ) : (
        <>
          <Weather
            currentCity={currentCity}
            temp={tempUnit}
            weather={weather}
          />

          {/* Weather forecast */}
          <Forcast temp={tempUnit} weather={weather} />
        </>
      )}
    </div>
  );
};

export default App;

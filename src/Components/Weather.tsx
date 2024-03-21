import React from "react";
import Sunny from "../assets/sunny.png";
import Cloud from "../assets/Cloud.png";
import { WeatherData } from "./Types";

interface Props {
  currentCity: string;
  temp: string;
  weather: WeatherData | null;
}

const Weather: React.FC<Props> = ({ currentCity, temp, weather }) => {
  // Get current date
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString("en-US", { day: "numeric" });
  const year = currentDate.getFullYear();
  const weekday = currentDate.toLocaleString("en-US", { weekday: "long" });
  const formattedDate = `${weekday} ${day}, ${year}`;

  // Extract forecast data
  const forecast = weather?.forecast;
  const currentday = forecast?.forecastday[0]?.day;

  return (
    <div className="mt-[90px] section_p w-full flex flex-col sm:flex-row justify-between items-center text-white font-bold">
      {/* Weather Information */}
      <div className="text-white font-bold self-start">
        <h1 className="text-[64px]">{currentCity}</h1>
        <p className="text-[20px]">{formattedDate}</p>
        <img
          className="mt-10 mb-3 w-[100px] h-[100px]"
          src={weather?.current.condition.text === "Sunny" ? Sunny : Cloud}
          alt="Current Weather"
        />
        <p className="text-[30px]">{weather?.current.condition.text}</p>
      </div>

      {/* Temperature Information */}
      <div className="flex flex-col items-end ml-[-30px]">
        <h2 className="text-[144px] relative mb-[-20px]">
          {temp === "F"
            ? `${Math.floor(weather?.current.feelslike_f || 0)}`
            : `${Math.floor(weather?.current.feelslike_c || 0)}`}
          <span className="absolute top-[-20px] right-[-40px] text-[100px]">
            °
          </span>
        </h2>
        <div className="text-[48px] font-normal mb-4">
          {/* Displaying maximum and minimum temperatures */}
          {currentday ? (
            temp === "F" ? (
              <div>
                <span className="relative mr-[25px]">
                  {Math.floor(currentday.maxtemp_f)}
                  <span className="absolute top-[-20px] right-[-25px]">°</span>
                </span>
                /
                <span className="relative ml-[15px] text-white text-opacity-75">
                  {Math.floor(currentday.mintemp_f)}
                  <span className="absolute top-[-20px] right-[-25px]">°</span>
                </span>
              </div>
            ) : (
              <div>
                <span className="relative mr-[25px]">
                  {Math.floor(currentday.maxtemp_c)}
                  <div className="absolute top-[-20px] right-[-25px]">°</div>
                </span>
                /
                <span className="relative ml-[15px] text-white text-opacity-75">
                  {Math.floor(currentday.mintemp_c)}
                  <span className="absolute top-[-20px] right-[-25px]">°</span>
                </span>
              </div>
            )
          ) : (
            "N/A" // Display if no forecast available
          )}
        </div>

        <p className="text-[24px] font-semibold">
          {weather?.current.condition.text} throughout the day
        </p>
      </div>
    </div>
  );
};

export default Weather;

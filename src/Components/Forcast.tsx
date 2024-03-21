import React, { useState } from "react";
import HourlyForcast from "./HourlyForcast";
import DailyForcast from "./DailyForcast";
import { WeatherData } from "./Types";

interface Props {
  weather: WeatherData | null;
  temp: string;
}

const Forcast: React.FC<Props> = ({ weather, temp }) => {
  const [viewType, setViewType] = useState<"hourly" | "daily">("hourly");

  // If weather is null, render nothing
  if (!weather) {
    return null;
  }
  // Extract forecast data
  const forecast = weather?.forecast;
  const todayForecast = forecast?.forecastday[0];
  const forecastDays = forecast?.forecastday;
  return (
    <div className="section_p mt-[50px] pb-[100px]">
      {/* View type buttons */}
      <div className="flex gap-[30px] text-white text-[22px] font-bold">
        <button
          onClick={() => setViewType("hourly")}
          className={`pb-[12px] border-b-2 ${
            viewType === "hourly" ? "border-white" : "border-transparent"
          }`}
        >
          Hourly
        </button>
        <button
          onClick={() => setViewType("daily")}
          className={`pb-[12px] border-b-2 ${
            viewType === "daily" ? "border-white" : "border-transparent"
          }`}
        >
          Daily
        </button>
      </div>

      {/* Display hourly or daily forecast */}
      <div className=" scrollbar-container py-[30px] items-container overflow-x-auto whitespace-nowrap flex gap-[70px] border-solid border-white border-opacity-50 border-t-[1px] border-b-[1px]">
        {/* Render HourlyForcast component if viewType is hourly */}
        {viewType === "hourly" && (
          <HourlyForcast todayForecast={todayForecast} temp={temp} />
        )}
        {/* Render DailyForcast component if viewType is daily */}
        {viewType === "daily" && (
          <DailyForcast forecastDays={forecastDays} temp={temp} />
        )}
      </div>
    </div>
  );
};

export default Forcast;

import React from "react";
import Sunny from "../assets/sunny.png";
import Cloud from "../assets/Cloud.png";
import { ForecastDay } from "./Types";


interface DailyForecastProps {
  forecastDays: ForecastDay[];
  temp: string;
}
const DailyForecast: React.FC<DailyForecastProps> = ({
  forecastDays,
  temp,
}) => {
  // Function to get the abbreviated day name
  const getDayName = (dateString: string): string => {
    const date = new Date(dateString);
    // Options for formatting the date to get the abbreviated day name
    const options: { weekday?: "short" | "long" | "narrow" } = {
      weekday: "short",
    };
    const dayName = date.toLocaleDateString("en-US", options);
    return dayName.toUpperCase();
  };

  return (
    <>
      {forecastDays?.map((day) => (
        <div
          key={day.date}
          className="flex-shrink-0 text-center text-white font-normal"
        >
          
          <h4 className="text-[24px]">{getDayName(day.date)}</h4>
          {/* Display the weather icon based on the condition */}
          <img
            className="mt-4 mb-2 w-[66px]"
            src={day.day.condition.text === "Sunny" ? Sunny : Cloud}
            alt="Current Weather"
          />
          {/* Displaying temperature based on temp unit */}
          <p className="text-[30px]">
            {temp === "F"
              ? Math.floor(day.day.avgtemp_f)
              : Math.floor(day.day.avgtemp_c)}
            °
          </p>
        </div>
      ))}
    </>
  );
};

export default DailyForecast;

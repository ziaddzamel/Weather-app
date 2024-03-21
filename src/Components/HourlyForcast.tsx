
import Sunny from "../assets/sunny.png";
import Cloud from "../assets/Cloud.png";
import { HourData } from "./Types";


interface Props {
  todayForecast: {
    hour: HourData[];
  } | null;
  temp: string;
}

const HourlyForcast: React.FC<Props> = ({ todayForecast, temp }) => {
  // Getting current hour
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return (
    <>
      {todayForecast?.hour.map((hourData) => (
        <div
          key={hourData.time}
          className="flex-shrink-0 text-center text-white font-normal"
        >
          <h4 className="text-[24px]">
            
            {currentHour === parseInt(hourData.time.split(" ")[1].split(":")[0])
              ? "Now"
              : hourData.time.split(" ")[1]}
          </h4>
          <img
            className="mt-4 mb-2 w-[66px]"
            src={hourData.condition.text === "Sunny" ? Sunny : Cloud} 
            alt="Current Weather"
          />
          <p className="text-[30px]">
            {/* Displaying temperature based on temp unit */}
            {temp === "F"
              ? Math.floor(hourData.temp_f)
              : Math.floor(hourData.temp_c)}
            °
          </p>
        </div>
      ))}
    </>
  );
};

export default HourlyForcast;

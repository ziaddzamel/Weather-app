import React from "react";


interface NavbarProps {
  setTemp: React.Dispatch<React.SetStateAction<string>>;
  temp: string;
}

const Navebar: React.FC<NavbarProps> = ({ setTemp, temp }) => {
  return (
    <nav className="w-full flex justify-between items-center section_p py-[40px]">
      {/* Logo */}
      <div className="text-[16px] sm:text-[24px] md:text-[36px] text-white font-bold">
        INSTAWEATHER
      </div>

      {/* Temperature toggle buttons */}
      <div className="flex">
        {/* Celsius button */}
        <button
          onClick={() => setTemp("C")}
          className={`${
            temp === "C" && "bg-white bg-opacity-25 border-white border-l-[2px]"
          } w-[46px] h-[30px] sm:w-[76px] sm:h-[46px] flex items-center justify-center font-semibold text-white text-[16px] sm:text-[24px]`}
        >
          C
        </button>
        {/* Fahrenheit button */}
        <button
          onClick={() => setTemp("F")}
          className={`${
            temp === "F" &&
            "bg-white bg-opacity-25 border-solid border-white border-l-[2px]"
          } w-[46px] h-[30px] sm:w-[76px] sm:h-[46px] flex items-center justify-center font-semibold text-white text-[16px] sm:text-[24px]`}
        >
          F
        </button>
      </div>
    </nav>
  );
};

export default Navebar;

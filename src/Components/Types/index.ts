export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

export interface CurrentWeather {
  condition: {
    text: string;
  };
  feelslike_c: number;
  feelslike_f: number;
  temp_c: number;
  temp_f: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayData;
  hour: HourData[];
}

export interface DayData {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxtemp_c:number;
  maxtemp_f:number;
  condition: {
    text: string;
  };

  mintemp_c: number;
  mintemp_f: number;
}

export interface HourData {
  time: string;
  temp_c: number;
  temp_f: number;

  condition: {
    text: string;
  };
  feelslike_c: number;
  feelslike_f: number;
}

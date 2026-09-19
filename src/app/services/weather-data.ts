export interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
  };

  daily: {
    temperature_2m_min: number[];
    temperature_2m_max: number[];
  };
}
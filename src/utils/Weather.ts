/**
 * @param currentCity The name of the city for which weather data is to be fetched.
 * @returns A promise that resolves to the fetched weather data.
 */
const fetchWeatherData = async (currentCity: string) => {
  // Ensure that a city name is provided
  if (!currentCity) {
    throw new Error("No city provided");
  }

  // API key for accessing the weather API
  const apiKey: string = "cca4405803f448dcab2151237231811";
  const apiUrl: string = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=14`;

  try {
    // Fetch weather data from the API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    // Parse the JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the fetch process
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default fetchWeatherData;

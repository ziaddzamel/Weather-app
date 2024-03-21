// Define an asynchronous function to fetch the city name
async function fetchCity() {
  try {
    // Fetch user's location information using IP Geolocation API
    const response = await fetch("https://ipinfo.io/json?token=e0acf2240447cb");
    if (!response.ok) {
      throw new Error("Failed to fetch city data");
    }
    const data = await response.json();
    // Extract city name from the API response
    const city = data.city;
    return city; // Return the city name
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
}

// Call the asynchronous function and export the city name
const cityPromise = fetchCity();
export default cityPromise;

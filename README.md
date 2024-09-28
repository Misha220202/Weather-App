# Weather App

This is a weather forecast application that displays current weather conditions and a 7-day forecast for a specified location. The application fetches data from the Visual Crossing Weather API and presents it in a user-friendly format.

## Features

- Displays current weather conditions, including temperature, humidity, wind speed, and chance of rain.
- Shows hourly weather forecast for the next 24 hours.
- Provides a 7-day weather forecast.
- User-friendly interface with search functionality for different locations.

## Code Breakdown

### `buildDomNode.js`

This file contains two main functions:

1. **`buildCurrentWeatherForecastNode(data)`**:
   - Creates a DOM node displaying current weather conditions, including temperature, humidity, and wind speed.
   - Displays hourly weather conditions for the next 24 hours.

2. **`build7DaysWeatherForecastNode(data)`**:
   - Generates a table to display the 7-day weather forecast, including daily humidity, chance of rain, and temperature ranges.

### `fetchData.js`

This file handles data fetching and updating the UI:

- **`fetchData(locationName)`**:
  - Fetches weather data for a given location using the Visual Crossing Weather API.
  - Handles errors and updates the data store with the fetched data.

- **`updateAddress(data)`**:
  - Updates the displayed address based on the fetched data.

- **`updateWeatherForecast(data)`**:
  - Clears existing weather data from the UI and updates it with the new forecast based on the current date.

### `index.js`

The entry point of the application:

- Imports necessary styles and scripts.
- Initializes the application by starting a clock and fetching the initial weather data for Calgary upon loading.

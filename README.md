
# Weather App

Welcome to the Weather App, a simple yet powerful web application that allows users to search for real-time weather conditions of any city around the world. Built using core web technologies such as HTML, CSS, and JavaScript, this app provides a clean and intuitive user experience, offering essential weather data such as current temperature, humidity levels, and wind speed. The weather information is fetched from the OpenWeather API via RapidAPI to ensure the data is accurate and up-to-date.

The app features a minimalistic design with a modern interface, ensuring both a functional and aesthetically pleasing experience. Users can quickly search for weather information by typing in the name of the city, and the app handles API requests to fetch and display the weather details seamlessly. With dynamic icons representing different weather conditions (like clouds, rain, clear skies, etc.), users can easily understand the current weather at a glance.

In addition to its core functionality, the app is responsive, ensuring that it works well across all device sizes, from mobile phones to desktop computers. The code is written with clean structure and proper error handling to provide a smooth user experience even in case of errors, such as entering an incorrect city name.


## Features

- **Search for Weather by City**: Users can enter the name of a city to get the current weather data.
- **Real-time Data**: The app fetches weather data dynamically using the RapidAPI.
- **Weather Icons**: Displays different weather icons based on the weather conditions (e.g., clouds, rain, clear, etc.).
- **Responsive Design**: The app is mobile-friendly and works on different screen sizes.
- **Error Handling**: If the city is not found or there is a connection issue, an error message will be shown.



## Technologies Used

- **HTML5**
- **CSS3**
  - Custom gradients and animations for a sleek UI
- **JavaScript (ES6+)**
  - `fetch` API for making HTTP requests
  - Asynchronous handling with `async/await`
- **OpenWeather API** via RapidAPI

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git

2. Navigate to the project directory:
    ```bash
    cd weather-app

3. Open the index.html file in your browser to view the app.

4. Enter the name of any city in the search input field and click the search button (or press Enter) to fetch the weather data for that city.
## Deployment

This app is deployed using GitHub Pages. You can view it live *here* : .


## API Information

The app uses the OpenWeather API from RapidAPI to fetch real-time weather data.

- API Endpoint: 'https:***********ther?city=' You Have to Get Your Own Api

- API Key: You will need an API key from RapidAPI to fetch weather data. Replace the rapidApiKey variable in the app.js file with your own API key.
## Future Improvements

While the Weather App is functional and user-friendly, several improvements could enhance the overall experience:

- Forecast Data: Add a 5-day weather forecast feature, so users can view upcoming weather conditions.

- Geolocation Support: Automatically detect the user's location and display the weather for their current city upon app load, allowing for instant access to relevant weather data.

- Additional Weather Data: Include more detailed weather information such as UV index, air quality, and sunrise/sunset times to provide users with comprehensive weather insights.

- Favorite Cities: Allow users to save their favorite cities, so they can quickly access weather data for multiple locations without retyping city names.

- Unit Conversion: Add a feature to toggle between Celsius and Fahrenheit for temperature and kilometers/hour or miles/hour for wind speed, giving users flexibility based on their preferences.

- Many more
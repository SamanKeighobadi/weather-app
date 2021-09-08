import { useState } from "react";
//? TailwindCSS
import "./assets/main.css";
import "./assets/style.css";
//? Import Components
import SerachWeather from "./components/SerachWeather";
import Weather from "./components/Weather";
//? Import Custom Hook
import useWeather from "./components/customHook/useWeather";

function App() {
  const [searchCity, setSearchCity] = useState("");

  const API_KEY = "dd683de53dd1cf8e70a116317403b95a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`;

  const { city, country, description, temp, weatherIcon } = useWeather(
    url,
    searchCity
  );

  return (
    <div className="container mx-auto  ">
      <SerachWeather searchCity={(text) => setSearchCity(text)} />
      <Weather
        city={city}
        country={country}
        temp={temp}
        description={description}
        searchCity={(text) => setSearchCity(text)}
        weatherIcon={weatherIcon}
      />
    </div>
  );
}

export default App;

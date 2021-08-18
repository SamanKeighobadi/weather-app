import { useEffect, useState } from "react";
//? Axios
import axios from "axios";
//? TailwindCSS
import "./assets/main.css";
import "./assets/style.css";
//? Import Components
import SerachWeather from "./components/SerachWeather";
import Weather from "./components/Weather";

function App() {
  //? initialize states
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  //? convert the default tepm to clicus
  const calcTemp = (temp) => {
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  };

  //? fetch Weahter data from API
  const fetchWeatherApi = async () => {
    const API_KEY = "dd683de53dd1cf8e70a116317403b95a";
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
      )
      .catch((err) => console.log(err));

    try {
      if (response.data.cod === 404) {
        throw new Error();
      }

      if (searchCity) setCity(response.data.name);
      //* set States
      setCountry(response.data.sys.country);
      setTemp(calcTemp(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setWeatherIcon(response.data.weather[0].id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchCity !== "") {
      fetchWeatherApi();
    }
  }, [searchCity]);

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

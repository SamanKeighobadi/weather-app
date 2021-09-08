/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

const useWeather = (url, searchCity) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  //? convert the default tepm to clicus
  const calcTemp = (temp) => {
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  };

  //? fetch Weahter data from API
  const fetchWeatherApi = async () => {
    const { data } = await axios.get(url).catch((err) => console.log(err));

    try {
      if (data.cod === 404) {
        throw new Error();
      }

      if (searchCity) setCity(data.name);
      //* set States
      setCountry(data.sys.country);
      setTemp(calcTemp(data.main.temp));
      setDescription(data.weather[0].description);
      setWeatherIcon(data.weather[0].id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchCity !== "") {
      fetchWeatherApi();
    }
  }, [searchCity]);

  return { city, country, temp, description, weatherIcon };
};

export default useWeather;

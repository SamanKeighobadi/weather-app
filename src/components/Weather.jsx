import React from "react";
//? Import PropTypes
import PropTypes from "prop-types";
//? Import Icons
import {
  WiThunderstorm,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiCloudy,
} from "react-icons/wi";
import { BiCloudDrizzle } from "react-icons/bi";

const Weather = ({ city, country, description, temp, weatherIcon }) => {
  //! cheecking the status of weahter with id
  const GetWeatherIcon = (id) => {
    switch (true) {
      case id >= 200 && id <= 232:
        return <WiThunderstorm />;
      case id >= 300 && id <= 321:
        return <BiCloudDrizzle />;
      case id > 500 && id <= 531:
        return <WiRain />;
      case id >= 600 && id <= 622:
        return <WiSnow />;
      case id >= 701 && id <= 781:
        return <WiDaySunny />;
      case id === 800:
        return <WiDaySunny />;
      case id >= 801 && id <= 804:
        return <WiCloudy />;
      default:
        return (
          <h1 className="text-4xl  font-bold text-white italic">
            Please Search You City
          </h1>
        );
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-col items-center pt-32 text-white">
        <h1 className="text-5xl  font-bold ">{` ${city} ${" "} ${country}`}</h1>
        <span className="text-9xl py-8">{GetWeatherIcon(weatherIcon)}</span>
        {temp ? (
          <p className="text-4xl mb-4 font-semibold italic ">{temp}&deg;</p>
        ) : null}
        <p className="text-4xl mt-4 font-semibold italic">{description}</p>
      </div>
    </div>
  );
};

//Prop Types
Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  description: PropTypes.string,
  temp: PropTypes.number,
};

export default Weather;

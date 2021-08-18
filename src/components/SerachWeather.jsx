import React, { useState } from "react";
//? import PropTypes
import PropTypes from 'prop-types'
const SerachWeather = ({ searchCity }) => {
  //? initial states
  const [text, setText] = useState("");
  //? handel submit form
  const onSubmit = (e) => {
    e.preventDefault();
    //* cheeck if text input empity or not
    if (text === "") {
      alert("You must enter your city");
    }
    searchCity(text);
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex pt-5 justify-center"
        onChange={(e) => setText(e.target.value)}
      >
        <input
          type="text"
          placeholder="Ex: Tehran"
          className="border-b-2 bg-transparent focus:bg-transparent px-4 mx-8  focus:outline-none text-white "
        />
        <button className=" border text-white py-1 px-2 rounded">
          Get Weather
        </button>
      </form>
    </div>
  );
};

// Type Cheecking
SerachWeather.prototype = {
  searchCity:PropTypes.func
}

export default SerachWeather;

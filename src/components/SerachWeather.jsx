import React, { useState } from "react";

const SerachWeather = ({searchCity}) => {
    const [text,setText] = useState("");
    const onSubmit = (e) => {
      e.preventDefault();
      if(text === "") {
        alert('You must enter your city')
      }
        searchCity(text)
        
    }
   
  return (
    <div>
    
      <form
        onSubmit={onSubmit}
        className="flex pt-5 justify-center"
        onChange={e => setText(e.target.value)}
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

export default SerachWeather;

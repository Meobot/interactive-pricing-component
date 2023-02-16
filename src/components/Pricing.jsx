import { React, useState } from "react";

export default function Pricing() {
  const [sliderPos, setSliderPos] = useState(10);

  const handleChange = (e) => {
    setSliderPos(e.target.value);
  };

  const backgroundStyle = {
	background: `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderPos * 5}%,  hsl(224, 65%, 95%) ${sliderPos * 5}%)`
  };
 

  return (
    <div className="flex flex-col w-11/12 mt-7 bg-white items-center rounded-lg">
      <h3 className="py-8 text-grayishBlue text-xs font-bold tracking-widest">
        100K PAGEVIEWS
      </h3>

      <input
        id="range-slider"
        type="range"
        min="0"
        max="20"
        value={sliderPos}
        step="5"
        className="w-11/12 h-2 rounded-lg cursor-pointer bg-strongCyan"
        onChange={handleChange}
        style={backgroundStyle}
      ></input>
    </div>
  );
}

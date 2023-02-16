import { React, useState } from "react";

export default function Pricing() {
  const [sliderPos, setSliderPos] = useState(10);

  const handleChange = (e) => {
    setSliderPos(e.target.value);
  };

  const backgroundStyle = {
    background: `linear-gradient(to right, hsl(174, 77%, 80%) ${
      sliderPos * 5
    }%,  hsl(224, 65%, 95%) ${sliderPos * 5}%)`,
  };

  return (
    <div className="flex flex-col w-11/12 mt-7 pb-12 bg-white items-center rounded-lg shadow-xl shadow-gray-200">
      <p className="py-8 text-grayishBlue text-xs font-bold tracking-widest">
        100K PAGEVIEWS
      </p>

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

      <div className="flex space-x-3 items-center mt-10">
        <p className="font-bold text-4xl">$16.00</p>
        <p className="text-grayishBlue">/ month</p>
      </div>

		<div className="flex justify-end items-end">
			<div className="flex text-grayishBlue text-sm space-x-12 mt-8 mr-2">
				<p>Monthly Billing</p>
				<label className="relative">
					<input type="checkbox" />
					<span 
					className="slider w-11 h-6 absolute cursor-pointer bg-lightGrayishBlue transition-all duration-400 rounded-full -ml-6">
					</span>
				</label>
				<p>Yearly Billing</p>
			</div>
			<div className="bg-lightGrayishRed rounded-full h-3 px-1.5 py-2.5 font-bold flex items-center -mr-9">
				<p className="text-lightRed text-xs">-25%</p>
			</div>
		</div>

    </div>
  );
}

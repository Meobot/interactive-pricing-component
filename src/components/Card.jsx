import { React, useEffect, useState } from "react";

export default function Card() {
	
	const [sliderPos, setSliderPos] = useState(10);
	const [pageviews, setPageviews] = useState("100K PAGEVIEWS")
	const [rate, setRate] = useState(16)

	const handleChange = (e) => {
	setSliderPos(e.target.value);

		if (e.target.value === "0") {
			setPageviews("10K PAGEVIEWS")
			setRate(8)
		} else if (e.target.value === "5") {
			setPageviews("50K PAGEVIEWS")
			setRate(12)
		} else if (e.target.value === "10") {
			setPageviews("100K PAGEVIEWS")
			setRate(16)
		} else if (e.target.value === "15") {
			setPageviews("500K PAGEVIEWS")
			setRate(24)
		} else if (e.target.value === "20") {
			setPageviews("1M PAGEVIEWS")
			setRate(36)
		}
	};

	

	const backgroundStyle = {
		background: `linear-gradient(to right, hsl(174, 77%, 80%) ${
		sliderPos * 5
		}%,  hsl(224, 65%, 95%) ${sliderPos * 5}%)`,
	};

	return (
		<div className="flex flex-col mt-7 pb-12 bg-white items-center rounded-lg shadow-xl shadow-gray-200">
		<div className="flex flex-col w-375 items-center md:w-550 md:flex-row md:flex-wrap md:justify-center  md:space-y-7">
			<p className="py-12 text-grayishBlue text-xs font-bold tracking-widest md:py-0 md:mt-10">
				{pageviews}
			</p>

			<input
				id="range-slider"
				type="range"
				min="0"
				max="20"
				value={sliderPos}
				step="5"
				className="w-10/12 h-2 rounded-lg cursor-pointer bg-strongCyan md:order-1"
				style={backgroundStyle}
				onChange={handleChange}
			></input>

			<div className="flex space-x-3 items-center mt-8 md:mt-0 md:ml-28">
				<p className="font-bold text-4xl py-3">${rate}.00</p>
				<p className="text-grayishBlue">/ month</p>
			</div>
		</div>

			<div className="flex items-end md:mt-6">
				<div className="flex text-grayishBlue text-sm space-x-9 mt-8 mr-2">
					<p>Monthly Billing</p>
					<label className="relative">
						<input 
						type="checkbox" 
						id="toggle-monthly-yearly"
						/>
						<span 
						className="slider w-11 h-6 absolute cursor-pointer bg-lightGrayishBlue transition-all duration-400 rounded-full -ml-6 hover:bg-strongCyan">
						</span>
					</label>
					<p>Yearly Billing</p>
				</div>
				<div className="bg-lightGrayishRed rounded-full h-3 px-1.5 py-2.5 font-bold flex items-center -mr-9">
					<p className="text-lightRed text-xs">-25%<span className="hidden ml-1 md:inline">discount</span></p>
				</div>
			</div>

			<hr className="w-full mt-11"/>

		<div className="md:flex md:space-x-28">
			<div className="flex flex-col items-center mt-8 whitespace-nowrap text-xs text-grayishBlue space-y-3 font-semibold md:items-start">
				<div className="flex space-x-4 items-center">
					<img className="max-h-2" src="/images/icon-check.svg" alt="image of a check mark" />
					<p>Unlimited websites</p>
				</div>
				<div className="flex space-x-4 items-center">
					<img className="max-h-2" src="/images/icon-check.svg" alt="image of a check mark" />
					<p>100% data ownership</p>
				</div>
				<div className="flex space-x-4 items-center">
					<img className="max-h-2" src="/images/icon-check.svg" alt="image of a check mark" />
					<p>Email reports</p>
				</div>
			</div>

			<div>
				<p className="text-paleBlue text-xs font-bold tracking-wide hover:text-white cursor-pointer bg-desaturatedBlue py-3.5 px-12 mt-9 -mb-2 rounded-full md:mt-12">Start my trial</p>
			</div>
		</div>

		</div>
	);
	}

import React from "react";

export default function Header() {
	return (
		<div className="flex flex-col bg-Header-bg bg-no-repeat bg-center items-center mt-14 py-8">
			<h1 className="font-bold text-2xl mb-3 text-desaturatedBlue">Simple, traffic-based pricing</h1>
			<h3 className="text-grayishBlue text-center text-sm leading-6">
				Sign-up for our 30-day trial.
				<br/>
				No credit card required.
				</h3>
		</div>
	)
}
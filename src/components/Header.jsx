import React from "react";

export default function Header() {
	return (
		<div className="flex flex-col bg-Header-bg bg-no-repeat bg-center items-center mt-16 py-8">
			<h1 className="font-bold text-xl mb-3">Simple, traffic-based pricing</h1>
			<h3 className="text-grayishBlue text-center">
				Sign-up for our 30-day trial.
				<br/>
				No credit card required.
				</h3>
		</div>
	)
}
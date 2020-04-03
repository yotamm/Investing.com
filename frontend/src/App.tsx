import React from 'react';
import './App.css';
import {Portfolio} from "./components/Portfolio";
import {IPortfolioEntry} from "./IPortfolioEntry";
import mockData from './mockInstruments';
import {AddInstrument} from "./components/AddInstrument";
//TODO use real data
//TODO delete functions
//TODO add functionality
function App() {
	let userPortfolio: IPortfolioEntry[] = mockData.map((value: Partial<IPortfolioEntry>) => {
		value.onDelete = () => {console.log(value.instrumentId);};
		value.holdings = 0;
		return value;
	}).slice(10) as IPortfolioEntry[];
	let instruments = [...mockData];
	return (
		<div className="app-wrapper">
			<h1 className="heading-color">Portfolio Manager</h1>
			<section className="user-portfolio" id="user-portfolio">
				<h2 className="heading-color">Your Portfolio</h2>
				<div className="portfolio-wrapper">

				</div>
				<Portfolio entries={userPortfolio}/>
			</section>
			<section className="add-to-portfolio" id="add-to-portfolio">
				<h2 className="heading-color">Add To Your Portfolio</h2>
				<AddInstrument instruments={instruments}/>
			</section>
		</div>
	);
}

export default App;

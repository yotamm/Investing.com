import React from 'react';
import './App.css';
import {Portfolio} from "./components/Portfolio";
import mockData from './mockInstruments';
import {AddInstrument} from "./components/AddInstrument";
import {IDeletablePortfolioEntry} from "./Interfaces/IDeletablePortfolioEntry";
import {IInstrument} from "./Interfaces/IInstrument";
//TODO use real data
//TODO delete functions
//TODO add functionality
function App() {
	let userPortfolio: IDeletablePortfolioEntry[] = mockData.map((value: Partial<IDeletablePortfolioEntry>) => {
		value.onDelete = () => {console.log(value.instrumentId);};
		value.holdings = 0;
		return value;
	}).slice(10) as IDeletablePortfolioEntry[];
	let instruments: IInstrument[] = [...mockData];
	return (
		<div className="app-wrapper">
			<h1 className="heading-color">Portfolio Manager</h1>
			<section className="user-portfolio" id="user-portfolio">
				<h2 className="heading-color">Your Portfolio</h2>
				<div className="portfolio-wrapper">
					<Portfolio entries={userPortfolio}/>
				</div>
			</section>
			<section className="add-to-portfolio" id="add-to-portfolio">
				<h2 className="heading-color">Add To Your Portfolio</h2>
				<AddInstrument instruments={instruments}/>
			</section>
		</div>
	);
}

export default App;

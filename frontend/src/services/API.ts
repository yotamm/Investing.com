import {IPortfolioEntry} from "../Interfaces/IPortfolioEntry";
import {IInstrument} from "../Interfaces/IInstrument";

function generalResponseHandler(response: Response) {
	if (response.status !== 200) {
		console.error('Adding to portfolio failed: ', response);
		alert('Adding to portfolio failed');
	}
	return response.json();
}

const jsonHeader = {"Content-Type": "application/json"};
const baseURL = 'http://localhost:8080/';

async function addToPortfolio(instrumentId: number, holdings: number): Promise<Response> {
	return await fetch(`${baseURL}/portfolio`, {
		method: 'POST', headers: jsonHeader,
		body: JSON.stringify({instrumentId: instrumentId, holdings: holdings})
	}).then(generalResponseHandler);
}

async function deleteFromPortfolio(instrumentId: number): Promise<Response> {
	return await fetch(`${baseURL}/portfolio/${instrumentId}`, {method: 'DELETE'});
}

async function getUserPortfolio(): Promise<IPortfolioEntry[]> {
	return await fetch(`${baseURL}/portfolio`, {method: 'GET', headers: jsonHeader})
		.then(generalResponseHandler);
}

async function getInstrumentList(): Promise<IInstrument[]> {
	return await fetch(`${baseURL}/instruments`, {method: 'GET', headers: jsonHeader})
		.then(generalResponseHandler);
}

export {addToPortfolio, deleteFromPortfolio, getInstrumentList, getUserPortfolio};
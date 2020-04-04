function generalResponseHandler(response: Response) {
	if (response.status !== 200) {
		console.error('Adding to portfolio failed: ', response);
		alert('Adding to portfolio failed');
	}
	return response.json();
}

const jsonHeader = {"Content-Type": "application/json"};

async function addToPortfolio(instrumentId: number, holdings: number) {
	//TODO url
	return await fetch('url', {
		method: 'POST', headers: jsonHeader,
		body: JSON.stringify({instrumentId: instrumentId, holdings: holdings})
	}).then(generalResponseHandler);
}

async function deleteFromPortfolio(instrumentId: number) {
	//TODO url
	return await fetch('url', {method: 'DELETE'}).then(generalResponseHandler);
}

async function getUserPortfolio() {
	//TODO url
	return await fetch('url', {method: 'GET', headers: jsonHeader})
		.then(generalResponseHandler);
}

async function getInstrumentList() {
	//TODO url
	return await fetch('url', {method: 'GET', headers: jsonHeader})
		.then(generalResponseHandler);
}

export {addToPortfolio, deleteFromPortfolio, getInstrumentList, getUserPortfolio};
import React, {ChangeEvent} from 'react';
import {IInstrument} from "../Interfaces/IInstrument";
import {addToPortfolio} from "../services/API";


const AddInstrument: React.FC<{instruments: IInstrument[], onAddToPortfolio: () => void}> = ({instruments, onAddToPortfolio}) => {
	let [instrumentId, setInstrumentId] = React.useState<number>(0);
	let [holdings, setHoldings] = React.useState<number>(0);
	const addInstrument = () => {
		addToPortfolio(instrumentId, holdings).then(response => {
			if(response.status === 200) {
				onAddToPortfolio();
			}
		})
	};
	const changeChosenInstrument = (e: ChangeEvent<HTMLSelectElement>) => setInstrumentId(parseInt(e.target.value));
	const changeHoldings = (e: ChangeEvent<HTMLInputElement>) => setHoldings(parseInt(e.target.value));
	return (
		<div>
			<select className="custom-select custom-select-lg mb-3" value={instrumentId} onChange={changeChosenInstrument}>
				<option defaultValue="true">Choose instrument</option>
				{instruments.map(value => (<option key={value.instrumentId} value={value.instrumentId}>{value.name}</option> ))}
			</select>
			<input type="number" className="form-control" placeholder="Holdings amount" onChange={changeHoldings}/>
			<button type="button" className="btn btn-primary" onClick={addInstrument}>Add</button>
		</div>
	);
};

export {AddInstrument};
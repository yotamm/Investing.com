import React, {ChangeEvent} from 'react';
import {IInstrument} from "../Interfaces/IInstrument";


const AddInstrument: React.FC<{instruments: IInstrument[], onAddToPortfolio: (instrumentId: number, holdings: number) => void}> = ({instruments, onAddToPortfolio}) => {
	let [selectedInstrumentId, setSelectedInstrumentId] = React.useState<number>(0);
	let [holdings, setHoldings] = React.useState<number>(0);
	let [searchTerm, setSearchTerm] = React.useState<string>('');
	const filteredInstruments = instruments.filter(instrument => instrument.name.toLowerCase().includes(searchTerm.toLowerCase()));

	const updateSearchTerm = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
	const changeSelectedInstrument = (e: ChangeEvent<HTMLSelectElement>) => setSelectedInstrumentId(parseInt(e.target.value));
	const changeHoldings = (e: ChangeEvent<HTMLInputElement>) => setHoldings(parseInt(e.target.value));
	return (
		<div>
			<input type="text" style={{marginBottom: '10px'}} className="form-control" placeholder="Search Instruments..." value={searchTerm} onChange={updateSearchTerm}/>
			<select className="custom-select custom-select-lg mb-3" size={4} value={selectedInstrumentId} onChange={changeSelectedInstrument}>
				<option defaultValue="0">Choose instrument</option>
				{filteredInstruments.map(value => (<option key={value.instrumentId} value={value.instrumentId}>{value.name}</option> ))}
			</select>
			<input type="number" style={{marginTop: '15px'}} className="form-control" placeholder="Holdings amount" onChange={changeHoldings}/>
			<button type="button" className="btn btn-primary" onClick={() => onAddToPortfolio(selectedInstrumentId, holdings)}>Add</button>
		</div>
	);
};

export {AddInstrument};
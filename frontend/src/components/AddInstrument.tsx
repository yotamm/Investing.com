import React from 'react';
import {IInstrument} from "../Interfaces/IInstrument";
//TODO add data
//TODO display options properly
//TODO controlled components
const AddInstrument: React.FC<{instruments: IInstrument[]}> = ({instruments}) => {
	return (
		<div>
			<select className="custom-select custom-select-lg mb-3">
				<option defaultValue="true">Choose instrument</option>
				{instruments.map(value => (<option key={value.instrumentId} value={value.instrumentId}>{value.name}</option> ))}
			</select>
			<input type="number" className="form-control" placeholder="Holdings amount" aria-label="Holdings amount"
						 aria-describedby="basic-addon2"/>
			<button type="button" className="btn btn-primary">Add</button>
		</div>
	);
};

export {AddInstrument};
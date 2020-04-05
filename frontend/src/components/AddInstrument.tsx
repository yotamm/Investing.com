import React, {ChangeEvent} from 'react';
import {IInstrument} from "../Interfaces/IInstrument";


const AddInstrument: React.FC<{ instruments: IInstrument[], onAddToPortfolio: (instrumentId: number, holdings: number) => void }> = ({instruments, onAddToPortfolio}) => {
  const [selectedInstrumentId, setSelectedInstrumentId] = React.useState<number>(0);
  const [holdings, setHoldings] = React.useState<number>(0);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const filteredInstruments = instruments.filter(instrument => instrument.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input type="text" style={{marginBottom: '10px'}}
             className="form-control"
             placeholder="Search Instruments..."
             value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      <select className="custom-select custom-select-lg mb-3"
              size={4}
              value={selectedInstrumentId}
              onChange={e => setSelectedInstrumentId(parseInt(e.target.value))}>
        <option defaultValue="0">Choose instrument</option>
        {filteredInstruments.map(value => (
          <option key={value.instrumentId} value={value.instrumentId}>{value.name}</option>))}
      </select>
      <input type="number"
             style={{marginTop: '15px'}}
             className="form-control"
             placeholder="Holdings amount"
             onChange={e => setHoldings(parseInt(e.target.value))}/>
      <button type="button"
              className="btn btn-primary"
              onClick={() => onAddToPortfolio(selectedInstrumentId, holdings)}>
        Add
      </button>
    </div>
  );
};

export {AddInstrument};
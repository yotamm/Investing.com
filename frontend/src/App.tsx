import React from 'react';
import './App.css';
import {Portfolio} from "./components/Portfolio";
import {AddInstrument} from "./components/AddInstrument";
import {IDeletablePortfolioEntry} from "./Interfaces/IDeletablePortfolioEntry";
import {IInstrument} from "./Interfaces/IInstrument";
import {addToPortfolio, deleteFromPortfolio, getInstrumentList, getUserPortfolio} from "./services/API";
import {IPortfolioEntry} from "./Interfaces/IPortfolioEntry";


function App() {
  let [userPortfolio, setUserPortfolio] = React.useState<IDeletablePortfolioEntry[]>([]);
  let [instrumentList, setInstrumentList] = React.useState<IInstrument[]>([]);
  const updatePortfolio = React.useRef((response: IPortfolioEntry[]) => {
    let entries: IDeletablePortfolioEntry[] = [];
    for (let entry of response) {
      const onDeleteHandler = () => {
        deleteFromPortfolio(entry.instrumentId).then(response => {
          if (response.status === 200) {
            return getUserPortfolio().then(updatePortfolio.current);
          }
        });
      };
      const withDelete: IDeletablePortfolioEntry = {...entry, onDelete: onDeleteHandler};
      entries.push(withDelete);
    }
    setUserPortfolio(entries);
  });
  const addInstrument = (instrumentId: number, holdings: number) => {
    if (instrumentId > 0 && holdings > 0) {
      addToPortfolio(instrumentId, holdings).then(response => {
        console.log('Added instrument to portfolio');
        return getUserPortfolio().then(updatePortfolio.current);
      });
    } else {
      alert('Please choose an instrument and holding amount');
    }
  };

  React.useEffect(() => {
    getUserPortfolio().then(updatePortfolio.current);
    getInstrumentList().then((response) => setInstrumentList(response));
  }, []);
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
        <AddInstrument instruments={instrumentList} onAddToPortfolio={addInstrument}/>
      </section>
    </div>
  );
}

export default App;

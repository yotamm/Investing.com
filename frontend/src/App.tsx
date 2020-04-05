import React from 'react';
import './App.css';
import {Portfolio} from "./components/Portfolio";
import {AddInstrument} from "./components/AddInstrument";
import {IInstrument} from "./Interfaces/IInstrument";
import {addToPortfolio, deleteFromPortfolio, getInstrumentList, getUserPortfolio} from "./services/API";
import {IPortfolioEntry} from "./Interfaces/IPortfolioEntry";


function App() {
  const [userPortfolio, setUserPortfolio] = React.useState<IPortfolioEntry[]>([]);
  const [instrumentList, setInstrumentList] = React.useState<IInstrument[]>([]);
  const onDeleteHandler = (instrumentId: number) => {
    deleteFromPortfolio(instrumentId).then(response => {
      if (response.status === 200) {
        return getUserPortfolio().then((response: IPortfolioEntry[]) => setUserPortfolio(response));
      }
    });
  };
  const addInstrument = (instrumentId: number, holdings: number) => {
    if(instrumentId <= 0 && holdings <= 0) {
      alert('Please choose an instrument and holding amount');
      return;
    }
    addToPortfolio(instrumentId, holdings).then(response => {
      console.log('Added instrument to portfolio');
      return getUserPortfolio().then((response: IPortfolioEntry[]) => setUserPortfolio(response));
    });
  };

  React.useEffect(() => {
    getUserPortfolio().then((response: IPortfolioEntry[]) => setUserPortfolio(response));
    getInstrumentList().then((response) => setInstrumentList(response));
  }, []);
  return (
    <div className="app-wrapper">
      <h1 className="heading-color">Portfolio Manager</h1>
      <section className="user-portfolio" id="user-portfolio">
        <h2 className="heading-color">Your Portfolio</h2>
        <div className="portfolio-wrapper">
          <Portfolio entries={userPortfolio} onDelete={onDeleteHandler}/>
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

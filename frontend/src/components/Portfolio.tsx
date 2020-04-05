import React from "react";
import './Portfolio.css';
import {IPortfolioEntry} from "../Interfaces/IPortfolioEntry";


const Portfolio: React.FC<{ entries: IPortfolioEntry[], onDelete: (instrumentId: number) => void }> = (props) => {
  return (
    <ul className="list-group">
      {props.entries.map((entry, index) => {
        return (
          <li className="list-group-item portfolio-entry-item" key={index}>
            <span>{entry.holdings}$ | {entry.name}</span>
            <button type="button" className="btn btn-danger" onClick={() => props.onDelete(entry.instrumentId)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export {Portfolio};

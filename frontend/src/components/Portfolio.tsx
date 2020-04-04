import React from "react";
import './Portfolio.css';
import {IDeletablePortfolioEntry} from "../Interfaces/IDeletablePortfolioEntry";


const Portfolio: React.FC<{ entries: IDeletablePortfolioEntry[] }> = ({entries}) => {
	return (
		<ul className="list-group">
			{entries.map((value, index) => {
				return (
					<li className="list-group-item portfolio-entry-item" key={index}>
						<span>{value.holdings}$ | {value.name}</span>
            <button type="button" className="btn btn-danger" onClick={value.onDelete}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export {Portfolio};

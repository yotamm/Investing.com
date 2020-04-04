import React from "react";
import './Portfolio.css';
import {IPortfolioEntry} from "../Interfaces/IPortfolioEntry";
//TODO display data properly
//TODO attach delete functionality
const Portfolio: React.FC<{ entries: IPortfolioEntry[] }> = (props) => {
	return (
		<ul className="list-group">
			{props.entries.map((value, index) => {
				return (
					<li className="list-group-item portfolio-entry-item" key={index}>
						<span>{value.name}</span>
            <button type="button" className="btn btn-danger" onClick={value.onDelete}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export {Portfolio};

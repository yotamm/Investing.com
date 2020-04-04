import {IInstrument} from "./IInstrument";

export interface IPortfolioEntry extends IInstrument {
	onDelete: () => void;
	holdings: number;
}
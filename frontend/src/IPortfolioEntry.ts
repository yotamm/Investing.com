import {IInstrument} from "./components/IInstrument";

export interface IPortfolioEntry extends IInstrument {
	onDelete: () => void;
	holdings: number;
}
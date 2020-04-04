import {IInstrument} from "./IInstrument";

export interface IPortfolioEntry extends IInstrument {
	holdings: number;
}
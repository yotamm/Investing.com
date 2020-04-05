import {IPortfolioEntry} from './IPortfolioEntry';

export interface IDeletablePortfolioEntry extends IPortfolioEntry {
  onDelete: () => void;
}

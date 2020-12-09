import AbstractView from "./abstract.js";

const createFooterStatisticsTemplate = (cards) => {
  const {date} = cards;
  return `<p>${date} movies inside</p>`;
};

export default class FooterStatistics extends AbstractView {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._cards);
  }
}

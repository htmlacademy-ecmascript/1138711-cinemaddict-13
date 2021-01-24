import AbstractView from "./abstract.js";

const createFooterStatisticsTemplate = (cards) => {
  return `<p>${cards} movies inside</p>`;
};

export default class FooterStatistics extends AbstractView {
  constructor(cards) {
    super();
    this._cards = cards.length;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._cards);
  }
}

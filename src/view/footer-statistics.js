import {createElement} from "../utils.js";

const createFooterStatistics = (cards) => {
  const {date} = cards;

  return `<p>${date} movies inside</p>`;
};

export default class FooterStatistics {
  constructor(cards) {
    this._cards = cards;
    this._element = null;
  }

  getTemplate() {
    return createFooterStatistics(this._cards);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

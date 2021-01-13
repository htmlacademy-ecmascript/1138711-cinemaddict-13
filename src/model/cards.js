import Observer from "./observer.js";

export default class Cards extends Observer {
  constructor() {
    super();
    this._cards = [];
  }

  setCards(cards) {
    this._cards = cards.slice();
  }

  getCards() {
    return this._cards;
  }

  updateCard(updateType, update) {
    const index = this._cards.findIndex((card) => card.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting card`);
    }

    this._cards = [
      ...this._cards.slice(0, index),
      update,
      ...this._cards.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addComment(updateType, update) {

    const index = this._cards.findIndex((card) => card.id === update.id);

    this._cards[index].comments = [
      update,
      ...this._cards[index].comments
    ];

    this._notify(updateType, update);
  }

  deleteComment(updateType, update) {

    const index = this._cards.findIndex((card) => card.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting card`);
    }

    this._cards[index].comments = [
      ...this._cards[index].comments.slice(0, index),
      ...this._cards[index].comments.slice(index + 1)
    ];

    this._notify(updateType);
  }
}

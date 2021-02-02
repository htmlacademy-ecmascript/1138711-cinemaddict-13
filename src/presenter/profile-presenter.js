import ProfileContent from "../view/profile.js";
import {render, RenderPosition, replace, remove} from "../utils/common.js";

export default class ProfilePresenter {
  constructor(profileContainer, cardsModel) {
    this._profileContainer = profileContainer;
    this._cardsModel = cardsModel;
    this._profileComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._cardsModel.addObserver(this._handleModelEvent);
  }

  init() {
    const prevProfileComponent = this._profileComponent;

    const cards = this._cardsModel.getCards();
    this._profileComponent = new ProfileContent(cards);

    if (prevProfileComponent === null) {
      render(this._profileContainer, this._profileComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._profileComponent, prevProfileComponent);
    remove(prevProfileComponent);
  }

  destroy() {
    remove(this._profileComponent);
    this._cardsModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent() {
    this.init();
  }
}

import FilmCard from "../view/film-card.js";
import {render, RenderPosition, replace, remove} from "../utils.js";

const siteMainElement = document.querySelector(`.main`);

export default class CardPresenter {
  constructor(cardContainer, changeData) {
    this._cardContainer = cardContainer;
    this._changeData = changeData;

    this._cardComponent = null;

    this._handleAddToWatchList = this._handleAddToWatchList.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(card) {
    this._card = card;

    const prevCardComponent = this._cardComponent;

    this._cardComponent = new FilmCard(card);

    this._cardComponent.setWatchListHandler(this._handleAddToWatchList);
    this._cardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._cardComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevCardComponent === null) {
      const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
      render(filmListContainer, this._cardComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._cardContainer.getElement().contains(prevCardComponent.getElement())) {
      replace(this._cardComponent, prevCardComponent);
    }

    remove(prevCardComponent);
  }

  destroy() {
    remove(this._cardComponent);
  }

  _handleAddToWatchList() {
    this._changeData(
        Object.assign(
            {},
            this._card,
            {
              isAddToWatchList: !this._card.isAddToWatchList
            }
        )
    );
  }

  _handleWatchedClick() {
    this._changeData(
        Object.assign(
            {},
            this._card,
            {
              isWatched: !this._card.isWatched
            }
        )
    );
  }

  _handleFavoriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._card,
            {
              isFavorite: !this._card.isFavorite
            }
        )
    );
  }

}

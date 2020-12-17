import FilmDetails from "../view/film-details.js";
import {render, RenderPosition, replace, remove} from "../utils.js";

const body = document.querySelector(`body`);

export default class FilmDetailsPresenter {
  constructor(filmDetailsContainer, changeInfo) {
    this._filmDetailsContainer = filmDetailsContainer;
    this._changeInfo = changeInfo;

    this._filmDetailsComponent = null;

    this._handleAddToWatchList = this._handleAddToWatchList.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);

    this._closeFilmDetails = this._closeFilmDetails.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  init(card) {
    this._card = card;

    const prevfilmDetailsComponent = this._filmDetailsComponent;

    this._filmDetailsComponent = new FilmDetails(card);
    this._filmDetailsComponent.setWatchListHandler(this._handleAddToWatchList);
    this._filmDetailsComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmDetailsComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    this._filmDetailsComponent.setClickHandler(this._closeFilmDetails);
    document.addEventListener(`keydown`, this._onEscKeyDown);

    if (prevfilmDetailsComponent === null) {
      render(this._filmDetailsContainer, this._filmDetailsComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._filmDetailsContainer.contains(prevfilmDetailsComponent.getElement())) {
      replace(this._filmDetailsComponent, prevfilmDetailsComponent);
    }

    remove(prevfilmDetailsComponent);
  }

  _closeFilmDetails() {
    remove(this._filmDetailsComponent);
    body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      this._closeFilmDetails();
    }
  }

  destroy() {
    remove(this._filmDetailsComponent);
  }

  _handleAddToWatchList() {
    this._changeInfo(
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
    this._changeInfo(
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
    this._changeInfo(
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

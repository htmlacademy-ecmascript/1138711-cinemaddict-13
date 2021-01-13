import FilmDetails from "../view/film-details.js";
import {render, RenderPosition, replace, remove, UserAction, UpdateType} from "../utils.js";

const body = document.querySelector(`body`);

export default class FilmDetailsPresenter {
  constructor(filmDetailsContainer, changeData) {

    this._filmDetailsContainer = filmDetailsContainer;
    this._changeData = changeData;

    this._filmDetailsComponent = null;

    this._handleAddToWatchListClick = this._handleAddToWatchListClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleDeleteCommentClick = this._handleDeleteCommentClick.bind(this);
    this._handleAddCommentClick = this._handleAddCommentClick.bind(this);

    this._closeFilmDetails = this._closeFilmDetails.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  init(card) {

    this._card = card;

    const prevfilmDetailsComponent = this._filmDetailsComponent;

    this._filmDetailsComponent = new FilmDetails(card);
    this._filmDetailsComponent.setWatchListHandler(this._handleAddToWatchListClick);
    this._filmDetailsComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmDetailsComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._filmDetailsComponent.setDeleteCommentHandler(this._handleDeleteCommentClick);
    this._filmDetailsComponent.setAddCommentHandler(this._handleAddCommentClick);

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

  updatePopUp(card) {
    this._card = card;
  }

  destroy() {
    remove(this._filmDetailsComponent);
  }

  _closeFilmDetails() {
    remove(this._filmDetailsComponent);
    body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onEscKeyDown);

    const films = document.querySelector(`.films`);
    const siteFooter = document.querySelector(`.footer`);
    films.removeEventListener(`click`, (evt) => {
      if (evt.target.tagName === `H3` || evt.target.tagName === `IMG` || evt.target.tagName === `A`) {
        const cardID = evt.target.id;
        const currentCard = this._getSortedCards().find((card) => card.id === cardID);

        const oldPopUp = document.querySelector(`.film-details`);
        if (oldPopUp) {
          oldPopUp.remove();
        }

        const filmDetailsPresenter = new FilmDetailsPresenter(siteFooter, this._handleViewAction);
        this._filmDetailsPresenter = filmDetailsPresenter;
        filmDetailsPresenter.init(currentCard);
        this._currentPopUp = currentCard;
        body.classList.add(`hide-overflow`);
      }
    });
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      this._closeFilmDetails();
    }
  }

  _handleAddToWatchListClick() {
    const card = Object.assign(this._card,
        {
          isAddToWatchList: !this._card.isAddToWatchList
        });
    this._changeData(
        UserAction.UPDATE_CARD,
        UpdateType.MINOR,
        card
    );
  }

  _handleWatchedClick() {
    const card = Object.assign(this._card,
        {
          isWatched: !this._card.isWatched
        });
    this._changeData(
        UserAction.UPDATE_CARD,
        UpdateType.MINOR,
        card
    );
  }

  _handleFavoriteClick() {
    const card = Object.assign(this._card,
        {
          isFavorite: !this._card.isFavorite
        });
    this._changeData(
        UserAction.UPDATE_CARD,
        UpdateType.MINOR,
        card
    );
  }

  _handleDeleteCommentClick(commentsCopy) {
    const card = Object.assign(this._card,
        {
          comments: commentsCopy
        });
    this._changeData(
        UserAction.DELETE_COMMENT,
        UpdateType.MINOR,
        card
    );
  }

  _handleAddCommentClick(commentsCopy) {
    const card = Object.assign(this._card,
        {
          comments: commentsCopy
        });
    this._changeData(
        UserAction.DELETE_COMMENT,
        UpdateType.MINOR,
        card
    );
  }

}
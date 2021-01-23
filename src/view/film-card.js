import AbstractView from "./abstract.js";
import dayjs from "dayjs";

const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return hours + `h ` + minutes + `m`;
};

const createFilmCardTemplate = (card) => {
  const {id, title, rating, poster, genres, duration, description, date, comments, isFavorite, isWatched, isAddToWatchList} = card;

  const addToWatListClassName = isAddToWatchList
    ? `film-card__controls-item--add-to-watchlist film-card__controls-item--active`
    : `film-card__controls-item--add-to-watchlist`;

  const favoriteClassName = isFavorite
    ? `film-card__controls-item--favorite film-card__controls-item--active`
    : `film-card__controls-item--favorite`;

  const watchedClassName = isWatched
    ? `film-card__controls-item--mark-as-watched film-card__controls-item--active`
    : `film-card__controls-item--mark-as-watched`;

  return `<article class="film-card">
  <h3 class="film-card__title" id="${id}">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${dayjs(date).format(`DD MMM YYYY`)}</span>
    <span class="film-card__duration">${getTimeFromMins(duration)}</span>
    <span class="film-card__genre">${genres[0]}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster" id="${id}">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments" id="${id}">${comments.length}</a>
  <div class="film-card__controls">
    <button type="button" class="film-card__controls-item button ${addToWatListClassName}">Add to watchlist</button>
    <button type="button" class="film-card__controls-item button ${watchedClassName}" >Mark as watched</button>
    <button type="button" class="film-card__controls-item button ${favoriteClassName}" >Mark as favorite</button>
  </div>
</article>`;
};

export default class FilmCard extends AbstractView {
  constructor(card) {
    super();
    this._card = card;

    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }

  _watchListClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setWatchListHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}

import AbstractView from "./abstract.js";

const createFilmCardTemplate = (card) => {
  const {id, title, rating, poster, genres, duration, description, date, comments, isFavorite, isWatched, isAddToWatList} = card;

  const addToWatListClassName = isAddToWatList
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
    <span class="film-card__year">${date}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
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
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }
}

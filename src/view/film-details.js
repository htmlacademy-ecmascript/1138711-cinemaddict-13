import Smart from "./smart.js";
import dayjs from "dayjs";
import he from "he";
import {SpecialName, getTimeFromMins} from "../utils/common.js";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const createGenresTemplate = (genres) => {
  return genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``);
};

const createCommentsTemplate = (comments, isDisabled, isDeleting) => {
  return comments.map((comment) => `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${comment.comment.length > SpecialName.SYMBOLS_COUNT ? comment.comment.slice(0, SpecialName.SYMBOLS_COUNT) + `...` : comment.comment }</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comment.author}</span>
      <span class="film-details__comment-day">${dayjs(comment.date).fromNow()}</span>
      <button  id="${comment.id}" class="film-details__comment-delete" ${isDisabled ? `disabled` : ``}>
        ${isDeleting ? `Deleting...` : `Delete`}
      </button>
    </p>
  </div>
</li>`).join(``);
};

const createFilmDetailsTemplate = (data) => {
  const {actors, ageRating, comments, country, description, director, duration, genres, original, poster, rating, date,
    writers, title, isAddToWatchList, isWatched, isFavorite, currentEmoji, isDisabled, isDeleting, isBlocked} = data;

  const currentGenres = createGenresTemplate(genres);
  const currentComments = createCommentsTemplate(comments, isDisabled, isDeleting);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">${ageRating} + </p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">${original}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${dayjs(date).format(`DD MMM YYYY`)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${getTimeFromMins(duration)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genres.length === 1 ? `Genre` : `Genres` }</td>
              <td class="film-details__cell">
              ${currentGenres}
            </tr>
          </table>

          <p class="film-details__film-description">
          ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isAddToWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
          ${currentComments}
        </ul>

        <div class="film-details__new-comment">

          <div class="film-details__add-emoji-label">
            ${currentEmoji === null ? `` : `<img src="./images/emoji/${currentEmoji}.png" width="55" height="55" alt="emoji-${currentEmoji}">`}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"
            ${isBlocked ? `disabled` : ``}></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>

        </div>
      </section>
    </div>
  </form>
</section>`;
};

export default class FilmDetails extends Smart {
  constructor(card) {
    super();
    this._data = card;

    this._data.currentEmoji = null;
    this._data.currentComment = ``;

    this._data.isDisabled = false;
    this._data.isDeleting = false;
    this._data.isBlocked = false;

    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
    this._deleteCommentClickHandler = this._deleteCommentClickHandler.bind(this);
    this._addCommentClickHandler = this._addCommentClickHandler.bind(this);
    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    this._descriptionInputHandler = this._descriptionInputHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createFilmDetailsTemplate(this._data);
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.film-details__emoji-list`)
      .addEventListener(`change`, this._emojiClickHandler);
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._descriptionInputHandler);
    this.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._clickHandler);
    this.getElement()
      .querySelector(`.film-details__control-label--watchlist`)
      .addEventListener(`click`, this._watchListClickHandler);
    this.getElement()
      .querySelector(`.film-details__control-label--watched`)
      .addEventListener(`click`, this._watchedClickHandler);
    this.getElement()
      .querySelector(`.film-details__control-label--favorite`)
      .addEventListener(`click`, this._favoriteClickHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setDeleteCommentHandler(this._callback.delete);
    this.setAddCommentHandler(this._callback.add);
  }

  _emojiClickHandler(evt) {
    evt.preventDefault();
    this.updateData({
      currentEmoji: evt.target.value,
      [evt.target.value]: evt.target.checked
    });
  }

  _descriptionInputHandler(evt) {
    evt.preventDefault();
    this.updateData({
      currentComment: he.encode(evt.target.value)
    }, true);
  }

  _watchListClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchListClick();
  }

  setWatchListClicHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickHandler);
  }

  _deleteCommentClickHandler(evt) {
    evt.preventDefault();
    const commentId = evt.target.id;
    this._callback.delete(commentId);
    const deleteBtn = document.getElementById(commentId);
    deleteBtn.innerHTML = `Deleting...`;
    deleteBtn.disabled = true;
  }

  setDeleteCommentHandler(callback) {
    this._callback.delete = callback;
    this.getElement().querySelector(`.film-details__comments-list`).addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `BUTTON`) {
        this._deleteCommentClickHandler(evt);
      }
    });
  }

  _addCommentClickHandler(evt) {
    evt.preventDefault();
    const commentValue = he.encode(evt.target.value);
    const commentEmotion = this._data.currentEmoji;
    const commentDate = dayjs().format();
    if (commentValue && commentEmotion !== null) {
      this._callback.add(commentValue, commentEmotion, commentDate);
    }
  }

  setAddCommentHandler(callback) {
    this._callback.add = callback;
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`keydown`, (evt) => {
      if (evt.ctrlKey && evt.key === `Enter`) {
        this._addCommentClickHandler(evt);
      }
    });
  }
}

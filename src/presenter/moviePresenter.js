import FilmsContent from "../view/films.js";
import FilmCard from "../view/film-card.js";
import NoCard from "../view/no-film-card.js";
import FilmListRated from "../view/film-list-rated.js";
import FilmListCommented from "../view/film-list-commented.js";
import {render, RenderPosition, remove, updateItem} from "../utils.js";
import CardsPresenter from "./cardsPresenter.js";

const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;
const siteMainElement = document.querySelector(`.main`);

export default class MoviePresenter {
  constructor(movieContainer) {
    this._movieContainer = movieContainer;
    this._renderedCardCount = CARD_COUNT_PER_STEP;
    this._renderedCardCountExtra = CARD_COUNT_EXTRA;

    this._handleCardChange = this._handleCardChange.bind(this);

    this._movieList = new FilmsContent();
    this._noMovieCard = new NoCard();

    this._movieListRated = new FilmListRated();
    this._movieListCommented = new FilmListCommented();
  }

  init(cards) {
    this._cards = cards.slice();

    render(this._movieContainer, this._movieList, RenderPosition.BEFOREEND);

    this._renderMovieList();
  }

  _renderCards() {
    const cardsPresenter = new CardsPresenter(this._movieList, this._handleCardChange);
    cardsPresenter.init(this._cards);
  }

  _renderExtraCardsRated() {
    const renderCard = (cardListElement, card) => {
      const cardComponent = new FilmCard(card);
      render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
    };

    const renderCardExtra = (cardCount, cardContainer) => {
      for (let i = 0; i < cardCount; i++) {
        renderCard(cardContainer, this._cards[i]);
      }
    };

    const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
    const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
    renderCardExtra(this._renderedCardCountExtra, filmListExtraTopContainer);
  }

  _renderFilmListRated() {
    const films = siteMainElement.querySelector(`.films`);
    render(films, this._movieListRated, RenderPosition.BEFOREEND);

    this._renderExtraCardsRated();
  }

  _renderExtraCardsCommented() {
    const renderCard = (cardListElement, card) => {
      const cardComponent = new FilmCard(card);
      render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
    };

    const renderCardExtra = (cardCount, cardContainer) => {
      for (let i = 0; i < cardCount; i++) {
        renderCard(cardContainer, this._cards[i]);
      }
    };

    const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
    const filmListExtraTopContainer = filmListExtra[1].querySelector(`.films-list__container`);
    renderCardExtra(this._renderedCardCountExtra, filmListExtraTopContainer);
  }

  _renderFilmListCommented() {
    const films = siteMainElement.querySelector(`.films`);
    render(films, this._movieListCommented, RenderPosition.BEFOREEND);

    this._renderExtraCardsCommented();
  }

  _clearMovieList() {
    remove(this._movieList);
    this._renderedCardCount = CARD_COUNT_PER_STEP;
  }

  _handleCardChange(updatedCard) {
    this._cards = updateItem(this._cards, updatedCard);
    this._cardPresenter[updatedCard.id].init(updatedCard);
  }

  _renderMovieList() {
    if (this._cards.length === 0) {
      const filmsList = siteMainElement.querySelector(`.films-list`);
      filmsList.innerHTML = ` `;
      render(filmsList, this._noMovieCard, RenderPosition.BEFOREEND);
    }

    this._renderCards();

    this._renderFilmListRated();

    this._renderFilmListCommented();
  }
}

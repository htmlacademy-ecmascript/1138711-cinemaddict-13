import ProfileContent from "../view/profile.js";
import FiltersContent from "../view/filters.js";
import SortContent from "../view/sort.js";
import FilmsContent from "../view/films.js";
import FilmCard from "../view/film-card.js";
import NoCard from "../view/no-film-card.js";
import ShowMoreBtn from "../view/show-more-btn.js";
import FilmListRated from "../view/film-list-rated.js";
import FilmListCommented from "../view/film-list-commented.js";
import {render, RenderPosition, remove, updateItem, SortType, sortCardUp, sortCardRating} from "../utils.js";
import CardPresenter from "./card-presenter.js";
import FilmDetailsPresenter from "./filmDetails-presenter.js";
import {generateFilter} from "../mock/filtration.js";

const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;
const siteMainElement = document.querySelector(`.main`);
const siteHeader = document.querySelector(`.header`);
const siteFooter = document.querySelector(`.footer`);

export default class MoviePresenter {
  constructor(movieContainer) {
    this._movieContainer = movieContainer;
    this._renderedCardCount = CARD_COUNT_PER_STEP;
    this._currentCardCount = CARD_COUNT_PER_STEP;
    this._renderedCardCountExtra = CARD_COUNT_EXTRA;
    this._cardPresenter = {};
    this._currentSortType = SortType.DEFAULT;

    this._sortComponent = new SortContent();
    this._movieList = new FilmsContent();
    this._noMovieCard = new NoCard();

    this._handleCardChange = this._handleCardChange.bind(this);
    this._handleFilmDetailsChange = this._handleFilmDetailsChange.bind(this);

    this._loadMoreButtonComponent = new ShowMoreBtn();
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);

    this._movieListRated = new FilmListRated();
    this._movieListCommented = new FilmListCommented();

    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(cards) {
    this._cards = cards.slice();

    const filters = generateFilter(this._cards);
    this._sourceCards = this._cards.slice();

    render(siteHeader, new ProfileContent(), RenderPosition.BEFOREEND);
    render(siteMainElement, new FiltersContent(filters), RenderPosition.BEFOREEND);
    this._renderSort();
    render(this._movieContainer, this._movieList, RenderPosition.BEFOREEND);

    this._renderMovies();
  }

  _handleCardChange(updatedCard) {
    this._cards = updateItem(this._cards, updatedCard);
    this._cardPresenter[updatedCard.id].init(updatedCard);
  }

  _handleFilmDetailsChange(updatedFilmDetails) {
    this._cards = updateItem(this._cards, updatedFilmDetails);
    this._filmDetailsPresenter.init(updatedFilmDetails);
  }

  _sortCards(sortType) {
    switch (sortType) {
      case SortType.DATE:
        this._cards.sort(sortCardUp);
        break;
      case SortType.RATING:
        this._cards.sort(sortCardRating);
        break;
      default:
        this._cards = this._sourceCards.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._sortCards(sortType);
    this._clearCardList();
    this._renderMovies();
  }

  _renderSort() {
    render(siteMainElement, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderCard(card) {
    const cardPresenter = new CardPresenter(this._movieList, this._handleCardChange, this._handleFilmDetailsChange);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(from, to) {
    this._cards
      .slice(from, to)
      .forEach((cards) => this._renderCard(cards));
  }

  _renderNoCards() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    filmsList.innerHTML = ` `;
    render(filmsList, this._noMovieCard, RenderPosition.BEFOREEND);
  }

  _handleLoadMoreButtonClick() {
    this._renderCards(this._currentCardCount, this._currentCardCount + CARD_COUNT_PER_STEP);
    this._currentCardCount += CARD_COUNT_PER_STEP;

    if (this._currentCardCount >= this._cards.length) {
      remove(this._loadMoreButtonComponent);
    }
  }

  _renderLoadMoreButton() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    render(filmsList, this._loadMoreButtonComponent, RenderPosition.BEFOREEND);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
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

    const filmListExtra = siteMainElement.querySelectorAll(`.films-list--extra`);
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

  _renderFilmList() {
    this._renderCards(0, Math.min(this._cards.length, CARD_COUNT_PER_STEP));

    if (this._cards.length > this._renderedCardCount) {
      this._renderLoadMoreButton();
    }
  }

  _clearCardList() {
    Object
      .values(this._cardPresenter)
      .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};
    this._renderedCardCount = CARD_COUNT_PER_STEP;
    remove(this._loadMoreButtonComponent);
  }

  _renderFilmDetails() {
    const body = document.querySelector(`body`);
    const films = siteMainElement.querySelector(`.films`);

    films.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `H3` || evt.target.tagName === `IMG` || evt.target.tagName === `A`) {
        const cardID = evt.target.id;
        const currentCard = this._cards.find((card) => card.id === cardID);

        const oldPopUp = document.querySelector(`.film-details`);
        if (oldPopUp) {
          oldPopUp.remove();
        }

        const filmDetailsPresenter = new FilmDetailsPresenter(siteFooter, this._handleFilmDetailsChange);
        this._filmDetailsPresenter = filmDetailsPresenter;
        filmDetailsPresenter.init(currentCard);
        body.classList.add(`hide-overflow`);
      }
    });
  }

  _renderMovies() {
    if (this._cards.length === 0) {
      this._renderNoCards();
      return;
    }

    this._renderFilmList();

    this._renderFilmListRated();

    this._renderFilmListCommented();

    this._renderFilmDetails();
  }
}

import SortContent from "../view/sort.js";
import FilmsContent from "../view/films.js";
import Loading from "../view/loading.js";
import NoCard from "../view/no-film-card.js";
import ShowMoreBtn from "../view/show-more-btn.js";
import FilmListRated from "../view/film-list-rated.js";
import FilmListCommented from "../view/film-list-commented.js";
import CardPresenter from "./card-presenter.js";
import FilmDetailsPresenter from "./filmDetails-presenter.js";
import {filter} from "../utils/filter.js";
import {render, RenderPosition, remove, SortType, sortCardUp, sortCardRating, UserAction, UpdateType} from "../utils/common.js";

const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;
const siteMainElement = document.querySelector(`.main`);

export default class MoviePresenter {
  constructor(movieContainer, cardsModel, filterModel, api) {
    this._cardsModel = cardsModel;
    this._filterModel = filterModel;

    this._movieContainer = movieContainer;
    this._renderedCardCount = CARD_COUNT_PER_STEP;
    this._renderedCardCountExtra = CARD_COUNT_EXTRA;
    this._cardPresenter = {};
    this._currentPopUp = null;
    this._currentSortType = SortType.DEFAULT;
    this._isLoading = true;
    this._api = api;

    this._sortComponent = null;
    this._loadMoreButtonComponent = null;

    this._movieList = new FilmsContent();
    this._loadingComponent = new Loading();
    this._noMovieCard = new NoCard();
    this._movieListRated = new FilmListRated();
    this._movieListCommented = new FilmListCommented();

    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._filmsClickHandler = this._filmsClickHandler.bind(this);

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    this._renderFilmsList();
    this._renderMovies();

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    this._clearMovies({resetRenderedCardCount: true, resetSortType: true});

    remove(this._movieList);
    remove(this._movieListRated);
    remove(this._movieListCommented);

    this._cardsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._cardPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearMovies();
        this._renderMovies();
        break;
      case UpdateType.MAJOR:
        this._clearMovies({resetRenderedCardCount: true, resetSortType: true});
        this._renderMovies();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderMovies();
        break;
    }
  }

  _handleViewAction(actionType, updateType, update) {
    if (UserAction.UPDATE_CARD) {
      this._api.updateCard(update).then((response) => {
        this._cardsModel.updateCard(updateType, response);
      });
    }
  }

  _getFiltredCards() {
    const filterType = this._filterModel.getFilter();
    const cards = this._cardsModel.getCards();
    const filtredCards = filter[filterType](cards);

    switch (this._currentSortType) {
      case SortType.DATE:
        return filtredCards.sort(sortCardUp);
      case SortType.RATING:
        return filtredCards.sort(sortCardRating);
    }
    return filtredCards;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._currentSortType = sortType;

    this._clearMovies({resetRenderedCardCount: true});
    this._renderMovies();
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new SortContent(this._currentSortType);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    render(siteMainElement, this._sortComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmsList() {
    render(siteMainElement, this._movieList, RenderPosition.BEFOREEND);
  }

  _renderCard(card) {
    const filmsListContainer = siteMainElement.querySelector(`.films-list__container`);
    const cardPresenter = new CardPresenter(filmsListContainer, this._handleViewAction);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(cards) {
    cards.forEach((card) => this._renderCard(card));
  }

  _renderLoading() {
    render(this._movieList, this._loadingComponent, RenderPosition.AFTERBEGIN);
  }

  _renderNoCards() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    render(filmsList, this._noMovieCard, RenderPosition.BEFOREEND);
  }

  _filmsClickHandler(evt) {
    if (evt.target.tagName === `H3` || evt.target.tagName === `IMG` || evt.target.tagName === `A`) {
      const cardID = evt.target.id;
      const currentCard = this._getFiltredCards().find((card) => card.id === cardID);

      const oldPopUp = document.querySelector(`.film-details`);
      if (oldPopUp) {
        oldPopUp.remove();
      }

      const siteFooter = document.querySelector(`.footer`);
      const filmDetailsPresenter = new FilmDetailsPresenter(siteFooter, this._cardsModel, this._handleViewAction, this._api);
      this._filmDetailsPresenter = filmDetailsPresenter;
      filmDetailsPresenter.init(currentCard);
      this._currentPopUp = currentCard;
      const body = document.querySelector(`body`);
      body.classList.add(`hide-overflow`);
    }
  }

  _setFilmsClickHandler() {
    const films = siteMainElement.querySelector(`.films`);
    films.addEventListener(`click`, this._filmsClickHandler);
  }

  _handleLoadMoreButtonClick() {
    const cardCount = this._getFiltredCards().length;
    const newRenderedCardCount = Math.min(cardCount, this._renderedCardCount + CARD_COUNT_PER_STEP);
    const cards = this._getFiltredCards().slice(this._renderedCardCount, newRenderedCardCount);

    this._renderCards(cards);
    this._renderedCardCount = newRenderedCardCount;

    if (this._renderedCardCount >= cardCount) {
      remove(this._loadMoreButtonComponent);
    }
  }

  _renderLoadMoreButton() {
    if (this._loadMoreButtonComponent !== null) {
      this._loadMoreButtonComponent = null;
    }
    this._loadMoreButtonComponent = new ShowMoreBtn();

    const filmsList = siteMainElement.querySelector(`.films-list`);
    render(filmsList, this._loadMoreButtonComponent, RenderPosition.BEFOREEND);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _renderFilmListRated(filtrRatedCards) {

    const mostRatedCards = filtrRatedCards.sort(function (a, b) {
      return b.rating - a.rating;
    });

    const films = siteMainElement.querySelector(`.films`);
    render(films, this._movieListRated, RenderPosition.BEFOREEND);

    const renderCardRated = (card) => {
      const filmListExtra = siteMainElement.querySelectorAll(`.films-list--extra`);
      const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
      const cardPresenter = new CardPresenter(filmListExtraTopContainer, this._handleViewAction);
      cardPresenter.init(card);
    };

    for (let i = 0; i < CARD_COUNT_EXTRA; i++) {
      renderCardRated(mostRatedCards[i]);
    }
  }

  _renderFilmListCommented(filtrCommentedCards) {

    const mostCommentsCards = filtrCommentedCards.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    const films = siteMainElement.querySelector(`.films`);
    render(films, this._movieListCommented, RenderPosition.BEFOREEND);

    const renderCardCommented = (card) => {
      const filmListExtra = siteMainElement.querySelectorAll(`.films-list--extra`);
      const filmListExtraTopContainer = filmListExtra[1].querySelector(`.films-list__container`);
      const cardPresenter = new CardPresenter(filmListExtraTopContainer, this._handleViewAction);
      cardPresenter.init(card);
    };

    for (let i = 0; i < CARD_COUNT_EXTRA; i++) {
      renderCardCommented(mostCommentsCards[i]);
    }
  }

  _clearMovies({resetRenderedCardCount = false, resetSortType = false} = {}) {
    const cardCount = this._getFiltredCards().length;

    Object
      .values(this._cardPresenter)
      .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};

    remove(this._sortComponent);
    remove(this._loadingComponent);
    remove(this._noMovieCard);
    remove(this._loadMoreButtonComponent);

    this._renderedCardCount = resetRenderedCardCount ? CARD_COUNT_PER_STEP : Math.min(cardCount, this._renderedCardCount);
    // eslint-disable-next-line no-unused-expressions
    resetSortType ? this._currentSortType : ` `;

    remove(this._movieListRated);
    remove(this._movieListCommented);
  }

  _renderMovies() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }

    const cards = this._getFiltredCards();
    const cardCount = cards.length;

    if (cardCount === 0) {
      this._renderNoCards();
      return;
    }

    if (this._filmDetailsPresenter) {
      this._filmDetailsPresenter.updatePopUp(this._currentPopUp);
    }

    this._renderSort();

    this._renderFilmsList();
    this._renderCards(cards.slice(0, Math.min(cardCount, this._renderedCardCount)));

    if (cardCount > this._renderedCardCount) {
      this._renderLoadMoreButton();
    }

    const filtrRatedCards = cards.filter((card) => card.rating > 0);
    if (filtrRatedCards) {
      this._renderFilmListRated(filtrRatedCards);
    }

    const filtrCommentedCards = cards.filter((card) => card.comments.length > 0);
    if (filtrRatedCards) {
      this._renderFilmListCommented(filtrCommentedCards);
    }

    this._setFilmsClickHandler();
  }
}

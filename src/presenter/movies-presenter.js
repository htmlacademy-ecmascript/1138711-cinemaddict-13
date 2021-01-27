import SortContent from "../view/sort.js";
import FilmsContent from "../view/films.js";
import FilmCard from "../view/film-card.js";
import NoCard from "../view/no-film-card.js";
import Loading from "../view/loading.js";
import ShowMoreBtn from "../view/show-more-btn.js";
import FilmListRated from "../view/film-list-rated.js";
import FilmListCommented from "../view/film-list-commented.js";
import CardPresenter from "./card-presenter.js";
import FilmDetailsPresenter, {State as FilmDetailsPresenterViewState} from "./filmDetails-presenter.js";
import {filter} from "../utils/filter.js";
import {render, RenderPosition, remove, SortType, sortCardUp, sortCardRating, UserAction, UpdateType} from "../utils.js";

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

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_CARD:
        this._api.updateCard(update).then((response) => {
          this._cardsModel.updateCard(updateType, response);
        });
        break;
      case UserAction.ADD_COMMENT:
        this._filmDetailsPresenter.setStateForm(FilmDetailsPresenterViewState.BLOCKED);
        this._api.addComment(update).then((response) => {
          this._filmDetailsPresenter.setStateForm(FilmDetailsPresenterViewState.UNBLOCKED);
          this._cardsModel.addComment(updateType, response);
        })
        .catch(() => {
          this._filmDetailsPresenter.setStateForm(FilmDetailsPresenterViewState.ABORTING);
        });
        break;
      case UserAction.DELETE_COMMENT:
        this._filmDetailsPresenter.setStateButton(FilmDetailsPresenterViewState.DELETING);
        this._api.deleteComment(update).then(() => {
          this._filmDetailsPresenter.setStateButton(FilmDetailsPresenterViewState.DELETED);
          this._cardsModel.deleteComment(updateType, update);
        })
        .catch(() => {
          this._filmDetailsPresenter.setStateButton(FilmDetailsPresenterViewState.ABORTING);
        });
        break;
    }
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
    const filmsList = siteMainElement.querySelector(`.films-list`);
    const cardPresenter = new CardPresenter(filmsList, this._handleViewAction);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(cards) {
    cards.forEach((card) => this._renderCard(card));
  }

  _renderLoading() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    render(filmsList, this._loadingComponent, RenderPosition.AFTERBEGIN);
  }

  _renderNoCards() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    filmsList.innerHTML = ` `;
    render(filmsList, this._noMovieCard, RenderPosition.BEFOREEND);
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

  _filmsClickHandler(evt) {
    if (evt.target.tagName === `H3` || evt.target.tagName === `IMG` || evt.target.tagName === `A`) {
      const cardID = evt.target.id;
      const currentCard = this._getFiltredCards().find((card) => card.id === cardID);

      const oldPopUp = document.querySelector(`.film-details`);
      if (oldPopUp) {
        oldPopUp.remove();
      }

      const siteFooter = document.querySelector(`.footer`);
      const filmDetailsPresenter = new FilmDetailsPresenter(siteFooter, this._handleViewAction);
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

    // eslint-disable-next-line no-unused-expressions
    resetRenderedCardCount
      ? this._renderedCardCount = CARD_COUNT_PER_STEP
      : this._renderedCardCount = Math.min(cardCount, this._renderedCardCount);

    // eslint-disable-next-line no-unused-expressions
    resetSortType
      ? this._currentSortType = SortType.DEFAULT
      : ` `;
  }

  _renderMovies() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }

    const cards = this._getFiltredCards();
    const cardCount = cards.length;

    if (this._filmDetailsPresenter) {
      this._filmDetailsPresenter.updatePopUp(this._currentPopUp);
    }

    if (cardCount === 0) {
      this._renderNoCards();
      return;
    }

    remove(this._sortComponent);
    this._renderSort();

    this._renderFilmsList();
    this._renderCards(cards.slice(0, Math.min(cardCount, this._renderedCardCount)));

    if (cardCount > this._renderedCardCount) {
      this._renderLoadMoreButton();
    }

    // this._renderFilmListRated();
    // this._renderFilmListCommented();

    this._setFilmsClickHandler();
  }
}

import FilmCard from "../view/film-card.js";
import ShowMoreBtn from "../view/show-more-btn.js";
import {render, RenderPosition, remove, replace} from "../utils.js";

const CARD_COUNT_PER_STEP = 5;
const siteMainElement = document.querySelector(`.main`);

export default class CardsPresenter {
  constructor(cardContainer, changeData) {
    this._cardContainer = cardContainer;
    this._changeData = changeData;

    this._cardComponent = null;

    this._loadMoreButtonComponent = new ShowMoreBtn();
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);

    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);

    this._renderedCardCount = CARD_COUNT_PER_STEP;
    this._currentCardCount = CARD_COUNT_PER_STEP;
  }

  init(cards) {
    this._cards = cards;

    const prevCardComponent = this._cardComponent;

    if (this._cards.length > this._renderedCardCount) {
      this._renderLoadMoreButton();
    }

    if (prevCardComponent === null) {
      const renderCard = (cardListElement, card) => {
        this._cardComponent = new FilmCard(card);
        render(cardListElement, this._cardComponent, RenderPosition.BEFOREEND);
      };

      const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
      for (let i = 0; i < this._renderedCardCount; i++) {
        renderCard(filmListContainer, this._cards[i]);
      }
      return;
    }

    this._cardComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    if (this._cardContainer.getElement().contains(prevCardComponent.getElement())) {
      replace(this._cardComponent, prevCardComponent);
    }

    remove(prevCardComponent);
  }

  destroy() {
    remove(this._cardComponent);
  }

  _handleLoadMoreButtonClick() {
    const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
    const loadMoreButton = siteMainElement.querySelector(`.films-list__show-more`);

    this._cards
      .slice(this._currentCardCount, this._currentCardCount + CARD_COUNT_PER_STEP)
      .forEach((card) => render(filmListContainer, new FilmCard(card), RenderPosition.BEFOREEND));

    this._currentCardCount += CARD_COUNT_PER_STEP;

    if (this._currentCardCount >= this._cards.length) {
      loadMoreButton.remove();
    }
  }

  _renderLoadMoreButton() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    render(filmsList, this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _handleFavoriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._cards,
            {
              isFavorite: !this._cards.isFavorite
            }
        )
    );
  }
}

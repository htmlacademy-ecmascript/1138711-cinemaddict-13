import {SortType} from "../utils.js";
import AbstractView from "./abstract.js";

const createSortTemplate = (currentSortType) => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button ${currentSortType === SortType.DEFAULT ? `sort__button--active` : ``}"  data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button ${currentSortType === SortType.DATE ? `sort__button--active` : ``}"  data-sort-type="${SortType.DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button ${currentSortType === SortType.RATING ? `sort__button--active` : ``}"  data-sort-type="${SortType.RATING}">Sort by rating</a></li>
</ul>`;
};

export default class SortContent extends AbstractView {
  constructor(currentSortType) {
    super();

    this._currentSortType = currentSortType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  _sortTypeChangeHandler(evt) {
    const sortButtons = document.querySelectorAll(`.sort__button`);
    for (let i = 0; i < sortButtons.length; i++) {
      sortButtons[i].classList.remove(`sort__button--active`);
    }

    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.target.classList.add(`sort__button--active`);

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  getTemplate() {
    return createSortTemplate(this._currentSortType);
  }
}

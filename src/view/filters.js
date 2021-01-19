import {MenuItem} from "../utils.js";
import AbstractView from "./abstract.js";

const createFilterItemTemplate = (filter, currentFilterType) => {
  const {type, name, count} = filter;

  return (
    `<a  id="${type}" href="#favorites" class="main-navigation__item ${type === currentFilterType ? `main-navigation__item--active` : ``}">
    ${name} ${name !== `All movies` ? `<span class="main-navigation__item-count">${count}</span>` : `` }
   </a>`
  );
};

const createFilterTemplate = (filterItems, currentFilterType) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join(``);

  return `<nav class="main-navigation">
  <div class="main-navigation__items" data-menu-item="${MenuItem.CARDS}">
    ${filterItemsTemplate}
  </div>
  <a href="#stats" class="main-navigation__additional"  data-menu-item="${MenuItem.STATISTICS}" >Stats</a>
</nav>`;
};

export default class Filters extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createFilterTemplate(this._filters, this._currentFilter);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }

  _filterTypeChangeHandler(evt) {
    if (evt.target.classList.contains(`main-navigation__item`)) {
      evt.preventDefault();
      this._callback.filterTypeChange(evt.target.id);
    }
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    const menuItem = evt.target.dataset.menuItem;
    this._callback.menuClick(menuItem);
    const mainNavigationActive = document.querySelector(`.main-navigation__item.main-navigation__item--active`);
    const mainNavigationActiveItem = document.querySelector(`.main-navigation__item`);
    const statistics = document.querySelector(`.main-navigation__additional`);
    if (menuItem === MenuItem.STATISTICS) {
      mainNavigationActive.classList.remove(`main-navigation__item--active`);
      statistics.classList.add(`main-navigation__additional--active`);
    } else if (menuItem === MenuItem.CARDS) {
      statistics.classList.remove(`main-navigation__additional--active`);
      mainNavigationActiveItem.classList.add(`main-navigation__item--active`);
    }
  }
}


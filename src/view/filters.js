import {createElement} from "../utils.js";

const createFiltersContent = (filters) => {

  const createFilters = () => {
    return filters.map((filter) => `
    <a href="#favorites" class="main-navigation__item">${filter.name}<span class="main-navigation__item-count">${filter.count}</span></a>`).join(``);
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    ${createFilters()}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

export default class FiltersContent {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFiltersContent(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

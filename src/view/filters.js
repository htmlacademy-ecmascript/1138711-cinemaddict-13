import AbstractView from "./abstract.js";

const createFiltersContentTemplate = (filters) => {

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

export default class FiltersContent extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersContentTemplate(this._filters);
  }
}


import {generateCard} from "./mock/cards.js";
import FooterStatistics from "./view/footer-statistics.js";
import {MenuItem, render, RenderPosition, remove, UpdateType, FilterType} from "./utils.js";
import MoviePresenter from "./presenter/movies-presenter.js";
import FilterPresenter from "./presenter/filter-presenter.js";
import CardsModel from "./model/cards.js";
import FilterModel from "./model/filter.js";
import Statistics from "./view/statistics.js";
import ProfileContent from "./view/profile.js";

const CARD_COUNT = 20;
const siteMainElement = document.querySelector(`.main`);
const cards = new Array(CARD_COUNT).fill().map(generateCard);

const cardsModel = new CardsModel();
cardsModel.setCards(cards);

const filterModel = new FilterModel();

const siteHeader = document.querySelector(`.header`);
render(siteHeader, new ProfileContent(), RenderPosition.BEFOREEND);

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatistics(cards), RenderPosition.AFTERBEGIN);

let statisticsComponent = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.CARDS:
      if (statisticsComponent) {
        moviePresenter.destroy();
        remove(statisticsComponent);
        moviePresenter.init();
      }
      break;
    case MenuItem.STATISTICS:
      moviePresenter.destroy();
      remove(statisticsComponent);
      filterModel.setFilter(UpdateType.MAJOR, FilterType.ALL);
      statisticsComponent = new Statistics(cardsModel.getCards());
      render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
  }
};

const moviePresenter = new MoviePresenter(siteMainElement, cardsModel, filterModel);
const filterPresenter = new FilterPresenter(siteMainElement, filterModel, cardsModel, handleSiteMenuClick);

filterPresenter.init();
moviePresenter.init();

/* eslint-disable no-unused-vars */
/* eslint-disable max-nested-callbacks */
import Statistics from "./view/statistics.js";
import FooterStatistics from "./view/footer-statistics.js";
import {MenuItem, render, RenderPosition, remove, UpdateType, FilterType} from "./utils.js";
import ProfilePresenter from "./presenter/profile-presenter.js";
import MoviePresenter from "./presenter/movies-presenter.js";
import FilterPresenter from "./presenter/filter-presenter.js";
import CardsModel from "./model/cards.js";
import FilterModel from "./model/filter.js";
import Api from "./api.js";

const AUTHORIZATION = `Basic hS11d3dfS11l1sa2f`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;

const api = new Api(END_POINT, AUTHORIZATION);

const filterModel = new FilterModel();
const cardsModel = new CardsModel();

const siteHeader = document.querySelector(`.header`);
const profilePresenter = new ProfilePresenter(siteHeader, cardsModel);

let statisticsComponent = null;
const siteMainElement = document.querySelector(`.main`);

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

const filterPresenter = new FilterPresenter(siteMainElement, filterModel, cardsModel, handleSiteMenuClick);
const moviePresenter = new MoviePresenter(siteMainElement, cardsModel, filterModel, api);

filterPresenter.init();
moviePresenter.init();

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);

api.getCards()
  .then((cards) => {
    return Promise.all(cards.map((card) => api.getComments(card)
      .then((comments) => {
        card.comments = comments;
        return card;
      })
    ));
  })
  // .then((cards) => {
  //   cards.map((card) => api.getComments(card)
  //     .then((comments) => {
  //       cards.forEach((element) => {
  //         card.comments = comments;
  //       });
  //     })
  //   );
  //   return cards;
  // })
  .then((cards) => {
    console.log(cards);
    cardsModel.setCards(UpdateType.INIT, cards);
    profilePresenter.init();
    render(footerStatistics, new FooterStatistics(cardsModel.getCards()), RenderPosition.AFTERBEGIN);
  })
  .catch(() => {
    cardsModel.setCards(UpdateType.INIT, []);
    profilePresenter.init();
    render(footerStatistics, new FooterStatistics(cardsModel.getCards()), RenderPosition.AFTERBEGIN);
  });


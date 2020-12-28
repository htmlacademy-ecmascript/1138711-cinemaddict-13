import {generateCard} from "./mock/cards.js";
import FooterStatistics from "./view/footer-statistics.js";
import {render, RenderPosition} from "./utils.js";
import MoviePresenter from "./presenter/movie-presenter.js";
import FilterPresenter from "./presenter/filter.js";
import CardsModel from "./model/cards.js";
import FilterModel from "./model/filter.js";

const CARD_COUNT = 20;
const siteMainElement = document.querySelector(`.main`);
const cards = new Array(CARD_COUNT).fill().map(generateCard);

const cardsModel = new CardsModel();
cardsModel.setCards(cards);

const filterModel = new FilterModel();

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatistics(cards), RenderPosition.AFTERBEGIN);

const moviePresenter = new MoviePresenter(siteMainElement, cardsModel, filterModel);
const filterPresenter = new FilterPresenter(siteMainElement, filterModel, cardsModel);

filterPresenter.init();
moviePresenter.init();

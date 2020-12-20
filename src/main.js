import FooterStatistics from "./view/footer-statistics.js";
import {generateCard} from "./mock/cards.js";
import {render, RenderPosition} from "./utils.js";
import MoviePresenter from "./presenter/movie-presenter.js";

const CARD_COUNT = 20;
const siteMainElement = document.querySelector(`.main`);
const cards = new Array(CARD_COUNT).fill().map(generateCard);

const moviePresenter = new MoviePresenter(siteMainElement);
moviePresenter.init(cards);

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatistics(cards), RenderPosition.AFTERBEGIN);

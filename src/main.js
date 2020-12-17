import ProfileContent from "./view/profile.js";
import FiltersContent from "./view/filters.js";
import SortContent from "./view/sort.js";
import FooterStatistics from "./view/footer-statistics.js";
import {generateCard} from "./mock/cards.js";
import {generateFilter} from "./mock/filtration.js";
import {render, RenderPosition} from "./utils.js";
import MoviePresenter from "./presenter/moviePresenter.js";

const CARD_COUNT = 20;

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

const cards = new Array(CARD_COUNT).fill().map(generateCard);
const filters = generateFilter(cards);

render(siteHeader, new ProfileContent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FiltersContent(filters), RenderPosition.BEFOREEND);
render(siteMainElement, new SortContent(), RenderPosition.BEFOREEND);

const moviePresenter = new MoviePresenter(siteMainElement);
moviePresenter.init(cards);

const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatistics(cards[0]), RenderPosition.AFTERBEGIN);

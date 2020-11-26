import { createProfileContent } from "./view/profile.js";
import { createMenuContent } from "./view/menu.js";
import { createSortContent } from "./view/sort.js";
import { createFilmsContent } from "./view/films.js";
import { createFilmCard } from "./view/film-card.js";
import { createShowMoreBtn } from "./view/show-more-btn.js";
import { createFilmListRated } from "./view/film-list-rated.js";
import { createFilmListCommented } from "./view/film-list-commented.js";
import { createFooterStatistics } from "./view/footer-statistics.js";
import { createFilmDetails } from "./view/film-details.js";
import { generateCard } from "./mock/card.js";

const CARD_COUNT = 5;
const CARD_COUNT_EXTRA = 2;
const MOCK_COUNT = 20;

const cards = new Array(MOCK_COUNT).fill().map(generateCard);

const render = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeader, createProfileContent(), `beforeend`);
render(siteMainElement, createMenuContent(), `beforeend`);
render(siteMainElement, createSortContent(), `beforeend`);
render(siteMainElement, createFilmsContent(), `beforeend`);

const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT; i++) {
  render(filmListContainer, createFilmCard(cards[i]), `beforeend`);
}

render(filmListContainer, createShowMoreBtn(), `afterend`);

const filmList = siteMainElement.querySelector(`.films-list`);
render(filmList, createFilmListRated(), `afterend`);

const renderCardExtra = (cardCount, cardContainer) => {
  for (let i = 0; i < cardCount; i++) {
    render(cardContainer, createFilmCard(cards[i]), `beforeend`);
  }
};

const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
renderCardExtra(CARD_COUNT_EXTRA, filmListExtraTopContainer);

render(filmListExtra[0], createFilmListCommented(), `afterend`);

const filmListExtraCommentContainer = filmListExtra[1].querySelector(`.films-list__container`);
renderCardExtra(CARD_COUNT_EXTRA, filmListExtraCommentContainer);

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, createFooterStatistics(), `beforeend`);

render(siteFooter, createFilmDetails(cards[0]), `afterend`);

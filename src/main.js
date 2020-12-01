import {createProfileContent} from "./view/profile.js";
import {createFiltersContent} from "./view/filters.js";
import {createSortContent} from "./view/sort.js";
import {createFilmsContent} from "./view/films.js";
import {createFilmCard} from "./view/film-card.js";
import {createShowMoreBtn} from "./view/show-more-btn.js";
import {createFilmListRated} from "./view/film-list-rated.js";
import {createFilmListCommented} from "./view/film-list-commented.js";
import {createFooterStatistics} from "./view/footer-statistics.js";
import {generateCard} from "./mock/cards.js";
import {generateFilter} from "./mock/filtration.js";
// import {createFilmDetails} from "./view/film-details.js";

const CARD_COUNT = 20;
const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;

const cards = new Array(CARD_COUNT).fill().map(generateCard);
const filters = generateFilter(cards);

const render = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeader, createProfileContent(), `beforeend`);
render(siteMainElement, createFiltersContent(filters), `beforeend`);
render(siteMainElement, createSortContent(), `beforeend`);
render(siteMainElement, createFilmsContent(), `beforeend`);

const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT_PER_STEP; i++) {
  render(filmListContainer, createFilmCard(cards[i]), `beforeend`);
}

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
render(footerStatistics, createFooterStatistics(cards[0]), `beforeend`);

if (cards.length > CARD_COUNT_PER_STEP) {
  let renderedCardCount = CARD_COUNT_PER_STEP;

  render(filmListContainer, createShowMoreBtn(), `afterend`);

  const loadMoreButton = filmList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cards
      .slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP)
      .forEach((card) => render(filmListContainer, createFilmCard(card), `beforeend`));

    renderedCardCount += CARD_COUNT_PER_STEP;

    if (renderedCardCount >= cards.length) {
      loadMoreButton.remove();
    }
  });
}

// render(siteFooter, createFilmDetails(cards[0]), `afterend`);

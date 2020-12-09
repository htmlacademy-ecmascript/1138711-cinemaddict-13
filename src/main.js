import ProfileContent from "./view/profile.js";
import FiltersContent from "./view/filters.js";
import SortContent from "./view/sort.js";
import FilmsContent from "./view/films.js";
import FilmCard from "./view/film-card.js";
import NoCard from "./view/no-film-card.js";
import ShowMoreBtn from "./view/show-more-btn.js";
import FilmListRated from "./view/film-list-rated.js";
import FilmListCommented from "./view/film-list-commented.js";
import FooterStatistics from "./view/footer-statistics.js";
import FilmDetails from "./view/film-details.js";
import {generateCard} from "./mock/cards.js";
import {generateFilter} from "./mock/filtration.js";
import {render, RenderPosition} from "./utils.js";

const CARD_COUNT = 20;
const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;

const body = document.querySelector(`body`);
const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

const cards = new Array(CARD_COUNT).fill().map(generateCard);
const filters = generateFilter(cards);
const renderCard = (cardListElement, card) => {
  const cardComponent = new FilmCard(card);
  render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
};

render(siteHeader, new ProfileContent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FiltersContent(filters), RenderPosition.BEFOREEND);
render(siteMainElement, new SortContent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmsContent(), RenderPosition.BEFOREEND);

const filmsList = siteMainElement.querySelector(`.films-list`);
if (cards.length === 0) {
  filmsList.innerHTML = ` `;
  render(filmsList, new NoCard(), RenderPosition.BEFOREEND);
}

const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT_PER_STEP; i++) {
  renderCard(filmListContainer, cards[i]);
}

const films = siteMainElement.querySelector(`.films`);
render(films, new FilmListRated(), RenderPosition.BEFOREEND);

const renderCardExtra = (cardCount, cardContainer) => {
  for (let i = 0; i < cardCount; i++) {
    renderCard(cardContainer, cards[i]);
  }
};

const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
renderCardExtra(CARD_COUNT_EXTRA, filmListExtraTopContainer);

render(films, new FilmListCommented(), RenderPosition.BEFOREEND);

const filmListExtraCommentContainer = filmListExtra[1].querySelector(`.films-list__container`);
renderCardExtra(CARD_COUNT_EXTRA, filmListExtraCommentContainer);

const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, new FooterStatistics(cards[0]), RenderPosition.AFTERBEGIN);

if (cards.length > CARD_COUNT_PER_STEP) {
  let renderedCardCount = CARD_COUNT_PER_STEP;

  const loadMoreButtonComponent = new ShowMoreBtn();
  render(filmsList, loadMoreButtonComponent, RenderPosition.BEFOREEND);

  loadMoreButtonComponent.setClickHandler(() => {
    cards
      .slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP)
      .forEach((card) => render(filmListContainer, new FilmCard(card), RenderPosition.BEFOREEND));

    renderedCardCount += CARD_COUNT_PER_STEP;

    if (renderedCardCount >= cards.length) {
      loadMoreButtonComponent.remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}

const renderFilmDetails = (card) => {
  const popUp = new FilmDetails(card).getElement();
  render(siteFooter, popUp, RenderPosition.BEFOREEND);
  body.classList.add(`hide-overflow`);

  const closeFilmDetails = () => {
    popUp.remove();
    body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  const buttonCloseFilmDetails = document.querySelector(`.film-details__close-btn`);
  buttonCloseFilmDetails.addEventListener(`click`, function () {
    closeFilmDetails();
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closeFilmDetails();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  document.addEventListener(`keydown`, onEscKeyDown);
};

films.addEventListener(`click`, function (evt) {
  if (evt.target.tagName === `H3` || evt.target.tagName === `IMG` || evt.target.tagName === `A`) {
    let cardID = evt.target.id;
    let cardItem = cards.find(card => card.id === cardID);
    renderFilmDetails(cardItem);
  }
});


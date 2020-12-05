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
import {renderElement, RenderPosition} from "./utils.js";

const CARD_COUNT = 20;
const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;
const BODY = document.querySelector(`body`);

const cards = new Array(CARD_COUNT).fill().map(generateCard);
const filters = generateFilter(cards);

const renderCard = (cardListElement, card) => {
  const cardComponent = new FilmCard(card);
  renderElement(cardListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

const siteHeader = document.querySelector(`.header`);
renderElement(siteHeader, new ProfileContent().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);
renderElement(siteMainElement, new FiltersContent(filters).getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new SortContent().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new FilmsContent().getElement(), RenderPosition.BEFOREEND);

const filmsList = siteMainElement.querySelector(`.films-list`);
if (cards.length === 0) {
  filmsList.innerHTML = ` `;
  renderElement(filmsList, new NoCard().getElement(), RenderPosition.BEFOREEND);
}

const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT_PER_STEP; i++) {
  renderCard(filmListContainer, cards[i]);
}

const films = siteMainElement.querySelector(`.films`);
renderElement(films, new FilmListRated().getElement(), RenderPosition.BEFOREEND);

const renderCardExtra = (cardCount, cardContainer) => {
  for (let i = 0; i < cardCount; i++) {
    renderCard(cardContainer, cards[i]);
  }
};

const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
renderCardExtra(CARD_COUNT_EXTRA, filmListExtraTopContainer);

renderElement(films, new FilmListCommented().getElement(), RenderPosition.BEFOREEND);

const filmListExtraCommentContainer = filmListExtra[1].querySelector(`.films-list__container`);
renderCardExtra(CARD_COUNT_EXTRA, filmListExtraCommentContainer);

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
renderElement(footerStatistics, new FooterStatistics(cards[0]).getElement(), RenderPosition.AFTERBEGIN);

if (cards.length > CARD_COUNT_PER_STEP) {
  let renderedCardCount = CARD_COUNT_PER_STEP;

  const loadMoreButtonComponent = new ShowMoreBtn();
  renderElement(filmsList, loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cards
      .slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP)
      .forEach((card) => renderElement(filmListContainer, new FilmCard(card).getElement(), RenderPosition.BEFOREEND));

    renderedCardCount += CARD_COUNT_PER_STEP;

    if (renderedCardCount >= cards.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}

const renderFilmDetails = () => {
  renderElement(siteFooter, new FilmDetails(cards[0]).getElement(), RenderPosition.BEFOREEND);
  BODY.classList.add(`hide-overflow`);

  const popUpFilmDetails = document.querySelector(`.film-details`);
  const closeFilmDetails = () => {
    popUpFilmDetails.remove();
    BODY.classList.remove(`hide-overflow`);
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
    renderFilmDetails();
  }
});


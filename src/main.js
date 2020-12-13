import ProfileContent from "./view/profile.js";
import FiltersContent from "./view/filters.js";
import SortContent from "./view/sort.js";
import FooterStatistics from "./view/footer-statistics.js";
import FilmDetails from "./view/film-details.js";
import {generateCard} from "./mock/cards.js";
import {generateFilter} from "./mock/filtration.js";
import {render, RenderPosition} from "./utils.js";
import MoviePresenter from "./presenter/moviePresenter.js";

const CARD_COUNT = 20;

const body = document.querySelector(`body`);
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

const films = siteMainElement.querySelector(`.films`);
films.addEventListener(`click`, function (evt) {
  if (evt.target.tagName === `H3` || evt.target.tagName === `IMG` || evt.target.tagName === `A`) {
    const cardID = evt.target.id;
    let cardItem = cards.find((card) => card.id === cardID);
    renderFilmDetails(cardItem);
  }
});


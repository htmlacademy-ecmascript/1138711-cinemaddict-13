import {Rank, SpecialName} from "../utils.js";
import AbstractView from "./abstract.js";

const getRankOfUser = (cards) => {
  const cardsLength = cards.filter((card) => card.isWatched).length;
  let rank = ``;
  if (cardsLength >= SpecialName.ONE && cardsLength <= SpecialName.TEN) {
    rank = Rank.NOVICE;
  } else if (cardsLength >= SpecialName.ELEVEN && cardsLength <= SpecialName.TWENTY) {
    rank = Rank.FAN;
  } else if (cardsLength >= SpecialName.TWENTY_ONE) {
    rank = Rank.MOVIE_BUFF;
  }
  return rank;
};

const createProfileContentTemplate = (userRank) => {
  return `<section class="header__profile profile">
  <p class="profile__rating">${userRank}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

export default class ProfileContent extends AbstractView {
  constructor(cards) {
    super();

    this._cards = cards;
  }

  getTemplate() {
    const userRank = getRankOfUser(this._cards);
    return createProfileContentTemplate(userRank);
  }
}

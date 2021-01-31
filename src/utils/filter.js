import {FilterType} from "./common.js";

export const filter = {
  [FilterType.ALL]: (cards) => cards.filter((card) => !card.all),
  [FilterType.WATCHLIST]: (cards) => cards.filter((card) => card.isAddToWatchList),
  [FilterType.WATCHED]: (cards) => cards.filter((card) => card.isWatched),
  [FilterType.FAVORITES]: (cards) => cards.filter((card) => card.isFavorite)
};

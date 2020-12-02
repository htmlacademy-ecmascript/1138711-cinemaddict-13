const taskToFilterMap = {
  All: (cards) => cards.length,
  Addtowatchlist: (cards) => cards.reduce((accumulator, card) => accumulator + card.isAddToWatchList, 0),
  Watched: (cards) => cards.reduce((accumulator, card) => accumulator + card.isWatched, 0),
  Favorites: (cards) => cards.reduce((accumulator, card) => accumulator + card.isFavorite, 0)
};

export const generateFilter = (cards) => {
  return Object.entries(taskToFilterMap).map(([filterName, countCards]) => {
    return {
      name: filterName,
      count: countCards(cards),
    };
  });
};

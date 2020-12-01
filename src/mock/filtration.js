const taskToFilterMap = {
  All: (cards) => cards.length,
  Addtowatchlist: (cards) => cards
    .filter((card) => card.isAddToWatchList).length,
  Watched: (cards) => cards
    .filter((card) => card.isWatched).length,
  Favorites: (cards) => cards
    .filter((card) => card.isFavorite).length,
};

export const generateFilter = (cards) => {
  return Object.entries(taskToFilterMap).map(([filterName, countCards]) => {
    return {
      name: filterName,
      count: countCards(cards),
    };
  });
};

import Observer from "./observer.js";

export default class Cards extends Observer {
  constructor() {
    super();
    this._cards = [];
  }

  setCards(updateType, cards) {
    this._cards = cards.slice();

    this._notify(updateType);
  }

  getCards() {
    return this._cards;
  }

  updateCard(updateType, update) {
    const index = this._cards.findIndex((card) => card.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting card`);
    }

    this._cards = [
      ...this._cards.slice(0, index),
      Object.assign(
          update,
          {comments: this._cards[index].comments}),
      ...this._cards.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addComment(updateType, response, cardId) {
    const index = this._cards.findIndex((card) => card.id === cardId);

    if (index === -1) {
      throw new Error(`Can't delete unexisting card`);
    }

    const currentComments = response.comments;
    this._cards[index].comments = [
      ...currentComments
    ];

    this._notify(updateType);
  }

  deleteComment(updateType, commentId, cardId) {
    const index = this._cards.findIndex((card) => card.id === cardId);

    if (index === -1) {
      throw new Error(`Can't delete unexisting card`);
    }

    const commentIndex = this._cards[index].comments.findIndex((comment) => comment.id === commentId);

    this._cards[index].comments = [
      ...this._cards[index].comments.slice(0, commentIndex),
      ...this._cards[index].comments.slice(commentIndex + 1)
    ];

    this._notify(updateType);
  }

  static adaptToClient(card) {
    const adaptedCard = Object.assign(
        {},
        card,
        {
          id: card.id,
          commentsIds: card.comments,
          poster: card.film_info.poster,
          title: card.film_info.alternative_title,
          original: card.film_info.title,
          rating: card.film_info.total_rating,
          director: card.film_info.director,
          writers: card.film_info.writers,
          actors: card.film_info.actors,
          date: card.film_info.release.date,
          duration: card.film_info.runtime,
          country: card.film_info.release.release_country,
          genres: card.film_info.genre,
          ageRating: card.film_info.age_rating,
          description: card.film_info.description,
          isAddToWatchList: card.user_details.watchlist,
          isFavorite: card.user_details.favorite,
          isWatched: card.user_details.already_watched,
          watching: card.user_details.watching_date
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedCard.film_info;
    delete adaptedCard.user_details;
    delete adaptedCard.comments;

    return adaptedCard;
  }

  static adaptToServer(card) {
    const adaptedCard = Object.assign(
        {},
        card,
        {
          "id": card.id,
          "comments": card.commentsIds,
          "film_info": {
            "title": card.original,
            "alternative_title": card.title,
            "total_rating": card.rating,
            "poster": card.poster,
            "age_rating": card.ageRating,
            "director": card.director,
            "writers": card.writers,
            "actors": card.actors,
            "release": {
              "date": card.date,
              "release_country": card.country
            },
            "runtime": card.duration,
            "genre": card.genres,
            "description": card.description,
          },
          "user_details": {
            "watchlist": card.isAddToWatchList,
            "already_watched": card.isWatched,
            "watching_date": card.watching,
            "favorite": card.isFavorite
          }
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedCard.isAddToWatchList;
    delete adaptedCard.isFavorite;
    delete adaptedCard.isWatched;
    delete adaptedCard.watching;
    delete adaptedCard.writers;
    delete adaptedCard.description;
    delete adaptedCard.genres;
    delete adaptedCard.original;
    delete adaptedCard.title;
    delete adaptedCard.rating;
    delete adaptedCard.poster;
    delete adaptedCard.duration;
    delete adaptedCard.director;
    delete adaptedCard.date;
    delete adaptedCard.country;
    delete adaptedCard.ageRating;
    delete adaptedCard.actors;

    return adaptedCard;
  }

  static adaptCommentToClient(comment) {
    const adaptedComment = Object.assign(
        {},
        comment,
        {
          id: comment.id,
          author: comment.author,
          comment: comment.comment,
          date: comment.date,
          emotion: comment.emotion
        }
    );

    return adaptedComment;
  }
}


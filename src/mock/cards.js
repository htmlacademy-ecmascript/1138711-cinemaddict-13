import dayjs from "dayjs";

const MIN_RATING = 0;
const MAX_RATING = 9;
const MIN_DISCRIPTION = 1;
const MAX_DISCRIPTION = 5;
const MIN_DATE = 1960;
const MAX_DATE = 2020;
const COMMENT_COUNT = 15;
const REALIZE_YEAR = 80;
const REALIZE_MONTH = 12;
const REALIZE_DAY = 30;
const MIN_DURATION = 30;
const MAX_DURATION = 180;
const GENRE_COUNT = 3;
const MAX_DAYS_GAP = 360;
const titles = [
  `Made for each other`,
  `Popeye meets Sinbad`,
  `Sagebrush trail`,
  `Santa Clause conquers the martians`,
  `The dance of life`,
  `The great Flamorion`,
  `The man with the golden arm`
];
const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. `,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. `,
  `In rutrum ac purus sit amet tempus.`
];
const countrys = [
  `USA`,
  `England`,
  `Germany`,
  `Italy`
];
const ages = [
  `21+`,
  `18+`,
  `16+`,
  `14+`
];
const genreLists = [
  `Western`,
  `Detective`,
  `Horror`,
  `Comedy`,
  `Fantasy`,
  `Travel`
];
const emotions = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];
const authors = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Young Yougn`
];
const writers = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Young Yougn`
];
const actors = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Young Yougn`
];
const IMAGES = [`made-for-each-other.png`, `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`
];

const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = function (elements) {
  const randomIndex = getRandomInteger(0, elements.length - 1);
  return elements[randomIndex];
};

const generatePoster = () => {
  const poster = `./images/posters/` + getRandomElement(IMAGES);
  return poster;
};

const generateDescription = () => {
  const descriptionFilms = [];
  for (let i = 0; i <= descriptions.length; i++) {
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    descriptionFilms.push(descriptions[randomIndex]);
  }
  descriptionFilms.sort(() => Math.random() - 0.5);
  return descriptionFilms.slice(0, getRandomInteger(MIN_DISCRIPTION, MAX_DISCRIPTION));
};

const getRandomRating = function (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(1);
};

const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return hours + `h ` + minutes + `m`;
};

const generateDuration = () => {
  // eslint-disable-next-line no-undef
  const duration = require(`dayjs/plugin/duration`);
  dayjs.extend(duration);
  const durationGap = getRandomInteger(MIN_DURATION, MAX_DURATION);
  const minutes = dayjs.duration(durationGap, `minutes`).as(`minutes`);
  return getTimeFromMins(minutes);
};

const generateDateComment = () => {
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);
  return dayjs().add(daysGap, `day`).toDate();
};

const generateRealize = () => {
  return dayjs().subtract(getRandomInteger(0, REALIZE_YEAR), `year`).subtract(getRandomInteger(0, REALIZE_MONTH), `month`).subtract(getRandomInteger(0, REALIZE_DAY), `day`).format(`DD MMM YYYY`);
};

const generateComment = () => {
  return {
    text: generateDescription(),
    emotion: getRandomElement(emotions),
    date: generateDateComment(),
    author: getRandomElement(authors)
  };
};

const getCommentBlocks = function () {
  const randomCommentCount = getRandomInteger(1, COMMENT_COUNT);
  const blocks = [];
  for (let i = 0; i < randomCommentCount; i++) {
    blocks.push(generateComment(i + 1));
  }
  return blocks;
};

const generateGenres = () => {
  const genres = [];
  for (let i = 0; i <= genreLists.length - 1; i++) {
    genres.push(genreLists[i]);
  }
  genres.sort(() => Math.random() - 0.5);
  return genres.slice(0, getRandomInteger(1, GENRE_COUNT));
};

export const generateCard = () => {
  const comments = getCommentBlocks();
  const duration = generateDuration();

  return {
    poster: generatePoster(),
    title: getRandomElement(titles),
    original: getRandomElement(titles),
    rating: getRandomRating(MIN_RATING, MAX_RATING),
    director: getRandomElement(authors),
    writers: getRandomElement(writers),
    actors: getRandomElement(actors),
    realize: generateRealize(),
    date: getRandomInteger(MIN_DATE, MAX_DATE),
    duration,
    country: getRandomElement(countrys),
    genres: generateGenres(),
    description: generateDescription(),
    comments,
    ageRating: getRandomElement(ages),
    isAddToWatchList: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

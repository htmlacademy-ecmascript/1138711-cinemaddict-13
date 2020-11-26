import dayjs from "dayjs";

const MIN_RATING = 0;
const MAX_RATING = 9;
const MIN_DATE = 1960;
const MAX_DATE = 2020;
const COMMENT_COUNT = 5;
const REALIZE_YEAR = 80;
const REALIZE_MONTH = 12;
const REALIZE_DAY = 30;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateTitle = () => {
  const titles = [
    `Made for each other`,
    `Popeye meets Sinbad`,
    `Sagebrush trail`,
    `Santa Clause conquers the martians`,
    `The dance of life`,
    `The great Flamorion`,
    `The man with the golden arm`
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
};

const generatePoster = () => {
  const images = new Array('made-for-each-other.png', 'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg', 'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg', 'the-great-flamarion.jpg', 'the-man-with-the-golden-arm.jpg');

  const randomIndex = getRandomInteger(0, images.length - 1);
  const poster = './images/posters/' + images[randomIndex];
  return poster;
};

const generateDescription = () => {
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

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  const descriptionFilms = [];

  for (let i = 0; i <= descriptions.length; i++) {
    descriptionFilms.push(descriptions[randomIndex]);
  };

  descriptionFilms.sort(() => Math.random() - 0.5);

  const minNumber = 1;
  const maxNumber = 5;
  return descriptionFilms.slice(0, getRandomInteger(minNumber, maxNumber));
};

var generateRating = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return parseFloat(rand.toFixed(1));
};

const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + 'h ' + minutes + 'm';
};

const generateDuration = () => {
  var duration = require('dayjs/plugin/duration');
  dayjs.extend(duration);

  const minDuration = 30;
  const maxDuration = 180;
  const durationGap = getRandomInteger(minDuration, maxDuration);
  const minutes = dayjs.duration(durationGap, 'minutes').as('minutes');
  return getTimeFromMins(minutes);
};

const generateCountry = () => {
  const countrys = [
    `USA`,
    `England`,
    `Germany`,
    `Italy`
  ];

  const randomIndex = getRandomInteger(0, countrys.length - 1);
  return countrys[randomIndex];
};

const generateAgeRating = () => {
  const ages = [
    `21+`,
    `18+`,
    `16+`,
    `14+`
  ];

  const randomIndex = getRandomInteger(0, ages.length - 1);
  return ages[randomIndex];
};

const generateGenre = () => {
  const genres = [
    `Western`,
    `Detective`,
    `Horror`,
    `Travel`
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);
  return genres[randomIndex];
};

const generateEmotion = () => {
  const emotions = [
    `smile`,
    `sleeping`,
    `puke`,
    `angry`
  ];
  const randomIndex = getRandomInteger(0, emotions.length - 1);
  return emotions[randomIndex];
};

const generateDateComment = () => {
  const maxDaysGap = 360;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, `day`).toDate();
};

const generateAuthor = () => {
  const authors = [
    `Anne Wigton`,
    `Heinz Herald`,
    `Richard Weil`,
    `Erich von Stroheim`,
    `Mary Beth Hughes`,
    `Dan Duryea`,
    `Young Yougn`
  ];

  const randomIndex = getRandomInteger(0, authors.length - 1);
  return authors[randomIndex];
};

const generateRealize = () => {
  return dayjs().subtract(getRandomInteger(0, REALIZE_YEAR), 'year').subtract(getRandomInteger(0, REALIZE_MONTH), 'month').subtract(getRandomInteger(0, REALIZE_DAY), 'day').format('DD MMM YYYY')
};

const generateComment = () => {
  return {
    count: getRandomInteger(0, COMMENT_COUNT),
    text: generateDescription(),
    emotion: generateEmotion(),
    date: generateDateComment(),
    author: generateAuthor()
  };
};

export const generateCard = () => {
  const comments = generateComment();
  const durationDate = generateDuration();

  return {
    poster: generatePoster(),
    title: generateTitle(),
    original: generateTitle(),
    rating: generateRating(MIN_RATING, MAX_RATING),
    director: generateAuthor(),
    writers: generateAuthor(),
    actors: generateAuthor(),
    realize: generateRealize(),
    date: getRandomInteger(MIN_DATE, MAX_DATE),
    duration: durationDate,
    country: generateCountry(),
    genre: generateGenre(),
    description: generateDescription(),
    comments,
    ageRating: generateAgeRating()
  };
};

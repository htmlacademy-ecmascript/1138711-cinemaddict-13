import dayjs from "dayjs";
import Smart from "./smart";
import Chart from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  getClearHoursFromMins,
  getRestMinutes,
  makeItemsUniq,
  Period,
  DaysNumber,
  getCardsIsWatched,
  getCardsForPeriod
} from "../utils/statistics";

const renderDiagram = (statisticCtx, cards, dateFrom, dateTo) => {
  const BAR_HEIGHT = 50;
  statisticCtx.height = BAR_HEIGHT * 5;

  let filtredCards;
  if (dateFrom === null) {
    filtredCards = cards.filter((card) => getCardsIsWatched(card));
  } else {
    filtredCards = cards.filter((card) => getCardsForPeriod(card, dateFrom, dateTo));
  }

  const totalGenres = filtredCards.map((filtredCard) => filtredCard.genres);
  const mergedTotalGenres = [].concat(...totalGenres);
  const uniqGenres = makeItemsUniq(mergedTotalGenres);

  const cardsGenresCounts = {};
  for (let i in mergedTotalGenres) {
    if (cardsGenresCounts[mergedTotalGenres[i]] !== undefined) {
      (cardsGenresCounts[mergedTotalGenres[i]]++);
    } else {
      (cardsGenresCounts[mergedTotalGenres[i]] = 1);
    }
  }
  const genresCounts = Object.values(cardsGenresCounts).sort((a, b) => b - a);

  return new Chart(statisticCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: uniqGenres,
      datasets: [{
        data: genresCounts,
        backgroundColor: `#ffe800`,
        hoverBackgroundColor: `#ffe800`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 20
          },
          color: `#ffffff`,
          anchor: `start`,
          align: `start`,
          offset: 40,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#ffffff`,
            padding: 100,
            fontSize: 20
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 24
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    }
  });
};

const createStatisticsTemplate = (data) => {
  const {cards, dateFrom, dateTo, currentPeriod} = data;

  let filtredCards;
  if (dateFrom === null) {
    filtredCards = cards.filter((card) => getCardsIsWatched(card));
  } else {
    filtredCards = cards.filter((card) => getCardsForPeriod(card, dateFrom, dateTo));
  }

  const totalGenres = filtredCards.map((filtredCard) => filtredCard.genres);
  const mergedTotalGenres = [].concat(...totalGenres);
  const mostPopularGenres = mergedTotalGenres.reduce((genres, index) => {
    if (genres.indexOf(index) < 0) {
      genres.push(index);
    }
    return genres;
  }, []);

  const totalTimes = filtredCards.reduce((accumulator, filtredCard) => accumulator + filtredCard.duration, 0);
  const totalHours = getClearHoursFromMins(totalTimes);
  const restMinutes = getRestMinutes(totalTimes);

  return ` <section class="statistic">
  <p class="statistic__rank">
    Your rank
    <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    <span class="statistic__rank-label">Sci-Fighter</span>
  </p>

  <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
    <p class="statistic__filters-description">Show stats:</p>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" ${currentPeriod === Period.ALL_TIME ? `checked` : ``} value="all-time" checked>
    <label for="statistic-all-time" class="statistic__filters-label">All time</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" ${currentPeriod === Period.TODAY ? `checked` : ``} value="today">
    <label for="statistic-today" class="statistic__filters-label">Today</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" ${currentPeriod === Period.WEEK ? `checked` : ``} value="week">
    <label for="statistic-week" class="statistic__filters-label">Week</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" ${currentPeriod === Period.MONTH ? `checked` : ``} value="month">
    <label for="statistic-month" class="statistic__filters-label">Month</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" ${currentPeriod === Period.YEAR ? `checked` : ``} value="year">
    <label for="statistic-year" class="statistic__filters-label">Year</label>
  </form>

  <ul class="statistic__text-list">
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">You watched</h4>
      <p class="statistic__item-text">${filtredCards.length}<span class="statistic__item-description">movies</span></p>
    </li>
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">Total duration</h4>
      <p class="statistic__item-text">${totalHours}<span class="statistic__item-description">h</span> ${restMinutes}<span class="statistic__item-description">m</span></p>
    </li>
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">Top genre</h4>
      <p class="statistic__item-text">${mostPopularGenres.length === 0 ? `0` : mostPopularGenres[0]}</p>
    </li>
  </ul>

  <div class="statistic__chart-wrap">
    <canvas class="statistic__chart" width="1000"></canvas>
  </div>

</section>`;
};

export default class Statistics extends Smart {
  constructor(cards) {
    super();

    this._data = {
      cards,
      dateFrom: null,
      dateTo: dayjs().toDate(),
      currentPeriod: ``
    };

    this._diagrams = null;

    this._setDiagrams();
    this._setDateChange();
  }

  removeElement() {
    super.removeElement();

    if (this._diagrams !== null) {
      this._diagrams = null;
    }
  }

  getTemplate() {
    return createStatisticsTemplate(this._data);
  }

  restoreHandlers() {
    this._setDiagrams();
    this._setDateChange();
  }

  _setDateChange() {

    let changePeriod = (DaysNumbers, Periods) => {
      this.updateData({
        dateFrom: dayjs().subtract(DaysNumbers, `day`).toDate(),
        currentPeriod: Periods
      });
    };

    this.getElement().querySelector(`.statistic__filters`).addEventListener(`change`, (evt) => {
      if (evt.target.tagName === `INPUT`) {
        const currentPeriod = evt.target.value;
        if (currentPeriod === Period.ALL_TIME) {
          this.updateData({
            dateFrom: null,
            currentPeriod: Period.ALL_TIME
          });
        } else if (currentPeriod === Period.TODAY) {
          changePeriod(DaysNumber.TODAY, Period.TODAY);
        } else if (currentPeriod === Period.WEEK) {
          changePeriod(DaysNumber.WEEK, Period.WEEK);
        } else if (currentPeriod === Period.MONTH) {
          changePeriod(DaysNumber.MONTH, Period.MONTH);
        } else if (currentPeriod === Period.YEAR) {
          changePeriod(DaysNumber.YEAR, Period.YEAR);
        }
      }
    });
  }

  _setDiagrams() {
    const {cards, dateFrom, dateTo} = this._data;
    const diagramsCtx = this.getElement().querySelector(`.statistic__chart`);
    this._diagrams = renderDiagram(diagramsCtx, cards, dateFrom, dateTo);
  }
}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_films_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films.js */ "./src/view/films.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/show-more-btn.js */ "./src/view/show-more-btn.js");
/* harmony import */ var _view_film_list_rated_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/film-list-rated.js */ "./src/view/film-list-rated.js");
/* harmony import */ var _view_film_list_commented_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/film-list-commented.js */ "./src/view/film-list-commented.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");









// import {createFilmDetails} from "./view/film-details.js"; Попап

const CARD_COUNT = 5;
const CARD_COUNT_EXTRA = 5;

const render = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeader, Object(_view_profile_js__WEBPACK_IMPORTED_MODULE_0__["createProfileContent"])(), `beforeend`);
render(siteMainElement, Object(_view_menu_js__WEBPACK_IMPORTED_MODULE_1__["createMenuContent"])(), `beforeend`);
render(siteMainElement, Object(_view_sort_js__WEBPACK_IMPORTED_MODULE_2__["createSortContent"])(), `beforeend`);
render(siteMainElement, Object(_view_films_js__WEBPACK_IMPORTED_MODULE_3__["createFilmsContent"])(), `beforeend`);

const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT; i++) {
  render(filmListContainer, Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_4__["createFilmCard"])(), `beforeend`);
}

render(filmListContainer, Object(_view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_5__["createShowMoreBtn"])(), `afterend`);

const filmList = siteMainElement.querySelector(`.films-list`);
render(filmList, Object(_view_film_list_rated_js__WEBPACK_IMPORTED_MODULE_6__["createFilmListRated"])(), `afterend`);

const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT_EXTRA; i++) {
  render(filmListExtraTopContainer, Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_4__["createFilmCard"])(), `beforeend`);
}

render(filmListExtra[0], Object(_view_film_list_commented_js__WEBPACK_IMPORTED_MODULE_7__["createFilmListCommented"])(), `afterend`);

const filmListExtraCommentContainer = filmListExtra[1].querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT_EXTRA; i++) {
  render(filmListExtraCommentContainer, Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_4__["createFilmCard"])(), `beforeend`);
}

const siteFooter = document.querySelector(`.footer`);
const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
render(footerStatistics, Object(_view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_8__["createFooterStatistics"])(), `beforeend`);

// render(siteFooter, createFilmDetails(), `afterend`);


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCard", function() { return createFilmCard; });
const createFilmCard = () => {
  return `<article class="film-card">
  <h3 class="film-card__title">Sagebrush Trail</h3>
  <p class="film-card__rating">3.2</p>
  <p class="film-card__info">
    <span class="film-card__year">1933</span>
    <span class="film-card__duration">54m</span>
    <span class="film-card__genre">Western</span>
  </p>
  <img src="./images/posters/sagebrush-trail.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…</p>
  <a class="film-card__comments">89 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};


/***/ }),

/***/ "./src/view/film-list-commented.js":
/*!*****************************************!*\
  !*** ./src/view/film-list-commented.js ***!
  \*****************************************/
/*! exports provided: createFilmListCommented */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmListCommented", function() { return createFilmListCommented; });
const createFilmListCommented = () => {
  return `<section class="films-list films-list--extra">
          <h2 class="films-list__title">Most commented</h2>
          <div class="films-list__container"></div>
  </section>`;
};


/***/ }),

/***/ "./src/view/film-list-rated.js":
/*!*************************************!*\
  !*** ./src/view/film-list-rated.js ***!
  \*************************************/
/*! exports provided: createFilmListRated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmListRated", function() { return createFilmListRated; });
const createFilmListRated = () => {
  return `<section class="films-list films-list--extra">
          <h2 class="films-list__title">Top rated</h2>
          <div class="films-list__container"></div>
  </section>`;
};


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/*! exports provided: createFilmsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsContent", function() { return createFilmsContent; });
const createFilmsContent = () => {
  return `<section class="films">
            <section class="films-list">
              <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
              <div class="films-list__container">
              </div>
            </section>
          </section>`;
};


/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: createFooterStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFooterStatistics", function() { return createFooterStatistics; });
const createFooterStatistics = () => {
  return ` <section class="footer__statistics">
        <p>130 291 movies inside</p>
    </section>`;
};


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: createMenuContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuContent", function() { return createMenuContent; });
const createMenuContent = () => {
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: createProfileContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileContent", function() { return createProfileContent; });
const createProfileContent = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};


/***/ }),

/***/ "./src/view/show-more-btn.js":
/*!***********************************!*\
  !*** ./src/view/show-more-btn.js ***!
  \***********************************/
/*! exports provided: createShowMoreBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreBtn", function() { return createShowMoreBtn; });
const createShowMoreBtn = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: createSortContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortContent", function() { return createSortContent; });
const createSortContent = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,s){ true?module.exports=s():undefined}(this,function(){"use strict";var t,s,n=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,i={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},e=function(t){return t instanceof u},r=function(t,s,n){return new u(t,n,s.$l)},o=function(t){return s.p(t)+"s"},u=function(){function s(t,s,e){var u=this;if(this.$d={},this.$l=e,s)return r(t*i[o(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(s){u.$d[o(s)]=t[s]}),this.calMilliseconds(),this;if("string"==typeof t){var h=t.match(n);if(h)return this.$d.years=h[2],this.$d.months=h[3],this.$d.weeks=h[4],this.$d.days=h[5],this.$d.hours=h[6],this.$d.minutes=h[7],this.$d.seconds=h[8],this.calMilliseconds(),this}return this}var u=s.prototype;return u.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(s,n){return s+(t.$d[n]||0)*i[n]},0)},u.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=Math.floor(t/31536e6),t%=31536e6,this.$d.months=Math.floor(t/2592e6),t%=2592e6,this.$d.days=Math.floor(t/864e5),t%=864e5,this.$d.hours=Math.floor(t/36e5),t%=36e5,this.$d.minutes=Math.floor(t/6e4),t%=6e4,this.$d.seconds=Math.floor(t/1e3),t%=1e3,this.$d.milliseconds=t},u.toISOString=function(){var t=this.$d.years?this.$d.years+"Y":"",s=this.$d.months?this.$d.months+"M":"",n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=n?n+"D":"",e=this.$d.hours?this.$d.hours+"H":"",r=this.$d.minutes?this.$d.minutes+"M":"",o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=o?o+"S":"",h="P"+t+s+i+(e||r||u?"T":"")+e+r+u;return"P"===h?"P0D":h},u.toJSON=function(){return this.toISOString()},u.as=function(t){return this.$ms/i[o(t)]},u.get=function(t){var s=this.$ms,n=o(t);return"milliseconds"===n?s%=1e3:s="weeks"===n?Math.floor(s/i[n]):this.$d[n],s},u.add=function(t,s,n){var u;return u=s?t*i[o(s)]:e(t)?t.$ms:r(t,this).$ms,r(this.$ms+u*(n?-1:1),this)},u.subtract=function(t,s){return this.add(t,s,!0)},u.locale=function(t){var s=this.clone();return s.$l=t,s},u.clone=function(){return r(this.$ms,this)},u.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},s}();return function(n,i,o){t=o,s=o().$utils(),o.duration=function(t,s){var n=o.locale();return r(t,{$l:n},s)},o.isDuration=e;var u=i.prototype.add,h=i.prototype.subtract;i.prototype.add=function(t,s){return e(t)&&(t=t.asMilliseconds()),u.bind(this)(t,s)},i.prototype.subtract=function(t,s){return e(t)&&(t=t.asMilliseconds()),h.bind(this)(t,s)}}});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _mock_cards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/cards.js */ "./src/mock/cards.js");
/* harmony import */ var _mock_filtration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filtration.js */ "./src/mock/filtration.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _presenter_moviePresenter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presenter/moviePresenter.js */ "./src/presenter/moviePresenter.js");










const CARD_COUNT = 20;

const body = document.querySelector(`body`);
const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

const cards = new Array(CARD_COUNT).fill().map(_mock_cards_js__WEBPACK_IMPORTED_MODULE_5__["generateCard"]);
const filters = Object(_mock_filtration_js__WEBPACK_IMPORTED_MODULE_6__["generateFilter"])(cards);

Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteHeader, new _view_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteMainElement, new _view_filters_js__WEBPACK_IMPORTED_MODULE_1__["default"](filters), _utils_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteMainElement, new _view_sort_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

const moviePresenter = new _presenter_moviePresenter_js__WEBPACK_IMPORTED_MODULE_8__["default"](siteMainElement);
moviePresenter.init(cards);

const footerStatistics = siteFooter.querySelector(`.footer__statistics`);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["render"])(footerStatistics, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_3__["default"](cards[0]), _utils_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);

const renderFilmDetails = (card) => {
  const popUp = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_4__["default"](card).getElement();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["render"])(siteFooter, popUp, _utils_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);
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



/***/ }),

/***/ "./src/mock/cards.js":
/*!***************************!*\
  !*** ./src/mock/cards.js ***!
  \***************************/
/*! exports provided: generateCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCard", function() { return generateCard; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


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
const ID = `id`;
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
  const duration = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
  dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(duration);
  const durationGap = getRandomInteger(MIN_DURATION, MAX_DURATION);
  const minutes = dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.duration(durationGap, `minutes`).as(`minutes`);
  return getTimeFromMins(minutes);
};

const generateDateComment = () => {
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).toDate();
};

const generateRealize = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(getRandomInteger(0, REALIZE_YEAR), `year`).subtract(getRandomInteger(0, REALIZE_MONTH), `month`).subtract(getRandomInteger(0, REALIZE_DAY), `day`).format(`DD MMM YYYY`);
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

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generateCard = () => {
  const comments = getCommentBlocks();
  const duration = generateDuration();

  return {
    id: ID + generateId(),
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


/***/ }),

/***/ "./src/mock/filtration.js":
/*!********************************!*\
  !*** ./src/mock/filtration.js ***!
  \********************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const taskToFilterMap = {
  All: (cards) => cards.length,
  Addtowatchlist: (cards) => cards.reduce((accumulator, card) => accumulator + card.isAddToWatchList, 0),
  Watched: (cards) => cards.reduce((accumulator, card) => accumulator + card.isWatched, 0),
  Favorites: (cards) => cards.reduce((accumulator, card) => accumulator + card.isFavorite, 0)
};

const generateFilter = (cards) => {
  return Object.entries(taskToFilterMap).map(([filterName, countCards]) => {
    return {
      name: filterName,
      count: countCards(cards),
    };
  });
};


/***/ }),

/***/ "./src/presenter/cardsPresenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/cardsPresenter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardsPresenter; });
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/show-more-btn.js */ "./src/view/show-more-btn.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




const CARD_COUNT_PER_STEP = 5;
const siteMainElement = document.querySelector(`.main`);

class CardsPresenter {
  constructor(cardContainer, changeData) {
    this._cardContainer = cardContainer;
    this._changeData = changeData;

    this._cardComponent = null;

    this._loadMoreButtonComponent = new _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);

    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);

    this._renderedCardCount = CARD_COUNT_PER_STEP;
    this._currentCardCount = CARD_COUNT_PER_STEP;
  }

  init(cards) {
    this._cards = cards;

    const prevCardComponent = this._cardComponent;

    if (this._cards.length > this._renderedCardCount) {
      this._renderLoadMoreButton();
    }

    if (prevCardComponent === null) {
      const renderCard = (cardListElement, card) => {
        this._cardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](card);
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["render"])(cardListElement, this._cardComponent, _utils_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      };

      const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
      for (let i = 0; i < this._renderedCardCount; i++) {
        renderCard(filmListContainer, this._cards[i]);
      }
      return;
    }

    this._cardComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    if (this._cardContainer.getElement().contains(prevCardComponent.getElement())) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._cardComponent, prevCardComponent);
    }

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevCardComponent);
  }

  destroy() {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._cardComponent);
  }

  _handleLoadMoreButtonClick() {
    const filmListContainer = siteMainElement.querySelector(`.films-list__container`);
    const loadMoreButton = siteMainElement.querySelector(`.films-list__show-more`);

    this._cards
      .slice(this._currentCardCount, this._currentCardCount + CARD_COUNT_PER_STEP)
      .forEach((card) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["render"])(filmListContainer, new _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](card), _utils_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND));

    this._currentCardCount += CARD_COUNT_PER_STEP;

    if (this._currentCardCount >= this._cards.length) {
      loadMoreButton.remove();
    }
  }

  _renderLoadMoreButton() {
    const filmsList = siteMainElement.querySelector(`.films-list`);
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["render"])(filmsList, this._loadMoreButtonComponent, _utils_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _handleFavoriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._cards,
            {
              isFavorite: !this._cards.isFavorite
            }
        )
    );
  }
}


/***/ }),

/***/ "./src/presenter/moviePresenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/moviePresenter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoviePresenter; });
/* harmony import */ var _view_films_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/films.js */ "./src/view/films.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_no_film_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-film-card.js */ "./src/view/no-film-card.js");
/* harmony import */ var _view_film_list_rated_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/film-list-rated.js */ "./src/view/film-list-rated.js");
/* harmony import */ var _view_film_list_commented_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/film-list-commented.js */ "./src/view/film-list-commented.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _cardsPresenter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardsPresenter.js */ "./src/presenter/cardsPresenter.js");








const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT_EXTRA = 2;
const siteMainElement = document.querySelector(`.main`);

class MoviePresenter {
  constructor(movieContainer) {
    this._movieContainer = movieContainer;
    this._renderedCardCount = CARD_COUNT_PER_STEP;
    this._renderedCardCountExtra = CARD_COUNT_EXTRA;

    this._handleCardChange = this._handleCardChange.bind(this);

    this._movieList = new _view_films_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._noMovieCard = new _view_no_film_card_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._movieListRated = new _view_film_list_rated_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._movieListCommented = new _view_film_list_commented_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

  init(cards) {
    this._cards = cards.slice();

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._movieContainer, this._movieList, _utils_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

    this._renderMovieList();
  }

  _renderCards() {
    const cardsPresenter = new _cardsPresenter_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._movieList, this._handleCardChange);
    cardsPresenter.init(this._cards);
  }

  _renderExtraCardsRated() {
    const renderCard = (cardListElement, card) => {
      const cardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](card);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["render"])(cardListElement, cardComponent, _utils_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    };

    const renderCardExtra = (cardCount, cardContainer) => {
      for (let i = 0; i < cardCount; i++) {
        renderCard(cardContainer, this._cards[i]);
      }
    };

    const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
    const filmListExtraTopContainer = filmListExtra[0].querySelector(`.films-list__container`);
    renderCardExtra(this._renderedCardCountExtra, filmListExtraTopContainer);
  }

  _renderFilmListRated() {
    const films = siteMainElement.querySelector(`.films`);
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["render"])(films, this._movieListRated, _utils_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

    this._renderExtraCardsRated();
  }

  _renderExtraCardsCommented() {
    const renderCard = (cardListElement, card) => {
      const cardComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](card);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["render"])(cardListElement, cardComponent, _utils_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    };

    const renderCardExtra = (cardCount, cardContainer) => {
      for (let i = 0; i < cardCount; i++) {
        renderCard(cardContainer, this._cards[i]);
      }
    };

    const filmListExtra = siteMainElement.getElementsByClassName(`films-list--extra`);
    const filmListExtraTopContainer = filmListExtra[1].querySelector(`.films-list__container`);
    renderCardExtra(this._renderedCardCountExtra, filmListExtraTopContainer);
  }

  _renderFilmListCommented() {
    const films = siteMainElement.querySelector(`.films`);
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["render"])(films, this._movieListCommented, _utils_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

    this._renderExtraCardsCommented();
  }

  _clearMovieList() {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._movieList);
    this._renderedCardCount = CARD_COUNT_PER_STEP;
  }

  _handleCardChange(updatedCard) {
    this._cards = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["updateItem"])(this._cards, updatedCard);
    this._cardPresenter[updatedCard.id].init(updatedCard);
  }

  _renderMovieList() {
    if (this._cards.length === 0) {
      const filmsList = siteMainElement.querySelector(`.films-list`);
      filmsList.innerHTML = ` `;
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["render"])(filmsList, this._noMovieCard, _utils_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    }

    this._renderCards();

    this._renderFilmListRated();

    this._renderFilmListCommented();
  }
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, render, replace, remove, renderTemplate, createElement, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

// Принцип работы прост:
// 1. создаём пустой div-блок
// 2. берём HTML в виде строки и вкладываем в этот div-блок, превращая в DOM-элемент
// 3. возвращаем этот DOM-элемент
const createElement = (template) => {
  const newElement = document.createElement(`div`); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstElementChild; // 3
};
// Единственный нюанс, что HTML в строке должен иметь общую обёртку,
// то есть быть чем-то вроде <nav><a>Link 1</a><a>Link 2</a></nav>,
// а не просто <a>Link 1</a><a>Link 2</a>

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmCardTemplate = (card) => {
  const {id, title, rating, poster, genres, duration, description, date, comments, isFavorite, isWatched, isAddToWatList} = card;

  const addToWatListClassName = isAddToWatList
    ? `film-card__controls-item--add-to-watchlist film-card__controls-item--active`
    : `film-card__controls-item--add-to-watchlist`;

  const favoriteClassName = isFavorite
    ? `film-card__controls-item--favorite film-card__controls-item--active`
    : `film-card__controls-item--favorite`;

  const watchedClassName = isWatched
    ? `film-card__controls-item--mark-as-watched film-card__controls-item--active`
    : `film-card__controls-item--mark-as-watched`;


  return `<article class="film-card">
  <h3 class="film-card__title" id="${id}">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${date}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster" id="${id}">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments" id="${id}">${comments.length}</a>
  <div class="film-card__controls">
    <button type="button" class="film-card__controls-item button ${addToWatListClassName}">Add to watchlist</button>
    <button type="button" class="film-card__controls-item button ${watchedClassName}" >Mark as watched</button>
    <button type="button" class="film-card__controls-item button ${favoriteClassName}" >Mark as favorite</button>
  </div>
</article>`;
};

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  _setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-details.js":
/*!**********************************!*\
  !*** ./src/view/film-details.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetails; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmDetailsTemplate = (cards) => {
  const {actors, ageRating, comments, country, description, director, duration, genres, original, poster, rating, realize,
    writers, title} = cards;

  const createGenresTemplate = () => {
    return genres.map((genre) => ` <span class="film-details__genre">${genre}</span>`).join(``);
  };

  const createCommentsTemplate = () => {
    return comments.map((comment) => `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comment.text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${comment.date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`).join(``);
  };

  const createEmotionTemplate = () => {
    return comments.map((comment) => `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
    <label class="film-details__emoji-label" for="emoji-angry">
      <img src="./images/emoji/${comment.emotion}.png" width="30" height="30" alt="emoji">
    </label>`).join(``);
  };

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">${original}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${realize}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
              ${createGenresTemplate()}
            </tr>
          </table>

          <p class="film-details__film-description">
          ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.count}</span></h3>

        <ul class="film-details__comments-list">
          ${createCommentsTemplate()}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            ${createEmotionTemplate()}
          </div>

        </div>
      </section>
    </div>
  </form>
</section>`;
};

class FilmDetails extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return createFilmDetailsTemplate(this._cards);
  }
}


/***/ }),

/***/ "./src/view/film-list-commented.js":
/*!*****************************************!*\
  !*** ./src/view/film-list-commented.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListCommented; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmListCommentedTemplate = () => {
  return `<section class="films-list films-list--extra">
          <h2 class="films-list__title">Most commented</h2>
          <div class="films-list__container"></div>
  </section>`;
};

class FilmListCommented extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmListCommentedTemplate();
  }
}


/***/ }),

/***/ "./src/view/film-list-rated.js":
/*!*************************************!*\
  !*** ./src/view/film-list-rated.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListRated; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmListRatedTemplate = () => {
  return `<section class="films-list films-list--extra">
          <h2 class="films-list__title">Top rated</h2>
          <div class="films-list__container"></div>
  </section>`;
};

class FilmListRated extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmListRatedTemplate();
  }
}


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsContent; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsContentTemplate = () => {
  return `<section class="films">
            <section class="films-list">
              <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
              <div class="films-list__container">
              </div>
            </section>
          </section>`;
};

class FilmsContent extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsContentTemplate();
  }
}


/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersContent; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFiltersContentTemplate = (filters) => {

  const createFilters = () => {
    return filters.map((filter) => `
    <a href="#favorites" class="main-navigation__item">${filter.name}<span class="main-navigation__item-count">${filter.count}</span></a>`).join(``);
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    ${createFilters()}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

class FiltersContent extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersContentTemplate(this._filters);
  }
}



/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatistics; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFooterStatisticsTemplate = (cards) => {
  const {date} = cards;
  return `<p>${date} movies inside</p>`;
};

class FooterStatistics extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._cards);
  }
}


/***/ }),

/***/ "./src/view/no-film-card.js":
/*!**********************************!*\
  !*** ./src/view/no-film-card.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoCard; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoCardTemplate = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`;
};

class NoCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoCardTemplate();
  }
}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileContent; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProfileContentTemplate = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

class ProfileContent extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createProfileContentTemplate();
  }
}


/***/ }),

/***/ "./src/view/show-more-btn.js":
/*!***********************************!*\
  !*** ./src/view/show-more-btn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreBtn; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreBtnTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMoreBtn extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    // 4. Теперь обработчик - метод класса, а не стрелочная функция.
    // Поэтому при передаче в addEventListener он теряет контекст (this),
    // а с контекстом - доступ к свойствам и методам.
    // Чтобы такого не происходило, нужно насильно
    // привязать обработчик к контексту с помощью bind
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreBtnTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    // 3. А внутри абстрактного обработчика вызовем колбэк
    this._callback.click();
  }

  setClickHandler(callback) {
    // Мы могли бы сразу передать callback в addEventListener,
    // но тогда бы для удаления обработчика в будущем,
    // нам нужно было бы производить это снаружи, где-то там,
    // где мы вызывали setClickHandler, что не всегда удобно

    // 1. Поэтому колбэк мы запишем во внутреннее свойство
    this._callback.click = callback;
    // 2. В addEventListener передадим абстрактный обработчик
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortContent; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSortContentTemplate = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};

class SortContent extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSortContentTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
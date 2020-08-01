'use strict';
const CARDS_NUMBER = 5;
const EXTRA_CARDS_NUMBER = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const createUserLevelTemplate = () => (
  `<section class="header__profile profile">
            <p class="profile__rating">Movie Buff</p>
            <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>`);

const createMenuTemplate = () => `<nav class="main-navigation">
            <div class="main-navigation__items">
                <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
                <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
                <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
                <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
            </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>`;

const createSortingTemplate = () =>
  `
    <ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`;

const createFilmCardTemplate = () => `
        <article class="film-card">
            <h3 class="film-card__title">The Dance of Life</h3>
            <p class="film-card__rating">8.3</p>
            <p class="film-card__info">
                <span class="film-card__year">1929</span>
                <span class="film-card__duration">1h 55m</span>
                <span class="film-card__genre">Musical</span>
            </p>
            <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
            <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
            <a class="film-card__comments">5 comments</a>
            <form class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>
        </article>`;

const createFilmListContainerTemplate = () => `
        <div class="films-list__container"></div>`;

const createFilmsSectionContainerTemplate = () => `
        <section class="films">
            <section class="films-list">
                <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
            </section>
        </section>`;

const createFilmListExtraContainerTemplate = () => `
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>`;

const createShowMoreButtonTemplate = () => `
        <button class="films-list__show-more">Show more</button>`;

const createFooterStatisticsTemplate = () => `
    <p>130 291 movies inside</p>`;


// render user`s level
const headerElement = document.querySelector(`.header`);
render(headerElement, createUserLevelTemplate(), `beforeend`);


// render main navigation
const mainElement = document.querySelector(`.main`);
render(mainElement, createMenuTemplate(), `afterbegin`);

// render sorting
const navigationElement = mainElement.querySelector(`.main-navigation`);
render(navigationElement, createSortingTemplate(), `afterend`);

// render films section container
render(mainElement, createFilmsSectionContainerTemplate(), `beforeend`);

// render film cards container
const sectionFilmsElement = mainElement.querySelector(`.films-list`);
render(sectionFilmsElement, createFilmListContainerTemplate(), `beforeend`);

// render film card
let filmListContainerElement = mainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_NUMBER; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

// render show more btn

render(filmListContainerElement, createShowMoreButtonTemplate(), `afterend`);

// render extra film cards container
const filmsContainerElement = mainElement.querySelector(`.films`);
render(filmsContainerElement, createFilmListExtraContainerTemplate(), `beforeend`);

// render cards container to extra films container
const filmListExtraContainerElement = filmsContainerElement.querySelector(`.films-list--extra`);
render(filmListExtraContainerElement, createFilmListContainerTemplate(), `beforeend`);

// render cards ro container
filmListContainerElement = filmListExtraContainerElement.querySelector(`.films-list__container`);
for (let i = 0; i < EXTRA_CARDS_NUMBER; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}


// render second extra cards container
const firstExtraCardsContainer = filmsContainerElement.querySelector(`.films-list--extra`);
render(firstExtraCardsContainer, createFilmListExtraContainerTemplate(), `afterend`);

// render container for cards in second extra container
const filmListExtraSecondContainerElement = document.querySelector(`.films-list--extra:nth-child(3)`);
render(filmListExtraSecondContainerElement, createFilmListContainerTemplate(), `beforeend`);

filmListContainerElement = filmListExtraSecondContainerElement.querySelector(`.films-list__container`);
for (let i = 0; i < EXTRA_CARDS_NUMBER; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

// render number of films
const footerStatisticsElement = document.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatisticsTemplate(), `beforeend`);

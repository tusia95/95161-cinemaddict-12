import {createUserLevelTemplate} from "../src/view/user-level";
import {createSortingTemplate} from "../src/view/sort";
import {createFilmsSectionContainerTemplate} from "../src/view/films-section-container";
import {createMenuTemplate} from "../src/view/menu";
import {createFilmsListContainerTemplate} from "../src/view/films-list-container";
import {createFilmCardTemplate} from "../src/view/film-card";
import {createShowMoreButtonTemplate} from "../src/view/show-more-button";
import {createFilmsListExtraContainerTemplate} from "../src/view/films-list-extra-container";
import {createFooterStatisticsTemplate} from "../src/view/footer-statistics";


const CARDS_NUMBER = 5;
const EXTRA_CARDS_NUMBER = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

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
render(sectionFilmsElement, createFilmsListContainerTemplate(), `beforeend`);

// render film card
let filmListContainerElement = mainElement.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_NUMBER; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

// render show more btn

render(filmListContainerElement, createShowMoreButtonTemplate(), `afterend`);

// render extra film cards container
const filmsContainerElement = mainElement.querySelector(`.films`);
render(filmsContainerElement, createFilmsListExtraContainerTemplate(), `beforeend`);

// render cards container to extra films container
const filmListExtraContainerElement = filmsContainerElement.querySelector(`.films-list--extra`);
render(filmListExtraContainerElement, createFilmsListContainerTemplate(), `beforeend`);

// render cards ro container
filmListContainerElement = filmListExtraContainerElement.querySelector(`.films-list__container`);
for (let i = 0; i < EXTRA_CARDS_NUMBER; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}


// render second extra cards container
const firstExtraCardsContainer = filmsContainerElement.querySelector(`.films-list--extra`);
render(firstExtraCardsContainer, createFilmsListExtraContainerTemplate(), `afterend`);

// render container for cards in second extra container
const filmListExtraSecondContainerElement = document.querySelector(`.films-list--extra:nth-child(3)`);
render(filmListExtraSecondContainerElement, createFilmsListContainerTemplate(), `beforeend`);

filmListContainerElement = filmListExtraSecondContainerElement.querySelector(`.films-list__container`);
for (let i = 0; i < EXTRA_CARDS_NUMBER; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

// render number of films
const footerStatisticsElement = document.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatisticsTemplate(), `beforeend`);

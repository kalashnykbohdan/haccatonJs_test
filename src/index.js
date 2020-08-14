'use strict';

import './sass/styles.css';
import './sass/styles.scss';
import './js/globalVar.js'

import HomePage from './js/pages/HomePage/HomePage.js';
import DetailsPage from './js/pages/DetailsPage/DetailsPage.js';
import MyFilmLibraryPage from './js/pages/MyFilmLibraryPage/MyFilmLibraryPage.js';

import InitialHomePage from './js/components/1InitialHomePage.js'; 
import searchAndPlaginationHome from './js/components/2searchAndPlaginationHomePage.js'; 
import navigation from './js/components/3navigation.js'; 
import filmDetailsPage from './js/components/4filmDetailsPage.js'; 
import libraryPage from './js/components/5libraryPage.js'; 

console.log(location.pathname);

function getCurrentPath() {
  return location.pathname;
}

function getCurrentPathId() {
  return location.search;
}

function init() {
  const root = document.getElementById('root');
  const path = getCurrentPath();
  const pathWithId = getCurrentPathId();
  // console.log(location.pathname);
  switch (path) {
    case '/': {
        HomePage(root);
        // InitialHomePage();
        
        InitialHomePage();
        // console.log(`InitialHomePage`);
        searchAndPlaginationHome();

        console.log(`HomePage`);
        console.log(root);
        break;
    }
    case '/details': {
        DetailsPage(root);
        let searchParams = new URLSearchParams(pathWithId);
        
        const moveId = searchParams.get("filmId");
        console.log(moveId);

        navigation(moveId);
        filmDetailsPage(moveId);
        break;
    }
    case '/library': {
        MyFilmLibraryPage(root);

        console.log(`library`);
        console.log(root);
        libraryPage();

        break;
    }
    default: {
      break;
    }
  }
}


init();

//почему не работает SVG
//почему глобальные пременные не правильно записываются 
//ошибка слушателя в 4filmDetailsPage
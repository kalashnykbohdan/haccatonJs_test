'use strict';

import fetchRequest from '../fetchRequest.js'
import searchAndPlaginationHomePage from './2searchAndPlaginationHomePage.js';


const fragment = document.createDocumentFragment();

export default function renderPopularMovies(){
    const list = document.querySelector('.cards__container');
    
    fetchRequest.fetchPopularMoviesList()
        .then(films => {
          films.map(film => {
            renderFilms.push(film);
            createCardFunc(film);
            fragment.append(createCardFunc(film));
          });
          list.innerHTML = '';
          list.append(fragment);  
        });
    //     
    // fetchRequest.fetchGenres();
    
    const prevMoreBth = document.querySelector('button[data-action="prev_page"]');
    const nextPageBth = document.querySelector('button[data-action="next-page"]');
    prevMoreBth.addEventListener('click',prevPageBthHandler);
    nextPageBth.addEventListener('click',nextPageBthHandler);

  }

    function createCardFunc({ backdrop_path, title, id, vote_average }) {

      const list = document.querySelector('.cards__container');
    
      const a = document.createElement('a');
      a.href= `/details?filmId=${id}`;
      // console.log(a.href);
    
      const li = document.createElement('li');
      li.className = 'card__container';
    
      const divMark = document.createElement('div');
      divMark.className = 'card__mark';
      divMark.innerHTML = vote_average!==0?vote_average:'--';
    
      const divTitle = document.createElement('div');
      divTitle.className = 'card__title';
      divTitle.innerHTML = title;
    
      const img = document.createElement('img');
      img.className = 'card__img';
      let imgSrc = backdrop_path!==null?`https://image.tmdb.org/t/p/w500/${backdrop_path}`:"https://image.tmdb.org/t/p/w500//gkuyOdCeuKLdOlwQIUF44SHsYCq.jpg";
      img.setAttribute('src', imgSrc);
      img.setAttribute('alt', title);
    
    
      li.append(divMark, divTitle, img);
      a.append(li);
    
      list.appendChild(a);
    
      // li.addEventListener('click', () => activeDetailsPage(id, false));
    
      return a;
    
    

}

function prevPageBthHandler(){

  fetchRequest.decrementPage();
  console.log(inputValue);
  if(inputValue != ''){

    searchAndPlaginationHomePage();

  }else{
    requestPopularMovies();
  }
  

  if(fetchRequest.page < 2){
    const paginBtn = document.querySelector('.js-prevBtn');
    paginBtn.classList.add('prevBtn');
  }
}

function nextPageBthHandler(){
  // console.log(fetchRequest.page);
  fetchRequest.incrementPage();
  if(inputValue != ''){
    
    searchAndPlaginationHomePage();

  }else{
    requestPopularMovies();
  }
  // console.log(fetchRequest.page);
  // requestPopularMovies();
  // console.log(fetchRequest.page);

  if(fetchRequest.page > 1){
    const paginBtn = document.querySelector('.js-prevBtn');
    paginBtn.classList.remove('prevBtn');
  }
  console.log(fetchRequest.page);
}

  function writePosition(position){
    console.log(fetchRequest.page);
    const list = document.querySelector('.positionPagin');
    const span = document.createElement('span');
    span.innerHTML = position;
 
    list.innerHTML = '';
    list.appendChild(span);
  }

function requestPopularMovies(){
  const list = document.querySelector('.cards__container');
    
  fetchRequest.fetchPopularMoviesList()
      .then(films => {
        films.map(film => {
          renderFilms.push(film);
          createCardFunc(film);
          // console.log(film);
          fragment.append(createCardFunc(film));
        });
        list.innerHTML = '';
        list.append(fragment);  
      });

      let position = fetchRequest.page;
            writePosition(position);
  //     
  fetchRequest.fetchGenres();
}



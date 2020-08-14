'use strict';

// let renderFilms = [];

// import cardFilmsList from '../../templates/cardFilmsList.hbs'
import fetchRequest from '../fetchRequest.js'


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
    fetchRequest.fetchGenres();

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



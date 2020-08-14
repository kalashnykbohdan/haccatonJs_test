
import cardFilmsList from '../../templates/cardFilmsList.hbs'
import fetchRequest from '../fetchRequest.js'

export default function (){
    eventsHandlers();
}

function eventsHandlers(){
    const searchQuery = document.querySelector('#search-form');
    searchQuery.addEventListener('submit',searchFormImg);

    const loadMoreBth = document.querySelector('button[data-action="load-more"]');
    loadMoreBth.addEventListener('click',loadMoreBtnHandler);
    
    // const pageNumber = document.querySelector(`.current-page`);
    // pageNumber.addEventListener('click',);

    // const nextBtn = document.querySelector(`.btn-next`);
    // nextBtn.addEventListener('click', );

    // const prevBtn = document.querySelector(`.btn-prev`);
    // prevBtn.addEventListener('click',);
    
}
//--------------------------------------------------------------

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


function searchFormImg(e){
    e.preventDefault();

    const inputValue = e.currentTarget.elements.query.value;
    console.log(inputValue);
    clearList();
    fetchRequest.resetPage();
    fetchRequest.searchQuery = inputValue;

    fetchRequest.fetchFilms().then(console.log());
    // fetchRequest.fetchFilms().then(insertListIteams);
    const list = document.querySelector('.cards__container');
    const fragment = document.createDocumentFragment();

    fetchRequest.fetchFilms()
    .then(films => {
        // console.log(films);
        films.map(film => {
            renderFilms.push(film);
            createCardFunc(film);
            // console.log(film);
            fragment.append(createCardFunc(film));
        });
        list.innerHTML = '';
        list.append(fragment);  
    });
    
}


function loadMoreBtnHandler(){
    const list = document.querySelector('.cards__container');
    const fragment = document.createDocumentFragment();

    fetchRequest.fetchFilms()
    .then(films => {
        // console.log(films);
        films.map(film => {
            renderFilms.push(film);
            createCardFunc(film);
            // console.log(film);
            fragment.append(createCardFunc(film));
        });
        list.innerHTML = '';
        list.append(fragment);  
    });
}

// function insertListIteams(items){
//     const viewList = document.querySelector('#films-gallery');

//     const markup = cardFilmsList(items) 
//     viewList.insertAdjacentHTML('beforeend', markup);

// }

function clearList(){
    const viewList = document.querySelector('#films-gallery');
    
    viewList.innerHTML = '';
}


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




function searchFormImg(e){
    e.preventDefault();

    const inputValue = e.currentTarget.elements.query.value;
    console.log(inputValue);
    clearList();
    fetchRequest.resetPage();
    fetchRequest.searchQuery = inputValue;

    fetchRequest.fetchFilms().then(console.log());
    fetchRequest.fetchFilms().then(insertListIteams);
    
}


function loadMoreBtnHandler(){
    fetchRequest.fetchFilms().then(insertListIteams)
}

function insertListIteams(items){
    const viewList = document.querySelector('#films-gallery');

    const markup = cardFilmsList(items) 
    viewList.insertAdjacentHTML('beforeend', markup);

}

function clearList(){
    const viewList = document.querySelector('#films-gallery');
    
    viewList.innerHTML = '';
}

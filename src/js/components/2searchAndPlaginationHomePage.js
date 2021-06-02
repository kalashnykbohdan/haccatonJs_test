// 'use strict';

import { length } from 'file-loader';
import cardFilmsList from '../../templates/cardFilmsList.hbs'
import fetchRequest from '../fetchRequest.js'

import InitialHomePage from './1InitialHomePage.js'

export default function renderRequestMovies(){

    console.log("true");
    console.log(inputValue);

    const searchQuery = document.querySelector('#search-form');
    searchQuery.addEventListener('submit', searchFormImg);


    function searchFormImg(e){
        e.preventDefault();
    
        inputValue = e.currentTarget.elements.query.value;
 
        console.log(inputValue);
        // writePosition(fetchRequest.page);
        clearList();
        fetchRequest.resetPage();

        // if(inputValue != '' || inputValue != null || inputValue != undefined){
        //     console.log('searchFetchFilms12');
        //     searchhFetcFilms();
        // }
        if(inputValue == '' || inputValue == null || inputValue == undefined){
            console.log('inputValue empty');
            fetchRequest.resetPage();
            writePosition(fetchRequest.page);

            InitialHomePage();
        }
        else{
            searchFetchFilms();
        }

    }

    if(inputValue == '' || inputValue == null || inputValue == undefined){
        console.log('inputValue empty')
        fetchRequest.resetPage();
        writePosition(fetchRequest.page);
        
        InitialHomePage();
    }
    else{
        searchFetchFilms();
    }



    function searchFetchFilms() {
        console.log('searchFetchFilms');
        writePosition(fetchRequest.page);
        
        const list = document.querySelector('.cards__container');
        const fragment = document.createDocumentFragment();
        
        fetchRequest.fetchFilms().then(films => {
            
            films.map(film => {
    
    
                renderFilms.push(film);
                createCardFunc(film);
    
                fragment.append(createCardFunc(film));
            });
            
            list.innerHTML = '';
            list.append(fragment);
    
            
        });
    }
}

    function writePosition(position){
        // console.log(fetchRequest.page);
        const list = document.querySelector('.positionPagin');
        const span = document.createElement('span');
        span.innerHTML = position;
     
        list.innerHTML = '';
        list.appendChild(span);
      }

      function clearList(){
        const viewList = document.querySelector('#films-gallery');
        
        viewList.innerHTML = '';
    }

    function createCardFunc({ backdrop_path, title, id, vote_average }) {

        const list = document.querySelector('.cards__container');
      
        const a = document.createElement('a');
        a.href= `/details?filmId=${id}`;
              
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
    
      
        return a;
      }


//-----------------------------------------------------------


// export default{

//     searchQuery: document.querySelector('#search-form'),
//     temp: searchQuery.addEventListener('submit', searchFormImg),


//     searchFormImg(e){
//         e.preventDefault();
    
//         inputValue = e.currentTarget.elements.query.value;
//         // console.log('searchFormImg');
//         console.log(inputValue);
//         writePosition(fetchRequest.page);
//         clearList();
//         fetchRequest.resetPage();
//         // fetchRequest.searchQuery = inputValue;
//         searchFetchFilms();

//     },

//     // if(inputValue != ''){
//     //     searchFetchFilms();
//     //     console.log('searchFetchFilms();');
//     // }
//     // else{console.log('-_-');}

//     searchFetchFilms() {

//         // console.log('searchFetchFilmsIn')
//         const list = document.querySelector('.cards__container');
//         const fragment = document.createDocumentFragment();
        
//         fetchRequest.fetchFilms().then(films => {
            
//             films.map(film => {
    
    
//                 renderFilms.push(film);
//                 createCardFunc(film);
    
//                 fragment.append(createCardFunc(film));
//             });
//             // console.log(renderFilms);
//             list.innerHTML = '';
//             list.append(fragment);
    
            
//         });
//     },

//     writePosition(position){
//         console.log(fetchRequest.page);
//         const list = document.querySelector('.positionPagin');
//         const span = document.createElement('span');
//         span.innerHTML = position;
     
//         list.innerHTML = '';
//         list.appendChild(span);
//       },

//     clearList(){
//         const viewList = document.querySelector('#films-gallery');
        
//         viewList.innerHTML = '';
//     },

//     createCardFunc({ backdrop_path, title, id, vote_average }) {

//         const list = document.querySelector('.cards__container');
      
//         const a = document.createElement('a');
//         a.href= `/details?filmId=${id}`;
//         // console.log(a.href);
      
//         const li = document.createElement('li');
//         li.className = 'card__container';
      
//         const divMark = document.createElement('div');
//         divMark.className = 'card__mark';
//         divMark.innerHTML = vote_average!==0?vote_average:'--';
      
//         const divTitle = document.createElement('div');
//         divTitle.className = 'card__title';
//         divTitle.innerHTML = title;
      
//         const img = document.createElement('img');
//         img.className = 'card__img';
//         let imgSrc = backdrop_path!==null?`https://image.tmdb.org/t/p/w500/${backdrop_path}`:"https://image.tmdb.org/t/p/w500//gkuyOdCeuKLdOlwQIUF44SHsYCq.jpg";
//         img.setAttribute('src', imgSrc);
//         img.setAttribute('alt', title);
      
      
//         li.append(divMark, divTitle, img);
//         a.append(li);
      
//         list.appendChild(a);
    
      
//         return a;
//       }
// }


import fetchRequest from '../fetchRequest.js'

const refs = {
    myLibHome: document.querySelector('#mylib-home'),
    myLibListItem: document.querySelector('.home__list-item'),

    watchedButton: document.querySelector('#watched-button'),
    queueButton: document.querySelector('#queue-button'),
  };



  export default function (){
    swichmyListLibrary();
    queueBtnHandler();
  }

  function swichmyListLibrary()
  {

    console.log(`swichmyListLibrary`);

    // const watchedButton = document.querySelector('button[data-action="queue-button"]');
    const watchedButton = document.querySelector('#watched-button');
    watchedButton.addEventListener('click',watchedBtnHandler);

    // const queueButton = document.querySelector('button[data-action="queue-button"]');
    const queueButton = document.querySelector('#queue-button');
    queueButton.addEventListener('click',queueBtnHandler);

  }

  function queueBtnHandler(){
    console.log(`queueBtnHandler`);
    drawQueueFilmList();
  }

  function watchedBtnHandler(){
    console.log(`watchedBtnHandler`);
    drawWatchedFilmList();
  }
  

  function createLibraryCardFunc({ backdrop_path, title, id, vote_average }) {

    const myLibHome = document.querySelector('#mylib-home');
  
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
  
    myLibHome.appendChild(a);
  
    // li.addEventListener('click', () => activeDetailsPage(id, false));
  
    return a;
  }
  // imgPath, filmTitle, movieId, voteAverage
  // function createLibraryCardFunc({ backdrop_path, title, id, vote_average }) {
  //   const myLibHome = document.querySelector('#mylib-home');

  //   const libListItemMarkup = `<li class="home__list-item" data-index="${id}">
  //     <div>
  //       <div class="home__list-rate">
  //         <p>${vote_average}</p>
  //       </div>
  //       <div class="home__list-header"><h2>${title}</h2></div>
  //     </div>
  //     <img class="home__list-img" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" />
  //   </li>`;
  //   myLibHome.insertAdjacentHTML('beforeend', libListItemMarkup);
  //   // refs.myLibListItem.addEventListener('click', () =>
  //   //   activeDetailsPage(movieId, true),
  //   // );
  // }


//   function renderWatchedFilms() {
//     refs.watchedButton.addEventListener('click', drawWatchedFilmList());
//   }
  
  function drawQueueFilmList() {
    const watchedButton = document.querySelector('#watched-button');
    const queueButton = document.querySelector('#queue-button');
    const myLibHome = document.querySelector('#mylib-home');
    const myLibListItem = document.querySelector('.home__list-item');

    watchedButton.classList.remove('active-nav-button');
    queueButton.classList.add('active-nav-button');
    const fromLocalStorage = JSON.parse(localStorage.getItem('filmsQueue'));
    console.log(fromLocalStorage);
  
    if (fromLocalStorage === null || fromLocalStorage.length === 0) {
      myLibHome.innerHTML = '';
      return myLibHome.insertAdjacentHTML(
        'beforeend',
        `<div class="no-list">
            <h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>
              </div>`,
      );
    } else {
      const markup = fromLocalStorage
        .map(result =>  {
            // createLibraryCardFunc(result)
            fetchRequest.fetchMovieDetails(result).then(createLibraryCardFunc);
            console.log(result);
        })
        .join('');
      myLibHome.innerHTML = '';
      myLibHome.insertAdjacentHTML('beforeend', markup);
    }
  }
  function drawWatchedFilmList() {
    const watchedButton = document.querySelector('#watched-button');
    const queueButton = document.querySelector('#queue-button');
    const myLibHome = document.querySelector('#mylib-home');
    const myLibListItem = document.querySelector('.home__list-item');

    queueButton.classList.remove('active-nav-button');
    watchedButton.classList.add('active-nav-button');
    const fromLocalStorage = JSON.parse(localStorage.getItem('filmsWatched'));
    if (fromLocalStorage === null || fromLocalStorage.length === 0) {
      myLibHome.innerHTML = '';
      return myLibHome.insertAdjacentHTML(
        'beforeend',
        `<div class="no-list"
            <h2 class="no-list__item">You do not have watched movies. Add them.</h2>
              </div>`,
      );
    } else {
      const markup = fromLocalStorage
        .map(result =>  {
            // createLibraryCardFunc(result)
            fetchRequest.fetchMovieDetails(result).then(createLibraryCardFunc);
            console.log(result);
        })
        .join('');
      myLibHome.innerHTML = '';
      myLibHome.insertAdjacentHTML('beforeend', markup);
    }
  }

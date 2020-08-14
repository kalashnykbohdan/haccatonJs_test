// // import './css/normalise.css';
// // import './css/reset.css';
// // import './css/fonts.css';
// // import './css/container.css';
// // import './css/styles.css';
// import axios from 'axios';
// import markupTemplate from '../../templates/4filmDetailsPage.hbs';



// //==================axios==============
// // let selectFilm = {};
// export default {}

const changingWidthPicture = () => {
  if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
    return 'https://image.tmdb.org/t/p/w400';
  } else if (window.innerWidth >= 1024) {
    return 'https://image.tmdb.org/t/p/w500';
  } else {
    return 'https://image.tmdb.org/t/p/w300';
  }
};

// const baseUrl = 'https://api.themoviedb.org/3';
// const key = '73eedadfa9d08313f35d1c4a24565e4a';
// axios
//   .get(`${baseUrl}/movie/475557?api_key=${key}&language=en-US`)
//   .then(({ data }) => {
//     Object.assign(selectFilm, data);
//     selectFilm.release_date = selectFilm.release_date.slice(0, 4);
//     selectFilm.genres = selectFilm.genres.map(d => d.name.toLowerCase());
//     selectFilm.changingWidthPicture = changingWidthPicture();
//     const movie = bildMarkup(selectFilm);
//     insertMarkup(movie);
//     // console.log(typeof selectFilm.id);
//   });


import fetchRequest from '../fetchRequest.js'
import markupTemplate from '../../templates/4filmDetailsPage.hbs';
// import filmDetailsPage from '../components/4filmDetailsPage.js';




export default function (moveId){
    
    
    // console.log(genres);
    // maketView();
    setSelectFilm(moveId);
    
    window.onload = function () {
        monitorButtonStatusText();
        const button_watched = document.querySelector('#button_watched');
        button_watched.addEventListener('click', toggleToWatched);
      
        const button_queue = document.querySelector('#button_queue');
        button_queue.addEventListener('click', toggleToQueue);
      };
      
      const monitorButtonStatusText = () => {
        const button_watched = document.querySelector('#button_watched');
        const button_queue = document.querySelector('#button_queue');
      
        const watchedFilms = JSON.parse(localStorage.getItem('filmsWatched')) || [];
        const queueFilms = JSON.parse(localStorage.getItem('filmsQueue')) || [];
      
        const filterWatchedFIlms = watchedFilms.includes(selectFilm.id);
        const filteredQueUeFilms = queueFilms.includes(selectFilm.id);
      
        if (filterWatchedFIlms) {
          button_watched.textContent = 'Remove from viewed';
          button_watched.classList.remove('detailPage_video_on');
          button_watched.classList.add('detailPage_video_off');
        } else {
          button_watched.textContent = 'Add to viewed';
          button_watched.classList.remove('detailPage_video_off');
          button_watched.classList.add('detailPage_video_on');
        }
      
        if (filteredQueUeFilms) {
          button_queue.textContent = 'Remove from queue';
          button_queue.classList.remove('detailPage_calendar_plus');
          button_queue.classList.add('detailPage_calendar_minus');
        } else {
          button_queue.textContent = 'Add to queue';
          button_queue.classList.remove('detailPage_calendar_minus');
          button_queue.classList.add('detailPage_calendar_plus');
        }
      };
      
      const toggleToWatched = () => {
        let watchedFilms = JSON.parse(localStorage.getItem('filmsWatched')) || [];
        const filteredWatchedFilms = watchedFilms.includes(selectFilm.id)
          ? watchedFilms.filter(filmId => filmId !== selectFilm.id)
          : [...watchedFilms, selectFilm.id];
        localStorage.setItem('filmsWatched', JSON.stringify(filteredWatchedFilms));
        monitorButtonStatusText();
      };
      
      const toggleToQueue = () => {
        let queueFilms = JSON.parse(localStorage.getItem('filmsQueue')) || [];
        const filteredQueUeFilms = queueFilms.includes(selectFilm.id)
          ? queueFilms.filter(filmId => filmId !== selectFilm.id)
          : [...queueFilms, selectFilm.id];
        localStorage.setItem('filmsQueue', JSON.stringify(filteredQueUeFilms));
        monitorButtonStatusText();
      };

      
}
//==============================================================================
function setSelectFilm(moveId){
    console.log(`setSelectFilm`);
    // fetchRequest.fetchMovieDetails(moveId).then(date => {
    //     Object.assign(selectFilm, date)
    //     maketView(selectFilm);
    // });
    // maketView(selectFilm);
    
    
    fetchRequest.fetchMovieDetails(moveId).then(maketView);
    maketView(selectFilm);
    
    // insertDetailsPage(movie)
}

  function maketView(selectFilmLocal){
        
        // selectFilm.changingWidthPicture = changingWidthPicture();
        const movie = bildDetailsPage(selectFilmLocal);
        insertDetailsPage(movie);
    }

function insertDetailsPage(markup) {
    const refs = {
        div: document.querySelector('#detailsPage'),
      };
  refs.div.innerHTML = markup;
}



function bildDetailsPage(items) {
    console.log(`bildDetailsPage`);
    console.log(items);
    console.log(genres);
  return markupTemplate(items);
}
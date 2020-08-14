    import fetchRequest from '../fetchRequest.js'
    // import markupTemplate from '../../templates/4filmDetailsPage.hbs';
    // import filmDetailsPage from '../components/4filmDetailsPage.js';


    export default function (moveId){
        
        setSelectFilm(moveId);
        
    }

    function setSelectFilm(moveId){
   
        fetchRequest.fetchMovieDetails(moveId).then(data => Object.assign(selectFilm, data));
        fetchRequest.fetchGenres(data => data.map(gen => genres.push(gen)));

        console.log(selectFilm);
    }

 


      
      
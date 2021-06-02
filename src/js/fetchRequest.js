// import globalVariables from './globalVariables.js';

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '60413e4c0935df0adbee558138220381';

export default{
  page:1,
  // query: '',

  fetchPopularMoviesList() {
    // const fragment = document.createDocumentFragment();
    return fetch(
      `${baseURL}movie/popular?api_key=${apiKey}&language=en-US&page=${this.page}`,
    )
      .then(res => res.json())
      .then(data => data.results)
      .then(results => 
        {
          // console.log(results);

          return results;
        }
      );
  },
  
  fetchGenres() {
    return fetch(
      `${baseURL}genre/movie/list?api_key=${apiKey}&language=en-US`,
    )
      .then(res => res.json())
      .then(data => data.genres)
      .then(results => {
        results.map(film => {
          genres.push(film);
        });
      });
  },
  // fetchGenres() {
  //   return fetch(
  //     `https://api.themoviedb.org/3/genre/movie/list?api_key=60413e4c0935df0adbee558138220381&language=en-US`,
  //   )
  //     .then(res => res.json())
  //     .then(data => data.genres)
  //     .then(results => { return results
  //     });
  // },

  // fetch на фильмы по запросу----------------------------------


  fetchFilms(){
    
    return fetch(`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}&page=${this.page}&include_adult=false`)
            .then(response => response.json())
            .then(data => {
              // this.incrementPage();
              // console.log(data)
              // console.log('fetchFilms');
              console.log(data.results);
              return data.results;


    });
  },
  // get searchQuery(){
  //   return this.query;
  // },
  // set searchQuery(string){
  //   this.query = string;
  // },
  incrementPage(){
    this.page += 1;
  },
  decrementPage(){
    this.page -= 1;
  },
  resetPage(){
    this.page = 1;
  },

  // fetch на фильмы по Id
  // fetchMovieDetails(movieId){
  //   return fetch(`${baseURL}movie/${movieId}?api_key=${apiKey}`).then(response => {
  //     return response.json();
  //   }).then(data => { 

  //     return data;
  //   })
  // },
  async fetchMovieDetails(movieId){

    const response = await fetch(`${baseURL}movie/${movieId}?api_key=${apiKey}`);
    const data = response.json();

    // const selectFilm = await data.then(data => {
      
    //   return data; 
    // });
    
    console.log(selectFilm);
    return data;

  },
  
}

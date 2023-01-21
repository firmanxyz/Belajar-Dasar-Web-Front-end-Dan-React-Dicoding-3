class SearchMovie {
    static searchMovie(keyword) {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=793e7cdb60b67b501adf8a2412e5fec0=${keyword}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.movie) {
              return Promise.resolve(responseJson.movie);
            } else {
              return Promise.reject(`${keyword} is not found`);
            }
          });
    }
  }
   
  export default SearchMovie;
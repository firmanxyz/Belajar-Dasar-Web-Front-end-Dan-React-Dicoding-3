import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./style/style.css"

//OnLoad
      //Movie
      fetch('https://api.themoviedb.org/3/api_key=793e7cdb60b67b501adf8a2412e5fec0&language=en-US&page=1')
       .then(
         function(response) {
           if(response.status != 200){
              console.log('error maaf' + response.status)
              return
           }

           response.json().then(function(data) {
             console.log(data)
             const movies = data.results
             movies.forEach(movie => {
               document.getElementById('titleMovie')
               .innerHTML += `
               <article class="card-konten">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="" width="100" class="img-konten">
                <article class="konten">
                <h2>${movie.original_title}</h2>
                <span>Rating : ${movie.vote_average}</span><br>
                <span>Release Date : ${movie.release_date}</span>
                <p>${movie.overview}</p>
                </article>
              </article>
              <hr>
               `
               
             })

           })   
         }
       )
       .catch(function(err){
        console.log(err)
      })

      //Movie Populer
       fetch('https://api.themoviedb.org/3/movie/popular?api_key=793e7cdb60b67b501adf8a2412e5fec0&language=en-US&page=1')
         .then(
           function(response){
             if (response.status != 200){
               console.log("error maaf" + response.status)
               return
             }
             response.json().then(function(data) {
               console.log(data)
                  const movies = data.results
                  movies.forEach(movie => {
                  document.getElementById('populerMovie')
                  .innerHTML += `
                  
                  <article class="card-konten-populer">
                  <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="" width="100" class="img-konten">
                  <article class="konten-populer">
                  <h3>${movie.original_title}</h3>
                  <span>Rating : ${movie.vote_average}</span><br>
                  <span>Release Date : ${movie.release_date}</span>
                   </article>
                   </article>
                 <hr>
                 `
                })
              })
            }
            )
            .catch(function(err){
         console.log(err)
       })
       
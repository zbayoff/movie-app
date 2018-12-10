


// const searchTitle = 'SAW';

// const searchMovieInput = document.querySelector('#search-movie-input-js');
// const searchMovieBtn = document.querySelector('#search-movie-btn-js');

// const searchResultsContainer = document.querySelector('#search-results-container-js');
// const myMoviesContainer = document.querySelector('#my-movies-container-js');

// function searchOMDB() {

//     searchResultsContainer.innerHTML = '';

//     const payload = JSON.stringify({
//         text: searchMovieInput.value
//     });

//     fetch("/searchMovies", {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: payload
//     }).then((response) => {
//         // console.log(response);
//         return response.json();
//     }).then(movieResponse => {

//         if (movieResponse && movieResponse["Response"] !== "False") {
//             let markup = movieResponse["Search"].map((movie) => {
//                 console.log(movie);
//                 return `
//                     <p>${movie.Title}</p>
//                     <img src=${movie.Poster}>
//                 `;
//             }).join('');
//             searchResultsContainer.innerHTML += markup;
//         } else {
//             searchResultsContainer.innerHTML = `<p>${movieResponse["Error"]}</p>`;
//         }
//     })

// }

// function getMovies() {
//     myMoviesContainer.innerHTML = '';

//     fetch("/movie", {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "GET"
//     }).then(function(response) {
//         // console.log(response.json());
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//       }).catch((err) => {
//         console.log(err);
//       })
//     // .then(movies => {
//     //     console.log(movies);
//     // })
// }

// searchMovieBtn.addEventListener('click', searchOMDB);

// getMovies();
const searchTitle = 'SAW';

const searchMovieInput = document.querySelector('#search-movie-input-js');
const searchMovieBtn = document.querySelector('#search-movie-btn-js');

const searchResultsContainer = document.querySelector('#search-results-container-js');

let movieResults;

function searchOMDB() {

    searchResultsContainer.innerHTML = '';

    // Send text to server.
    const payload = JSON.stringify({
        text: searchMovieInput.value
    });
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/searchMovies');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {

        movieResults = JSON.parse(xhr.responseText);
        console.log(movieResults);

        // console.log(movieResults);
        if (movieResults && movieResults["Response"] !== "False") {
            let markup = movieResults["Search"].map((movie) => {
                console.log(movie);
                return `
                    <p>${movie.Title}</p>
                    <img src=${movie.Poster}>
                `;
            }).join('');
            console.log(movieResults);
            searchResultsContainer.innerHTML += markup;
        } else {
            searchResultsContainer.innerHTML = `<p>${movieResults["Error"]}</p>`;
        }
        
    };
    xhr.send(payload);
}

searchMovieBtn.addEventListener('click', searchOMDB);
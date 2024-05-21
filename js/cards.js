const api_consult = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET', 
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
        
    }
};

async function fetchData() {
    try {
        const responseTrend = await fetch(`${api_consult}/movie/popular?language=es-ES&page=1`, options);
        const responseTopRated = await fetch(`${api_consult}/movie/top_rated`, options);
        const dataTrend  = await responseTrend.json();
        const dataRated = await responseTopRated.json();
        displayMoviesTrend(dataTrend.results);
        displayMoviesTopRated(dataRated.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const movieContainer = document.getElementById('movies');
function displayMoviesTrend(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieLink = document.createElement('a');
        movieLink.href = '#';

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('pelicula');

        const movieImage = document.createElement('img');
        movieImage.classList.add('imgTendencia');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;
        movieImage.loading = 'lazy';

        const movieTitleDiv = document.createElement('div');
        movieTitleDiv.classList.add('tituloPelicula');

        const movieTitle = document.createElement('h4');
        movieTitle.textContent = movie.title;

        movieTitleDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieImage);
        movieDiv.appendChild(movieTitleDiv);
        movieLink.appendChild(movieDiv);

        movieContainer.appendChild(movieLink);
    });
}

const carrouselContainer = document.getElementById('top_rated');
function displayMoviesTopRated(movies) {
    carrouselContainer.innerHTML = ''; 
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('peliculaItem');

        const movieImage = document.createElement('img');
        movieImage.classList.add('imgAclamada');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;
        movieImage.loading = 'lazy';

        const movieTitleDiv = document.createElement('div');
        movieTitleDiv.classList.add('tituloPelicula');

        const movieTitle = document.createElement('h4');
        movieTitle.textContent = movie.title;

        movieDiv.appendChild(movieImage);
        carrouselContainer.appendChild(movieDiv);
    });
}

fetchData();

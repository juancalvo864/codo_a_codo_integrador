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
    let movieHtml = '';
    movies.forEach(movie => {
        movieHtml +=
        `<a href="#">
        <div class="pelicula">
            <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy">
            <div class="tituloPelicula">
                <h4>${movie.title}</h4>
            </div>
        </div>
        </a>
    `;
    });
    movieContainer.innerHTML = movieHtml;
}


const carrouselContainer = document.getElementById('top_rated');
function displayMoviesTopRated(movies) {
    movieContainer.innerHTML = '';
    let movieHtml = '';
    movies.forEach(movie => {
        movieHtml +=
        `<a href="#">
        <div class="pelicula">
            <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy">
            <div class="tituloPelicula">
                <h4>${movie.title}</h4>
            </div>
        </div>
        </a>
    `;
    });
    movieContainer.innerHTML = movieHtml;
};

fetchData();

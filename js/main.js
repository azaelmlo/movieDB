
const API_URL = 'https://api.themoviedb.org/3/';

const contentTendencias = document.getElementById('contentTendencias');
const template = document.getElementById('templateTendencias').content;
const fragmento = document.createDocumentFragment();


async function getTrendingMoviesPreview() {
    const res = await fetch(API_URL + 'trending/all/day', {
        headers: {
          Authorization: 'Bearer ' + ACCESS_TOKEN,
          accept: 'application/json'
        },
      });
    const data = await res.json();

    const movies = data.results;
    console.log(movies);

    movies.forEach( movie => {
        template.querySelector('p').innerHTML = movie.title;
        template.querySelector('.tendenciasMovie img').src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
        template.querySelector('.tendenciasMovie img').alt = movie.title;
        const clone = template.cloneNode(true);
        fragmento.appendChild(clone);
    });

    contentTendencias.appendChild(fragmento);

}

getTrendingMoviesPreview();
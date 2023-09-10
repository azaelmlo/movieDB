// inicio de axios 
// inicio de axios 

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: { 
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});


// U t i l e s
// U t i l e s 
// U t i l e s 

// asignando clase al body 
const setClass = (className) => {
  if (!bodyPage.hasAttribute('class')) {
    bodyPage.classList.add(className);
  } else {
    const classes = bodyPage.getAttribute('class').split(' ');
    var extrasPageClass = classes.filter(classType => classType.startsWith('page')); 
    if (extrasPageClass.length === 0) {
        bodyPage.classList.add(className);
    } else {
        extrasPageClass.forEach(claseExtra => {
        bodyPage.classList.remove(claseExtra);
        });
        bodyPage.classList.add(className);
    }
  }
}

// limpieza 
const limpiarPara = (seccion) => {
    if (seccion == 'trends') { 
    contentBienvenido.innerHTML = '';
    contentDetailsUnaPeli.innerHTML = '';
    } else if (seccion == 'category') {
    contentTendencias.innerHTML = '';
    contentBienvenido.innerHTML = '';
    contentBusqueda.innerHTML = '';
    contentDetailsUnaPeli.innerHTML = '';
    } else if (seccion == 'search') {
      contentTendencias.innerHTML = '';
      contentBienvenido.innerHTML = ''; 
      contentDetailsUnaPeli.innerHTML = '';
    } else if (seccion == 'home') { 
    contentPeliculasUnaCat.innerHTML = '';
    contentBusqueda.innerHTML = '';
    contentDetailsUnaPeli.innerHTML = '';
    } else if (seccion == 'movieDetails') { 
      contentPeliculasUnaCat.innerHTML = '';
      contentBusqueda.innerHTML = '';
      contentBienvenido.innerHTML = '';
      contentTendencias.innerHTML = '';
    }
}

// asignacion de titulos nivel dos 
const asignarTituloNivelDos = (titNivDos, contentDeTit) => {

    if (contentDeTit.querySelector('h2') == null) { 
      const clone = templateTitDos.cloneNode(true);
      clone.querySelector('h2').innerHTML = titNivDos;
      contentDeTit.prepend(clone);
    } else {
      console.log('ya hay titulo');
    }
    
  }

  // asignacion de titulos nivel tres
const asignarTituloNivelTres = (titNivTres, contentDeTitTres) => {

    if (contentDeTitTres.querySelector('h3') == null) { 
      const clone = templateTitTres.cloneNode(true);
      clone.querySelector('h3').innerHTML = titNivTres;
      contentDeTitTres.prepend(clone);
    } else {
      console.log('ya hay titulo 3');
    }
    
  }

  // cuando tienes varias pelis 
const variasPelis = (movies, template, fragmento) => {
    fragmento.innerHTML = '';
      movies.forEach( movie => {
            template.querySelector('p').innerHTML = movie.title;
           

            if (movie.poster_path) {
              template.querySelector('img').src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
              template.querySelector('img').alt = movie.title;
            }
            const clone = template.cloneNode(true);

              clone.querySelector('div').onclick = () => { 
              location.hash = '#movie=' + movie.id;
              console.log('hola clic');
             };

            fragmento.appendChild(clone);
        });

    }

// armando lista de categorias

const creaListaDeCategorias = (genres, template, fragmento) => {

  fragmento.innerHTML = '';

  genres.forEach( genre => {
    const clone = template.cloneNode(true);
    clone.querySelector('a').innerHTML = genre.name;
    clone.querySelector('a').setAttribute('title', 'Categoría - ' + genre.name); 
    clone.querySelector('a').onclick = () => { 
      location.hash = '#category=' + genre.id + '-' + genre.name;
     };

     fragmento.appendChild(clone);
  });

}
 
// a r r o j a n d o   t e n d e n c i a s 
// a r r o j a n d o   t e n d e n c i a s 

const getTrendingMoviesPreview = async () => { 
  const {data} = await api('trending/all/day');
  const movies = data.results;  
  variasPelis(movies, template, fragmento);
  contentTendencias.innerHTML = '';
  contentTendencias.appendChild(fragmento);

asignarTituloNivelTres('Tendencias', contentTendencias);

}


// c o n s i g u i e n d o   l a s   c a t e g o r i a s 
// c o n s i g u i e n d o   l a s   c a t e g o r i a s 
              
const getCategoriasMovies = async () => { 

  const {data} = await api('genre/movie/list');
  const genres = data.genres; 

  creaListaDeCategorias(genres, templateCate, fragmentoCate);

  listaCategorias.innerHTML = '';
  listaCategorias.appendChild(fragmentoCate);
  asignarTituloNivelTres('Todas las categorías', todasLasCategorias);
}

// p e l i c u l a s  p o r   c a t e g o r i a
// p e l i c u l a s  p o r   c a t e g o r i a 
// p e l i c u l a s  p o r   c a t e g o r i a 


const getCategoryMoviesPreview = async (categoryId, categoryName) => {
  const {data} = await api('discover/movie', {
    params: {
      with_genres: categoryId
    }
  });
  const movies = data.results;   
  variasPelis(movies, templatePeliculasUnaCat, fragmentoPeliculasUnaCat);
  contentPeliculasUnaCat.innerHTML = '';
  contentPeliculasUnaCat.appendChild(fragmentoPeliculasUnaCat);

  asignarTituloNivelTres('Peliculas de ' + categoryName, contentPeliculasUnaCat);
    
}


// formulario de busqueda 
// formulario de busqueda 
// formulario de busqueda 

formBusqueda.addEventListener('submit', (event) => {
  event.preventDefault();
  clicBuscar(inputBusqueda.value)
});

function clicBuscar(value) {
location.hash = '#search=' + value;
}

// v e r  P e l i c u l a s  P o r  S e a r c h
// v e r  P e l i c u l a s  P o r  S e a r c h
// v e r  P e l i c u l a s  P o r  S e a r c h
 
const verPeliculasPorSearch = async (query) => {
  const {data} = await api('search/movie', {
    params: {
      query,
    }
  });
  const movies = data.results;   
  variasPelis(movies, templateBusqueda, fragmentoBusqueda);
  contentBusqueda.innerHTML = '';
  contentBusqueda.appendChild(fragmentoBusqueda);

  asignarTituloNivelTres('Peliculas de ' + query, contentBusqueda);
    
}

// v e r   d e t a l l e   d e   u n a   p e l i c u l a 
// v e r   d e t a l l e   d e   u n a   p e l i c u l a 
// v e r   d e t a l l e   d e   u n a   p e l i c u l a 

const getRelatedMovies = async (id) => {
  const {data} = await api('movie/' + id + '/recommendations');
  const relatedMovies = data.results;  
  variasPelis(relatedMovies, template, fragmentoRelacionado); 
}

const verPelicula = async (id) => {
  const {data : movie} = await api('movie/' + id);
  
  const clone = templateDetails.cloneNode(true);
  clone.querySelector('h3').innerHTML = movie.title;
  clone.querySelector('.detailUno').innerHTML = movie.vote_average;
  clone.querySelector('.detailDos').innerHTML = movie.overview;
  clone.querySelector('img').src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  clone.querySelector('img').alt = movie.title;
  
  creaListaDeCategorias(movie.genres, templateCate, fragmentoCate);
  clone.querySelector('ul').appendChild(fragmentoCate);
  getRelatedMovies(id);
  clone.querySelector('.relacionadasContent').appendChild(fragmentoRelacionado);
  fragmentoDetails.appendChild(clone);
  contentDetailsUnaPeli.innerHTML = '';
  contentDetailsUnaPeli.appendChild(fragmentoDetails);
}
 

